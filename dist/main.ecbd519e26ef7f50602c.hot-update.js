exports.id = "main";
exports.modules = {

/***/ "./api/controllers/projectsController.js":
/*!***********************************************!*\
  !*** ./api/controllers/projectsController.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ \\\"./api/models/project.js\\\");\\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multer */ \\\"multer\\\");\\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_1__);\\n/* harmony import */ var multer_s3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multer-s3 */ \\\"multer-s3\\\");\\n/* harmony import */ var multer_s3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(multer_s3__WEBPACK_IMPORTED_MODULE_2__);\\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-sdk */ \\\"aws-sdk\\\");\\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_3__);\\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \\\"fs\\\");\\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\\n\\n\\n\\n\\n\\n\\nvar replaceSpaceFromString = function replaceSpaceFromString(string) {\\n  var str = string.toLowerCase();\\n  while (str.includes(' ')) {\\n    str = str.replace(' ', '-');\\n  }\\n\\n  return str;\\n};\\n\\nvar deleteFiles = function deleteFiles(arr, cb) {\\n\\n  arr.forEach(function (filePath, idx) {\\n\\n    fs__WEBPACK_IMPORTED_MODULE_4___default.a.unlink(filePath, function (err) {\\n\\n      if (err) {\\n        cb(err);\\n\\n        return;\\n      } else if (idx === arr.length - 1) {\\n        cb(null);\\n      }\\n    });\\n  });\\n};\\n\\naws_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.config.update({\\n  accessKeyId: \\\"AKIAJCF6UXSVA3ZA6E3Q\\\" || false,\\n  secretAccessKey: \\\"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\\\" || false,\\n  region: 'eu-west-2'\\n});\\nvar s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.S3();\\n\\nvar storage = multer_s3__WEBPACK_IMPORTED_MODULE_2___default()({\\n  s3: s3,\\n  bucket: 'radesign',\\n  acl: 'public-read',\\n  metaData: function metaData(req, file, cb) {\\n    cb(null, { fieldName: replaceSpaceFromString(file.fieldName), filename: replaceSpaceFromString(file.originalname) });\\n  },\\n  key: function key(req, file, cb) {\\n    cb(null, Date.now().toString());\\n  }\\n});\\n\\nvar upload = multer__WEBPACK_IMPORTED_MODULE_1___default()({ storage: storage }).single('image');\\n\\nvar projectsController = {\\n  get: function get(req, res, next) {\\n\\n    if (req.query.uid) {\\n      _models_project__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].findOne({ uid: req.query.uid }).exec(function (err, data) {\\n\\n        if (err) {\\n          return res.status(404).json({ message: \\\"Not found\\\" });\\n        }\\n\\n        return res.status(200).json(data);\\n      });\\n    } else {\\n      next();\\n    }\\n  },\\n  getAll: function getAll(req, res) {\\n\\n    _models_project__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].find().exec(function (err, data) {\\n\\n      if (err) {\\n        return res.status(404).json({ message: \\\"Projects not found\\\" });\\n      }\\n\\n      res.status(200).json(data);\\n    });\\n  },\\n  addImage: function addImage(req, res) {\\n    upload(req, res, function (err) {\\n      var file = req.file;\\n\\n      var uid = req.body.uid;\\n\\n      if (err instanceof multer__WEBPACK_IMPORTED_MODULE_1___default.a.MulterError) {\\n        return res.status(400).json({ multerError: err });\\n      }\\n\\n      _models_project__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].findOneAndUpdate({ uid: uid }, {\\n        $push: {\\n          uploads: file.path\\n        }\\n      }, {\\n        new: true\\n      }).exec(function (err, data) {\\n        if (err) {\\n          return res.status(400).json({ error: err });\\n        }\\n\\n        return res.status(200).json(data);\\n      });\\n    });\\n  },\\n  removeImage: function removeImage(req, res) {\\n    var uid = req.body.uid;\\n    var path = req.body.path;\\n    _models_project__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].findOneAndUpdate(id, {\\n      $pull: {\\n        uploads: path\\n      }\\n    }, {\\n      upsert: true,\\n      new: true\\n    }).exec(function (err, data) {\\n\\n      if (err) {\\n        return res.status(400).json({ error: err });\\n      }\\n\\n      fs__WEBPACK_IMPORTED_MODULE_4___default.a.unlink(path, function (err) {\\n        if (err) {\\n          return res.status(400).json({ error: err });\\n        }\\n        return res.status(200).json(data);\\n      });\\n    });\\n  },\\n  create: function create(req, res) {\\n\\n    upload(req, res, function (err) {\\n      var file = req.file;\\n      if (err instanceof multer__WEBPACK_IMPORTED_MODULE_1___default.a.MulterError) {\\n        return res.status(500).json(err);\\n      }\\n      console.log(err);\\n\\n      if (file) {\\n        _models_project__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].create({\\n          imageUrl: file.path,\\n          description: req.body.description,\\n          name: req.body.name,\\n          uid: replaceSpaceFromString(req.body.name),\\n          tag: req.body.tag,\\n          color: req.body.color\\n        }, function (err, data) {\\n          if (err) {\\n            return res.status(404).json({ message: err.message });\\n          }\\n\\n          return res.status(200).json(data);\\n        });\\n      } else {\\n        res.status(500).json({ message: \\\"Can't upload image.\\\" });\\n      }\\n    });\\n  },\\n  update: function update(req, res) {\\n    var uid = req.body.uid;\\n    var body = req.body;\\n    _models_project__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].findOneAndUpdate({ uid: uid }, {\\n      description: body.description,\\n      name: body.name,\\n      tag: req.body.tag,\\n      color: req.body.color,\\n      uid: replaceSpaceFromString(req.body.uid)\\n    }, { new: true }).exec(function (err, data) {\\n      if (err) {\\n        return res.status(404).json({ message: 'The project is not updated.' });\\n      }\\n\\n      res.status(200).json(data);\\n    });\\n  },\\n  updateImage: function updateImage(req, res, next) {\\n\\n    uploadWithMetaImage(req, res, function (err) {\\n      var file = req.file;\\n      var uid = req.body.uid;\\n      var body = req.body;\\n\\n      if (file) {\\n        _models_project__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].findOneAndUpdate({ uid: uid }, {\\n          imageUrl: file.path,\\n          description: body.description,\\n          name: body.name,\\n          tag: body.tag,\\n          color: body.color,\\n          uid: replaceSpaceFromString(body.name)\\n        }, { new: true }).exec(function (err, data) {\\n          if (err) {\\n            return res.status(404).json({ message: 'The project is not updated.' });\\n          }\\n\\n          fs__WEBPACK_IMPORTED_MODULE_4___default.a.unlink(body.oldImagePath, function (err) {\\n            if (err) {\\n              return res.status(404).json({ message: \\\"Can't remove image.\\\" });\\n            }\\n\\n            return res.status(200).json(data);\\n          });\\n        });\\n        // Update the project based on project_id received from the body;\\n      } else {\\n        next();\\n      }\\n    });\\n  },\\n  delete: function _delete(req, res) {\\n\\n    _models_project__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].findOneAndRemove({ uid: req.query.uid }).exec(function (err, data) {\\n      var images = [];\\n\\n      if (err) {\\n\\n        return res.status(400).json({ message: \\\"Can't remove the project.\\\" });\\n      }\\n      images.push(data.imageUrl);\\n      images = images.concat(data.uploads);\\n      deleteFiles(images, function (err) {\\n        if (err) {\\n          return res.status(405).json({ message: \\\"Can't remove files.\\\", error: err });\\n        }\\n\\n        return res.status(200).json(data);\\n      });\\n    });\\n  }\\n};\\n\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (projectsController);//# sourceURL=[module]\\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvY29udHJvbGxlcnMvcHJvamVjdHNDb250cm9sbGVyLmpzPzE2NTIiXSwibmFtZXMiOlsicmVwbGFjZVNwYWNlRnJvbVN0cmluZyIsInN0cmluZyIsInN0ciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwiZGVsZXRlRmlsZXMiLCJhcnIiLCJjYiIsImZvckVhY2giLCJmaWxlUGF0aCIsImlkeCIsImZzIiwidW5saW5rIiwiZXJyIiwibGVuZ3RoIiwiYXdzIiwiY29uZmlnIiwidXBkYXRlIiwiYWNjZXNzS2V5SWQiLCJwcm9jZXNzIiwic2VjcmV0QWNjZXNzS2V5IiwicmVnaW9uIiwiczMiLCJTMyIsInN0b3JhZ2UiLCJtdWx0ZXJTMyIsImJ1Y2tldCIsImFjbCIsIm1ldGFEYXRhIiwicmVxIiwiZmlsZSIsImZpZWxkTmFtZSIsImZpbGVuYW1lIiwib3JpZ2luYWxuYW1lIiwia2V5IiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwidXBsb2FkIiwibXVsdGVyIiwic2luZ2xlIiwicHJvamVjdHNDb250cm9sbGVyIiwiZ2V0IiwicmVzIiwibmV4dCIsInF1ZXJ5IiwidWlkIiwiUHJvamVjdCIsImZpbmRPbmUiLCJleGVjIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZ2V0QWxsIiwiZmluZCIsImFkZEltYWdlIiwiYm9keSIsIk11bHRlckVycm9yIiwibXVsdGVyRXJyb3IiLCJmaW5kT25lQW5kVXBkYXRlIiwiJHB1c2giLCJ1cGxvYWRzIiwicGF0aCIsIm5ldyIsImVycm9yIiwicmVtb3ZlSW1hZ2UiLCJpZCIsIiRwdWxsIiwidXBzZXJ0IiwiY3JlYXRlIiwiY29uc29sZSIsImxvZyIsImltYWdlVXJsIiwiZGVzY3JpcHRpb24iLCJuYW1lIiwidGFnIiwiY29sb3IiLCJ1cGRhdGVJbWFnZSIsInVwbG9hZFdpdGhNZXRhSW1hZ2UiLCJvbGRJbWFnZVBhdGgiLCJkZWxldGUiLCJmaW5kT25lQW5k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QixRQUFqQjtBQUNBVSxlQUFTQSxPQUFPRSxNQUFQLENBQWNuQyxLQUFLWSxPQUFuQixDQUFUO0FBQ0F6RCxrQkFBWThFLE1BQVosRUFBb0IsVUFBQ3RFLEdBQUQsRUFBUztBQUMzQixZQUFHQSxHQUFILEVBQVE7QUFDTixpQkFBTzhCLElBQUlRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixFQUFDQyxTQUFTLHFCQUFWLEVBQWlDWSxPQUFPcEQsR0FBeEMsRUFBckIsQ0FBUDtBQUNEOztBQUVELGVBQU84QixJQUFJUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJGLElBQXJCLENBQVA7QUFDRCxPQU5EO0FBUUQsS0FyQkQ7QUFzQkQ7QUEvTndCLENBQTNCOztBQWtPZVQsaUZBQWYiLCJmaWxlIjoiLi9hcGkvY29udHJvbGxlcnMvcHJvamVjdHNDb250cm9sbGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vbW9kZWxzL3Byb2plY3QnO1xyXG5pbXBvcnQgbXVsdGVyIGZyb20gJ211bHRlcic7XHJcbmltcG9ydCBtdWx0ZXJTMyBmcm9tICdtdWx0ZXItczMnO1xyXG5pbXBvcnQgYXdzIGZyb20gJ2F3cy1zZGsnO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5cclxuY29uc3QgcmVwbGFjZVNwYWNlRnJvbVN0cmluZyA9IChzdHJpbmcpID0+IHtcclxuICBsZXQgc3RyID0gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XHJcbiAgd2hpbGUgKHN0ci5pbmNsdWRlcygnICcpKSB7XHJcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKCcgJywgJy0nKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzdHI7XHJcbn1cclxuXHJcblxyXG5jb25zdCBkZWxldGVGaWxlcyA9IChhcnIsIGNiKSA9PiB7XHJcblxyXG4gIGFyci5mb3JFYWNoKChmaWxlUGF0aCwgaWR4KSA9PiB7XHJcblxyXG4gICAgZnMudW5saW5rKGZpbGVQYXRoLCAoZXJyKSA9PiB7XHJcblxyXG4gICAgICBpZihlcnIpIHtcclxuICAgICAgICBjYihlcnIpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSBpZihpZHggPT09IGFyci5sZW5ndGggLTEpIHtcclxuICAgICAgICAgIGNiKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmF3cy5jb25maWcudXBkYXRlKHtcclxuICBhY2Nlc3NLZXlJZDogcHJvY2Vzcy5lbnYuQVdTX0FDQ0VTU19LRVlfSUQgfHwgXCJBS0lBSkNGNlVYU1ZBM1pBNkUzUVwiLFxyXG4gIHNlY3JldEFjY2Vzc0tleTogcHJvY2Vzcy5lbnYuQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZIHx8IFwiUGg1bTNFdVlZZ1FqZ05KdmFiYnZuTGFjUmpSYS9Id2I3UUFCdzdXWlwiLFxyXG4gIHJlZ2lvbjogJ2V1LXdlc3QtMidcclxufSlcclxuY29uc3QgczMgPSBuZXcgYXdzLlMzKClcclxuXHJcbmNvbnN0IHN0b3JhZ2UgPSBtdWx0ZXJTMyh7XHJcbiAgczM6IHMzLFxyXG4gIGJ1Y2tldDogJ3JhZGVzaWduJyxcclxuICBhY2w6ICdwdWJsaWMtcmVhZCcsXHJcbiAgbWV0YURhdGE6IGZ1bmN0aW9uKHJlcSwgZmlsZSwgY2IpIHtcclxuICAgIGNiKG51bGwsIHtmaWVsZE5hbWU6IHJlcGxhY2VTcGFjZUZyb21TdHJpbmcoZmlsZS5maWVsZE5hbWUpLCBmaWxlbmFtZTogcmVwbGFjZVNwYWNlRnJvbVN0cmluZyhmaWxlLm9yaWdpbmFsbmFtZSl9KTtcclxuICB9LFxyXG4gIGtleTogZnVuY3Rpb24ocmVxLCBmaWxlLCBjYikge1xyXG4gICAgY2IobnVsbCwgRGF0ZS5ub3coKS50b1N0cmluZygpKTtcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCB1cGxvYWQgPSBtdWx0ZXIoe3N0b3JhZ2U6IHN0b3JhZ2V9KS5zaW5nbGUoJ2ltYWdlJyk7XHJcblxyXG5jb25zdCBwcm9qZWN0c0NvbnRyb2xsZXIgPSB7XHJcbiAgZ2V0KHJlcSwgcmVzLCBuZXh0KSB7XHJcblxyXG4gICAgaWYocmVxLnF1ZXJ5LnVpZCkge1xyXG4gICAgICBQcm9qZWN0XHJcbiAgICAgIC5maW5kT25lKHt1aWQ6IHJlcS5xdWVyeS51aWR9KVxyXG5cclxuICAgICAgLmV4ZWMoKGVyciwgZGF0YSkgPT4ge1xyXG5cclxuICAgICAgICBpZihlcnIpIHtcclxuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVzc2FnZTogXCJOb3QgZm91bmRcIn0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBuZXh0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICB9LFxyXG5cclxuICBnZXRBbGwocmVxLCByZXMpIHtcclxuXHJcbiAgICBQcm9qZWN0XHJcblxyXG4gICAgLmZpbmQoKVxyXG5cclxuICAgIC5leGVjKChlcnIsIGRhdGEpID0+IHtcclxuXHJcbiAgICAgIGlmKGVycikge1xyXG4gICAgICAgIHJldHVybiAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe21lc3NhZ2U6IFwiUHJvamVjdHMgbm90IGZvdW5kXCJ9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgYWRkSW1hZ2UocmVxLCByZXMpIHtcclxuICAgIHVwbG9hZChyZXEsIHJlcywgZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSByZXEuZmlsZTtcclxuXHJcbiAgICAgIGNvbnN0IHVpZCA9IHJlcS5ib2R5LnVpZDtcclxuXHJcbiAgICAgIGlmKGVyciBpbnN0YW5jZW9mIG11bHRlci5NdWx0ZXJFcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7bXVsdGVyRXJyb3I6IGVycn0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBQcm9qZWN0XHJcblxyXG4gICAgICAuZmluZE9uZUFuZFVwZGF0ZSh7dWlkOiB1aWR9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJHB1c2g6IHtcclxuICAgICAgICAgIHVwbG9hZHM6IGZpbGUucGF0aFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5ldzogdHJ1ZVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLmV4ZWMoKGVyciwgZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmKGVycikge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnJvcjogZXJyfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgcmVtb3ZlSW1hZ2UocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHVpZCA9IHJlcS5ib2R5LnVpZDtcclxuICAgIGNvbnN0IHBhdGggPSByZXEuYm9keS5wYXRoO1xyXG4gICAgUHJvamVjdFxyXG5cclxuICAgIC5maW5kT25lQW5kVXBkYXRlKGlkLFxyXG4gICAge1xyXG4gICAgICAkcHVsbDoge1xyXG4gICAgICAgIHVwbG9hZHM6IHBhdGhcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXBzZXJ0OiB0cnVlLFxyXG4gICAgICBuZXc6IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgLmV4ZWMoKGVyciwgZGF0YSkgPT4ge1xyXG5cclxuICAgICAgaWYoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnJvcjogZXJyfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgZnMudW5saW5rKHBhdGgsIChlcnIpID0+IHtcclxuICAgICAgICBpZihlcnIpIHtcclxuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyb3I6IGVycn0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgY3JlYXRlKHJlcSwgcmVzKSB7XHJcblxyXG4gICAgdXBsb2FkKHJlcSwgcmVzLCBmdW5jdGlvbihlcnIpIHtcclxuXHRcdFx0Y29uc3QgZmlsZSA9IHJlcS5maWxlO1xyXG5cdFx0XHRpZihlcnIgaW5zdGFuY2VvZiBtdWx0ZXIuTXVsdGVyRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcclxuXHRcdFx0fVxyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcblxyXG4gICAgICBpZihmaWxlKSB7XHJcbiAgICAgICAgUHJvamVjdFxyXG5cclxuICAgICAgICAuY3JlYXRlKHtcclxuICAgICAgICAgIGltYWdlVXJsOiBmaWxlLnBhdGgsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogcmVxLmJvZHkuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBuYW1lOiByZXEuYm9keS5uYW1lLFxyXG4gICAgICAgICAgdWlkOiByZXBsYWNlU3BhY2VGcm9tU3RyaW5nKHJlcS5ib2R5Lm5hbWUpLFxyXG4gICAgICAgICAgdGFnOiByZXEuYm9keS50YWcsXHJcbiAgICAgICAgICBjb2xvcjogcmVxLmJvZHkuY29sb3JcclxuICAgICAgICB9LCAoZXJyLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICBpZihlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHttZXNzYWdlOiBlcnIubWVzc2FnZX0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe21lc3NhZ2U6IFwiQ2FuJ3QgdXBsb2FkIGltYWdlLlwifSlcclxuICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB1aWQgPSByZXEuYm9keS51aWQ7XHJcbiAgICBjb25zdCBib2R5ID0gcmVxLmJvZHk7XHJcbiAgICBQcm9qZWN0XHJcbiAgICAuZmluZE9uZUFuZFVwZGF0ZSh7dWlkOiB1aWR9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IGJvZHkuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgbmFtZTogYm9keS5uYW1lLFxyXG4gICAgICAgIHRhZzogcmVxLmJvZHkudGFnLFxyXG4gICAgICAgIGNvbG9yOiByZXEuYm9keS5jb2xvcixcclxuICAgICAgICB1aWQ6IHJlcGxhY2VTcGFjZUZyb21TdHJpbmcocmVxLmJvZHkudWlkKVxyXG4gICAgICB9LCB7bmV3OiB0cnVlfSlcclxuXHJcbiAgICAuZXhlYygoZXJyLCBkYXRhKSA9PiB7XHJcbiAgICAgIGlmKGVycikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVzc2FnZTogJ1RoZSBwcm9qZWN0IGlzIG5vdCB1cGRhdGVkLid9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICB1cGRhdGVJbWFnZShyZXEsIHJlcywgbmV4dCkge1xyXG5cclxuICAgIHVwbG9hZFdpdGhNZXRhSW1hZ2UocmVxLCByZXMsIGZ1bmN0aW9uKGVycikge1xyXG4gICAgICBjb25zdCBmaWxlID0gcmVxLmZpbGU7XHJcbiAgICAgIGNvbnN0IHVpZCA9IHJlcS5ib2R5LnVpZDtcclxuICAgICAgY29uc3QgYm9keSA9IHJlcS5ib2R5O1xyXG5cclxuICAgICAgaWYoZmlsZSkge1xyXG4gICAgICAgIFByb2plY3RcclxuICAgICAgICAuZmluZE9uZUFuZFVwZGF0ZSh7dWlkOiB1aWR9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZVVybDogZmlsZS5wYXRoLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYm9keS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgbmFtZTogYm9keS5uYW1lLFxyXG4gICAgICAgICAgICB0YWc6IGJvZHkudGFnLFxyXG4gICAgICAgICAgICBjb2xvcjogYm9keS5jb2xvcixcclxuICAgICAgICAgICAgdWlkOiByZXBsYWNlU3BhY2VGcm9tU3RyaW5nKGJvZHkubmFtZSlcclxuICAgICAgICAgIH0sIHtuZXc6IHRydWV9KVxyXG5cclxuICAgICAgICAuZXhlYygoZXJyLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICBpZihlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHttZXNzYWdlOiAnVGhlIHByb2plY3QgaXMgbm90IHVwZGF0ZWQuJ30pXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZnMudW5saW5rKGJvZHkub2xkSW1hZ2VQYXRoLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVycikge1xyXG4gICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVzc2FnZTogXCJDYW4ndCByZW1vdmUgaW1hZ2UuXCJ9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBwcm9qZWN0IGJhc2VkIG9uIHByb2plY3RfaWQgcmVjZWl2ZWQgZnJvbSB0aGUgYm9keTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbmV4dCgpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgZGVsZXRlKHJlcSwgcmVzKSB7XHJcblxyXG4gICAgUHJvamVjdFxyXG5cclxuICAgIC5maW5kT25lQW5kUmVtb3ZlKHt1aWQ6IHJlcS5xdWVyeS51aWR9KVxyXG5cclxuICAgIC5leGVjKChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgbGV0IGltYWdlcyA9IFtdO1xyXG5cclxuICAgICAgaWYoZXJyKSB7XHJcblxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7bWVzc2FnZTogXCJDYW4ndCByZW1vdmUgdGhlIHByb2plY3QuXCJ9KTtcclxuICAgICAgfVxyXG4gICAgICBpbWFnZXMucHVzaChkYXRhLmltYWdlVXJsKTtcclxuICAgICAgaW1hZ2VzID0gaW1hZ2VzLmNvbmNhdChkYXRhLnVwbG9hZHMpO1xyXG4gICAgICBkZWxldGVGaWxlcyhpbWFnZXMsIChlcnIpID0+IHtcclxuICAgICAgICBpZihlcnIpIHtcclxuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7bWVzc2FnZTogXCJDYW4ndCByZW1vdmUgZmlsZXMuXCIsIGVycm9yOiBlcnJ9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xyXG4gICAgICB9KVxyXG5cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0c0NvbnRyb2xsZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\\n//# sourceURL=webpack-internal:///./api/controllers/projectsController.js\\n\");\n\n//# sourceURL=webpack:///./api/controllers/projectsController.js?");

/***/ })

};