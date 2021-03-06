import Project from '../models/project';
import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import fs from 'fs';

const replaceSpaceFromString = (string) => {
  let str = string.toLowerCase();
  while (str.includes(' ')) {
      str = str.replace(' ', '-');
  }

  return str;
}


aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'eu-west-2'
})
const s3 = new aws.S3()

const storage = multerS3({
  s3: s3,
  bucket: 'radesign',
  acl: 'public-read',
  key: function(req, file, cb) {
    cb(null, file.originalname);
  }
})

const upload = multer({storage: storage}).single('image');


const deleteFiles = (arr, cb) => {
  const params = {
    Delete: {
      Objects: [

      ],
      Quiet: false
    },
    Bucket: 'radesign'
  }
  arr.forEach((fileUrl, idx) => {
    let key = fileUrl.split('/');
    key = key[key.length -1];
    params.Delete.Objects.push({
      Key: key
    })
  })
  s3.deleteObjects(params, cb)
}

const projectsController = {
  get(req, res, next) {

    if(req.query.uid) {
      Project
      .findOne({uid: req.query.uid})

      .exec((err, data) => {

        if(err) {
          return res.status(404).json({message: "Not found"});
        }

        return res.status(200).json(data);
      })

    }
    else {
      next();
    }

  },

  reOrder(req, res) {
    const uid = req.body.uid;
    const newIndex = req.body.index;

    Project
    .findOne({uid: uid})
    .exec((err, data) => {

      if(err) {
        return res.status(404).json(err);
      }

      Project
      .findOneAndUpdate({index: newIndex}, {index: data.index})
      .exec((err, data) => {


        if(err) {

          return res.status(404).json(err);
        }

        Project.findOneAndUpdate({uid: uid}, {index: newIndex}, {new: true})

        .exec((err, data) => {

          if(err) {
            return res.status(404).json(err);
          }

          return res.status(200).json(data)
        })
      })
    })
  },

  getAll(req, res) {

    Project

    .find()
    .sort({index: 1})
    .exec((err, data) => {

      if(err) {
        return  res.status(404).json({message: "Projects not found"})
      }

      res.status(200).json(data);
    })
  },

  addImage(req, res) {
    upload(req, res, function(err) {
      const file = req.file;

      const uid = req.body.uid;

      if(err instanceof multer.MulterError) {
        return res.status(400).json({multerError: err});
      }

      Project

      .findOneAndUpdate({uid: uid},
      {
        $push: {
          uploads: file.location
        }
      },
      {
        new: true
      })

      .exec((err, data) => {
        if(err) {
          return res.status(400).json({error: err})
        }

        return res.status(200).json(data);
      })
    })
  },

  removeImage(req, res) {
    const uid = req.body.uid;
    const path = req.body.path;
    Project

    .findOneAndUpdate({uid: uid},
    {
      $pull: {
        uploads: path
      }
    },
    {
      upsert: true,
      new: true
    })

    .exec((err, data) => {
      let key = path.split('/');
      key = key[key.length -1];

      if(err) {
        return res.status(400).json({error: err})
      }

      s3.deleteObject({Bucket: 'radesign', Key: key}, (err, success) => {
        if(err) {
          return res.status(400).json({error: err})
        }
        return res.status(200).json(data);
      })
    })
  },

  create(req, res) {

    upload(req, res, function(err) {
			const file = req.file;
			if(err instanceof multer.MulterError) {
        return res.status(500).json(err);
			}

      if(file) {

        Project.countDocuments({}, function(err, count) {

            Project

            .create({
              imageUrl: file.location,
              description: req.body.description,
              name: req.body.name,
              uid: replaceSpaceFromString(req.body.name),
              tag: req.body.tag,
              color: req.body.color,
              index: count
            }, (err, data) => {
              if(err) {
                return res.status(404).json({message: err.message});
              }

                return res.status(200).json(data);
            })

        })
      } else {
        res.status(500).json({message: "Can't upload image."})
      }

    })
  },

  update(req, res) {
    const uid = req.body.uid;
    const body = req.body;
    Project
    .findOneAndUpdate({uid: uid},
      {
        description: body.description,
        name: body.name,
        tag: req.body.tag,
        color: req.body.color,
        uid: replaceSpaceFromString(req.body.uid)
      }, {new: true})

    .exec((err, data) => {
      if(err) {
        return res.status(404).json({message: 'The project is not updated.'})
      }

      res.status(200).json(data)
    })
  },

  updateImage(req, res, next) {

    upload(req, res, function(err) {
      const file = req.file;
      const uid = req.body.uid;
      const body = req.body;

      if(file) {
        Project
        .findOneAndUpdate({uid: uid},
          {
            imageUrl: file.location,
            description: body.description,
            name: body.name,
            tag: body.tag,
            color: body.color,
            uid: replaceSpaceFromString(body.name)
          }, {new: true})

        .exec((err, data) => {
          let key = body.oldImagePath.split('/');
          key = key[key.length -1];
          if(err) {
            return res.status(404).json({message: 'The project is not updated.'})
          }

          s3.deleteObject({Bucket: 'radesign', Key: key}, (err, success) => {
            if(err) {
              return res.status(404).json({message: "Can't remove image."})
            }

            return res.status(200).json(data);
          })
        })
        // Update the project based on project_id received from the body;
      }

      else {
        next()
      }
    })
  },

  delete(req, res) {

    Project

    .findOneAndRemove({uid: req.query.uid})

    .exec((err, data) => {
      let images = [];

      if(err) {

        return res.status(400).json({message: "Can't remove the project."});
      }
      images.push(data.imageUrl);
      images = images.concat(data.uploads);

      deleteFiles(images, (err, success) => {
        if(err) {
          return res.status(405).json({message: "Can't remove files.", error: err})
        }
        return res.status(200).json(data);
      })

    })
  }
}

export default projectsController;
