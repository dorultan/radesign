import Project from '../models/project';
import multer from 'multer';
import fs from 'fs';

const replaceSpaceFromString = (string) => {
  let str = string.toLowerCase();
  while (str.includes(' ')) {
      str = str.replace(' ', '-');
  }

  return str;
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'api/uploads/')
  },

  filename: function (req, file, cb) {
    let filename = replaceSpaceFromString(file.originalname);
    cb(null, filename);
  }
});

const storeWithMetaImage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'api/uploads');
  },
  filename: function(req, file, cb) {
    let filename = replaceSpaceFromString(file.originalname);



    cb(null, 'meta-image-' + filename)
  }
})


const deleteFiles = (arr, cb) => {

  arr.forEach((filePath, idx) => {

    fs.unlink(filePath, (err) => {

      if(err) {
        cb(err);
        return;
      } else if(idx === arr.length -1) {
          cb(null);
      }
    })
  })
}

const upload = multer({storage: storage}).single('image');
const uploadWithMetaImage = multer({storage: storeWithMetaImage}).single('image');

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

  getAll(req, res) {

    Project

    .find()

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
          uploads: file.path
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

    .findOneAndUpdate(id,
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

      if(err) {
        return res.status(400).json({error: err})
      }

      fs.unlink(path, (err) => {
        if(err) {
          return res.status(400).json({error: err})
        }
        return res.status(200).json(data);
      })
    })
  },

  create(req, res) {

    uploadWithMetaImage(req, res, function(err) {
			const file = req.file;
			if(err instanceof multer.MulterError) {
        console.log(err);
        return res.status(500).json(err);
			}

      if(file) {
        Project

        .create({
          imageUrl: file.path,
          description: req.body.description,
          name: req.body.name,
          uid: replaceSpaceFromString(req.body.name),
          tag: req.body.tag,
          color: req.body.color
        }, (err, data) => {
          if(err) {
            return res.status(404).json({message: err.message});
          }

            return res.status(200).json(data);
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

    uploadWithMetaImage(req, res, function(err) {
      const file = req.file;
      const uid = req.body.uid;
      const body = req.body;

      if(file) {
        Project
        .findOneAndUpdate({uid: uid},
          {
            imageUrl: file.path,
            description: body.description,
            name: body.name,
            tag: body.tag,
            color: body.color,
            uid: replaceSpaceFromString(body.name)
          }, {new: true})

        .exec((err, data) => {
          if(err) {
            return res.status(404).json({message: 'The project is not updated.'})
          }

          fs.unlink(body.oldImagePath, (err) => {
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
      deleteFiles(images, (err) => {
        if(err) {
          return res.status(405).json({message: "Can't remove files.", error: err})
        }

        return res.status(200).json(data);
      })

    })
  }
}

export default projectsController;
