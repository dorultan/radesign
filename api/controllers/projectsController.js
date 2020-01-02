import Project from '../models/project';
import multer from 'multer';
import fs from 'fs';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'api/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({storage: storage}).single('image');

const projectsController = {
  get(req, res, next) {

    if(req.query.project_id) {
      Project
      .findOne({_id: req.query.project_id})

      .exec((err, data) => {

        if(err) {
          return res.status(404).json({message: "Not found"});
        }

        res.status(200).json(data);
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
      const id = req.body.id;
      console.log(id)

      if(err instanceof multer.MulterError) {
        return res.status(400).json({multerError: err});
      }

      Project

      .findOneAndUpdate({_id: id},
      {
        $push: {
          uploads: file.path
        }
      },
      {
        new: true
      })

      .exec((err, data) => {
        console.log(data);
        if(err) {
          return res.status(400).json({error: err})
        }

        return res.status(200).json(data);
      })
    })
  },

  removeImage(req, res) {
    const id = req.body.id;
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

    upload(req, res, function(err) {
			const file = req.file;
			if(err instanceof multer.MulterError) {

        return res.status(500).json(err);
			}

      Project

      .create({
        imageUrl: file.path,
        description: req.body.description,
        name: req.body.name,
        tag: req.body.tag,
        color: req.body.color
      }, (err, data) => {

        if(err) {
          return res.status(404).json({message: "For some reasons, can't create data."});
        }

        res.status(200).json(data);
      })
    })
  },

  update(req, res) {
    const id = req.body.id;
    const body = req.body;
    Project
    .findOneAndUpdate({_id: id},
      {description: body.description, name: body.name, tag: req.body.tag, color: req.body.color}, {new: true})

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
      const id = req.body.id;
      const body = req.body;

      if(file) {
        Project
        .findOneAndUpdate({_id: id}, {imageUrl: file.path, description: body.description, name: body.name, tag: body.tag, color: body.color}, {new: true})

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

    .findOneAndRemove({_id: req.query.id})

    .exec((err, data) => {

      if(err) {

        return res.status(400).json({message: "Can't remove the project."});
      }

      fs.unlink(data.imageUrl, (err) => {

        if(err) {
          return res.status(404).json({message: 'The image was not found'});
        }

        res.status(200).json(data);
      })
    })
  }
}

export default projectsController;
