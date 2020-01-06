exports.id = "main";
exports.modules = {

/***/ "./api/controllers/projectsController.js":
/*!***********************************************!*\
  !*** ./api/controllers/projectsController.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ \\\"./api/models/project.js\\\");\\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multer */ \\\"multer\\\");\\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_1__);\\n/* harmony import */ var multer_s3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multer-s3 */ \\\"multer-s3\\\");\\n/* harmony import */ var multer_s3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(multer_s3__WEBPACK_IMPORTED_MODULE_2__);\\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-sdk */ \\\"aws-sdk\\\");\\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_3__);\\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \\\"fs\\\");\\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\\n\\n\\n\\n\\n\\n\\nvar replaceSpaceFromString = function replaceSpaceFromString(string) {\\n  var str = string.toLowerCase();\\n  while (str.includes(' ')) {\\n    str = str.replace(' ', '-');\\n  }\\n\\n  return str;\\n};\\n\\naws_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.config.update({\\n  accessKeyId: \\\"AKIAJCF6UXSVA3ZA6E3Q\\\" || false,\\n  secretAccessKey: \\\"Ph5m3EuYYgQjgNJvabbvnLacRjRa/Hwb7QABw7WZ\\\" || false,\\n  region: 'eu-west-2'\\n});\\nvar s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_3___default.a.S3();\\n\\nvar storage = multer_s3__WEBPACK_IMPORTED_MODULE_2___default()({\\n  s3: s3,\\n  bucket: 'radesign',\\n  acl: 'public-read',\\n  key: function key(req, file, cb) {\\n    cb(null, file.originalname);\\n  }\\n});\\n\\nvar upload = multer__WEBPACK_IMPORTED_MODULE_1___default()({ storage: storage }).single('image');\\n\\nvar deleteFiles = function deleteFiles(arr, cb) {\\n  var params = {\\n    Delete: {\\n      Objects: [],\\n      Quiet: false\\n    },\\n    Bucket: 'radesign'\\n  };\\n  arr.forEach(function (fileUrl, idx) {\\n    params.Delete.Objects.push({\\n      key: fileUrl\\n    });\\n  });\\n\\n  s3.deleteObjects(params, cb);\\n};\\n\\nvar projectsController = {\\n  get: function get(req, res, next) {\\n\\n    if (req.query.uid) {\\n      _models_project__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].findOne({ uid: req.query.uid }).exec(function (err, data) {\\n\\n        if (err) {\\n          return res.status(404).json({ message: \\\"Not found\\\" });\\n        }\\n\\n        return res.status(200).json(data);\\n      });\\n    } else {\\n      next();\\n    }\\n  },\\n  getAll: function getAll(req, res) {\\n\\n    _models_project__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].find().exec(function (err, data) {\\n\\n      if (err) {\\n        return res.status(404).json({ message: \\\"Projects not found\\\" });\\n      }\\n\\n      res.status(200).json(data);\\n    });\\n  },\\n  addImage: function addImage(req, res) {\\n    upload(req, res, function (err) {\\n      var file = req.file;\\n\\n      var uid = req.body.uid;\\n\\n      if (err instanceof multer__WEBPACK_IMPORTED_MODULE_1___default.a.MulterError) {\\n        return res.status(400).json({ multerError: err });\\n      }\\n\\n      _models_project__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].findOneAndUpdate({ uid: uid }, {\\n        $push: {\\n          uploads: file.path\\n        }\\n      }, {\\n        new: true\\n      }).exec(function (err, data) {\\n        if (err) {\\n          return res.status(400).json({ error: err });\\n        }\\n\\n        return res.status(200).json(data);\\n      });\\n    });\\n  },\\n  removeImage: function removeImage(req, res) {\\n    var uid = req.body.uid;\\n    var path = req.body.path;\\n    _models_project__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].findOneAndUpdate(id, {\\n      $pull: {\\n        uploads: path\\n      }\\n    }, {\\n      upsert: true,\\n      new: true\\n    }).exec(function (err, data) {\\n\\n      if (err) {\\n        return res.status(400).json({ error: err });\\n      }\\n\\n      fs__WEBPACK_IMPORTED_MODULE_4___default.a.unlink(path, function (err) {\\n        if (err) {\\n          return res.status(400).json({ error: err });\\n        }\\n        return res.status(200).json(data);\\n      });\\n    });\\n  },\\n  create: function create(req, res) {\\n\\n    upload(req, res, function (err) {\\n      var file = req.file;\\n      if (err instanceof multer__WEBPACK_IMPORTED_MODULE_1___default.a.MulterError) {\\n        return res.status(500).json(err);\\n      }\\n\\n      if (file) {\\n        _models_project__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].create({\\n          imageUrl: file.location,\\n          description: req.body.description,\\n          name: req.body.name,\\n          uid: replaceSpaceFromString(req.body.name),\\n          tag: req.body.tag,\\n          color: req.body.color\\n        }, function (err, data) {\\n          if (err) {\\n            return res.status(404).json({ message: err.message });\\n          }\\n\\n          return res.status(200).json(data);\\n        });\\n      } else {\\n        res.status(500).json({ message: \\\"Can't upload image.\\\" });\\n      }\\n    });\\n  },\\n  update: function update(req, res) {\\n    var uid = req.body.uid;\\n    var body = req.body;\\n    _models_project__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].findOneAndUpdate({ uid: uid }, {\\n      description: body.description,\\n      name: body.name,\\n      tag: req.body.tag,\\n      color: req.body.color,\\n      uid: replaceSpaceFromString(req.body.uid)\\n    }, { new: true }).exec(function (err, data) {\\n      if (err) {\\n        return res.status(404).json({ message: 'The project is not updated.' });\\n      }\\n\\n      res.status(200).json(data);\\n    });\\n  },\\n  updateImage: function updateImage(req, res, next) {\\n\\n    uploadWithMetaImage(req, res, function (err) {\\n      var file = req.file;\\n      var uid = req.body.uid;\\n      var body = req.body;\\n\\n      if (file) {\\n        _models_project__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].findOneAndUpdate({ uid: uid }, {\\n          imageUrl: file.path,\\n          description: body.description,\\n          name: body.name,\\n          tag: body.tag,\\n          color: body.color,\\n          uid: replaceSpaceFromString(body.name)\\n        }, { new: true }).exec(function (err, data) {\\n          if (err) {\\n            return res.status(404).json({ message: 'The project is not updated.' });\\n          }\\n\\n          fs__WEBPACK_IMPORTED_MODULE_4___default.a.unlink(body.oldImagePath, function (err) {\\n            if (err) {\\n              return res.status(404).json({ message: \\\"Can't remove image.\\\" });\\n            }\\n\\n            return res.status(200).json(data);\\n          });\\n        });\\n        // Update the project based on project_id received from the body;\\n      } else {\\n        next();\\n      }\\n    });\\n  },\\n  delete: function _delete(req, res) {\\n\\n    _models_project__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].findOneAndRemove({ uid: req.query.uid }).exec(function (err, data) {\\n      var images = [];\\n\\n      if (err) {\\n\\n        return res.status(400).json({ message: \\\"Can't remove the project.\\\" });\\n      }\\n      images.push(data.imageUrl);\\n      images = images.concat(data.uploads);\\n\\n      deleteFiles(images, function (err, success) {\\n        if (err) {\\n          return res.status(405).json({ message: \\\"Can't remove files.\\\", error: err });\\n        }\\n        console.log(success);\\n        return res.status(200).json(data);\\n      });\\n    });\\n  }\\n};\\n\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (projectsController);//# sourceURL=[module]\\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvY29udHJvbGxlcnMvcHJvamVjdHNDb250cm9sbGVyLmpzPzE2NTIiXSwibmFtZXMiOlsicmVwbGFjZVNwYWNlRnJvbVN0cmluZyIsInN0cmluZyIsInN0ciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwiYXdzIiwiY29uZmlnIiwidXBkYXRlIiwiYWNjZXNzS2V5SWQiLCJwcm9jZXNzIiwic2VjcmV0QWNjZXNzS2V5IiwicmVnaW9uIiwiczMiLCJTMyIsInN0b3JhZ2UiLCJtdWx0ZXJTMyIsImJ1Y2tldCIsImFjbCIsImtleSIsInJlcSIsImZpbGUiLCJjYiIsIm9yaWdpbmFsbmFtZSIsInVwbG9hZCIsIm11bHRlciIsInNpbmdsZSIsImRlbGV0ZUZpbGVzIiwiYXJyIiwicGFyYW1zIiwiRGVsZXRlIiwiT2JqZWN0cyIsIlF1aWV0IiwiQnVja2V0IiwiZm9yRWFjaCIsImZpbGVVcmwiLCJpZHgiLCJwdXNoIiwiZGVsZXRlT2JqZWN0cyIsInByb2plY3RzQ29udHJvbGxlciIsImdldCIsInJlcyIsIm5leHQiLCJxdWVyeSIsInVpZCIsIlByb2plY3QiLCJmaW5kT25lIiwiZXhlYyIsImVyciIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImdldEFsbCIsImZpbmQiLCJhZGRJbWFnZSIsImJvZHkiLCJNdWx0ZXJFcnJvciIsIm11bHRlckVycm9yIiwiZmluZE9uZUFuZFVwZGF0ZSIsIiRwdXNoIiwidXBsb2FkcyIsInBhdGgiLCJuZXciLCJlcnJvciIsInJlbW92ZUltYWdlIiwiaWQiLCIkcHVsbCIsInVwc2VydCIsImZzIiwidW5saW5rIiwiY3JlYXRlIiwiaW1hZ2VVcmwiLCJsb2NhdGlvbiIsImRlc2NyaXB0aW9uIiwibmFtZSIsInRhZyIsImNvbG9yIiwidXBkYXRlSW1hZ2UiLCJ1cGxvYWRXaXRoTWV0YUltYWdlIiwib2xkSW1hZ2VQYXRoIiwiZGVsZXRlIiwiZmluZE9uZUFuZFJlbW92ZSIsImltYWdlcyIsImNvbmNhdCIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEseUJBQXlCLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsTUFBRCxFQUFZO0FBQ3pDLE1BQUlDLE1BQU1ELE9BQU9FLFdBQVAsRUFBVjtBQUNBLFNBQU9ELElBQUlFLFFBQUosQ0FBYSxHQUFiLENBQVAsRUFBMEI7QUFDdEJGLFVBQU1BLElBQUlHLE9BQUosQ0FBWSxHQUFaLEVBQWlCLEdBQWpCLENBQU47QUFDSDs7QUFFRCxTQUFPSCxHQUFQO0FBQ0QsQ0FQRDs7QUFVQUksOENBQUdBLENBQUNDLE1BQUosQ0FBV0MsTUFBWCxDQUFrQjtBQUNoQkMsZUFBYUMsc0JBQUEsSUFBaUMsS0FEOUI7QUFFaEJDLG1CQUFpQkQsMENBQUEsSUFBcUMsS0FGdEM7QUFHaEJFLFVBQVE7QUFIUSxDQUFsQjtBQUtBLElBQU1DLEtBQUssSUFBSVAsOENBQUdBLENBQUNRLEVBQVIsRUFBWDs7QUFFQSxJQUFNQyxVQUFVQyxnREFBUUEsQ0FBQztBQUN2QkgsTUFBSUEsRUFEbUI7QUFFdkJJLFVBQVEsVUFGZTtBQUd2QkMsT0FBSyxhQUhrQjtBQUl2QkMsT0FBSyxhQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0JDLEVBQXBCLEVBQXdCO0FBQzNCQSxPQUFHLElBQUgsRUFBU0QsS0FBS0UsWUFBZDtBQUNEO0FBTnNCLENBQVQsQ0FBaEI7O0FBU0EsSUFBTUMsU0FBU0MsNkNBQU1BLENBQUMsRUFBQ1YsU0FBU0EsT0FBVixFQUFQLEVBQTJCVyxNQUEzQixDQUFrQyxPQUFsQyxDQUFmOztBQUdBLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxHQUFELEVBQU1OLEVBQU4sRUFBYTtBQUMvQixNQUFNTyxTQUFTO0FBQ2JDLFlBQVE7QUFDTkMsZUFBUyxFQURIO0FBSU5DLGFBQU87QUFKRCxLQURLO0FBT2JDLFlBQVE7QUFQSyxHQUFmO0FBU0FMLE1BQUlNLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLEdBQVYsRUFBa0I7QUFDNUJQLFdBQU9DLE1BQVAsQ0FBY0MsT0FBZCxDQUFzQk0sSUFBdEIsQ0FBMkI7QUFDekJsQixXQUFLZ0I7QUFEb0IsS0FBM0I7QUFHRCxHQUpEOztBQU1BdEIsS0FBR3lCLGFBQUgsQ0FBaUJULE1BQWpCLEVBQXlCUCxFQUF6QjtBQUNELENBakJEOztBQW1CQSxJQUFNaUIscUJBQXFCO0FBQ3pCQyxLQUR5QixlQUNyQnBCLEdBRHFCLEVBQ2hCcUIsR0FEZ0IsRUFDWEMsSUFEVyxFQUNMOztBQUVsQixRQUFHdEIsSUFBSXVCLEtBQUosQ0FBVUMsR0FBYixFQUFrQjtBQUNoQkMsNkRBQU9BLENBQ05DLE9BREQsQ0FDUyxFQUFDRixLQUFLeEIsSUFBSXVCLEtBQUosQ0FBVUMsR0FBaEIsRUFEVCxFQUdDRyxJQUhELENBR00sVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7O0FBRW5CLFlBQUdELEdBQUgsRUFBUTtBQUNOLGlCQUFPUCxJQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsRUFBQ0MsU0FBUyxXQUFWLEVBQXJCLENBQVA7QUFDRDs7QUFFRCxlQUFPWCxJQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJGLElBQXJCLENBQVA7QUFDRCxPQVZEO0FBWUQsS0FiRCxNQWNLO0FBQ0hQO0FBQ0Q7QUFHRixHQXRCd0I7QUF3QnpCVyxRQXhCeUIsa0JBd0JsQmpDLEdBeEJrQixFQXdCYnFCLEdBeEJhLEVBd0JSOztBQUVmSSwyREFBT0EsQ0FFTlMsSUFGRCxHQUlDUCxJQUpELENBSU0sVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7O0FBRW5CLFVBQUdELEdBQUgsRUFBUTtBQUNOLGVBQVFQLElBQUlTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixFQUFDQyxTQUFTLG9CQUFWLEVBQXJCLENBQVI7QUFDRDs7QUFFRFgsVUFBSVMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCRixJQUFyQjtBQUNELEtBWEQ7QUFZRCxHQXRDd0I7QUF3Q3pCTSxVQXhDeUIsb0JBd0NoQm5DLEdBeENnQixFQXdDWHFCLEdBeENXLEVBd0NOO0FBQ2pCakIsV0FBT0osR0FBUCxFQUFZcUIsR0FBWixFQUFpQixVQUFTTyxHQUFULEVBQWM7QUFDN0IsVUFBTTNCLE9BQU9ELElBQUlDLElBQWpCOztBQUVBLFVBQU11QixNQUFNeEIsSUFBSW9DLElBQUosQ0FBU1osR0FBckI7O0FBRUEsVUFBR0ksZUFBZXZCLDZDQUFNQSxDQUFDZ0MsV0FBekIsRUFBc0M7QUFDcEMsZUFBT2hCLElBQUlTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixFQUFDTyxhQUFhVixHQUFkLEVBQXJCLENBQVA7QUFDRDs7QUFFREgsNkRBQU9BLENBRU5jLGdCQUZELENBRWtCLEVBQUNmLEtBQUtBLEdBQU4sRUFGbEIsRUFHQTtBQUNFZ0IsZUFBTztBQUNMQyxtQkFBU3hDLEtBQUt5QztBQURUO0FBRFQsT0FIQSxFQVFBO0FBQ0VDLGFBQUs7QUFEUCxPQVJBLEVBWUNoQixJQVpELENBWU0sVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDbkIsWUFBR0QsR0FBSCxFQUFRO0FBQ04saUJBQU9QLElBQUlTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixFQUFDYSxPQUFPaEIsR0FBUixFQUFyQixDQUFQO0FBQ0Q7O0FBRUQsZUFBT1AsSUFBSVMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCRixJQUFyQixDQUFQO0FBQ0QsT0FsQkQ7QUFtQkQsS0E1QkQ7QUE2QkQsR0F0RXdCO0FBd0V6QmdCLGFBeEV5Qix1QkF3RWI3QyxHQXhFYSxFQXdFUnFCLEdBeEVRLEVBd0VIO0FBQ3BCLFFBQU1HLE1BQU14QixJQUFJb0MsSUFBSixDQUFTWixHQUFyQjtBQUNBLFFBQU1rQixPQUFPMUMsSUFBSW9DLElBQUosQ0FBU00sSUFBdEI7QUFDQWpCLDJEQUFPQSxDQUVOYyxnQkFGRCxDQUVrQk8sRUFGbEIsRUFHQTtBQUNFQyxhQUFPO0FBQ0xOLGlCQUFTQztBQURKO0FBRFQsS0FIQSxFQVFBO0FBQ0VNLGNBQVEsSUFEVjtBQUVFTCxXQUFLO0FBRlAsS0FSQSxFQWFDaEIsSUFiRCxDQWFNLFVBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlOztBQUVuQixVQUFHRCxHQUFILEVBQVE7QUFDTixlQUFPUCxJQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsRUFBQ2EsT0FBT2hCLEdBQVIsRUFBckIsQ0FBUDtBQUNEOztBQUVEcUIsK0NBQUVBLENBQUNDLE1BQUgsQ0FBVVIsSUFBVixFQUFnQixVQUFDZCxHQUFELEVBQVM7QUFDdkIsWUFBR0EsR0FBSCxFQUFRO0FBQ04saUJBQU9QLElBQUlTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixFQUFDYSxPQUFPaEIsR0FBUixFQUFyQixDQUFQO0FBQ0Q7QUFDRCxlQUFPUCxJQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJGLElBQXJCLENBQVA7QUFDRCxPQUxEO0FBTUQsS0F6QkQ7QUEwQkQsR0FyR3dCO0FBdUd6QnNCLFFBdkd5QixrQkF1R2xCbkQsR0F2R2tCLEVBdUdicUIsR0F2R2EsRUF1R1I7O0FBRWZqQixXQUFPSixHQUFQLEVBQVlxQixHQUFaLEVBQWlCLFVBQVNPLEdBQVQsRUFBYztBQUNoQyxVQUFNM0IsT0FBT0QsSUFBSUMsSUFBakI7QUFDQSxVQUFHMkIsZUFBZXZCLDZDQUFNQSxDQUFDZ0MsV0FBekIsRUFBc0M7QUFDakMsZUFBT2hCLElBQUlTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkgsR0FBckIsQ0FBUDtBQUNKOztBQUVFLFVBQUczQixJQUFILEVBQVM7QUFDUHdCLCtEQUFPQSxDQUVOMEIsTUFGRCxDQUVRO0FBQ05DLG9CQUFVbkQsS0FBS29ELFFBRFQ7QUFFTkMsdUJBQWF0RCxJQUFJb0MsSUFBSixDQUFTa0IsV0FGaEI7QUFHTkMsZ0JBQU12RCxJQUFJb0MsSUFBSixDQUFTbUIsSUFIVDtBQUlOL0IsZUFBSzVDLHVCQUF1Qm9CLElBQUlvQyxJQUFKLENBQVNtQixJQUFoQyxDQUpDO0FBS05DLGVBQUt4RCxJQUFJb0MsSUFBSixDQUFTb0IsR0FMUjtBQU1OQyxpQkFBT3pELElBQUlvQyxJQUFKLENBQVNxQjtBQU5WLFNBRlIsRUFTRyxVQUFDN0IsR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDaEIsY0FBR0QsR0FBSCxFQUFRO0FBQ04sbUJBQU9QLElBQUlTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixFQUFDQyxTQUFTSixJQUFJSSxPQUFkLEVBQXJCLENBQVA7QUFDRDs7QUFFQyxpQkFBT1gsSUFBSVMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCRixJQUFyQixDQUFQO0FBQ0gsU0FmRDtBQWdCRCxPQWpCRCxNQWlCTztBQUNMUixZQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsRUFBQ0MsU0FBUyxxQkFBVixFQUFyQjtBQUNEO0FBRUYsS0EzQkQ7QUE0QkQsR0FySXdCO0FBdUl6QjVDLFFBdkl5QixrQkF1SWxCWSxHQXZJa0IsRUF1SWJxQixHQXZJYSxFQXVJUjtBQUNmLFFBQU1HLE1BQU14QixJQUFJb0MsSUFBSixDQUFTWixHQUFyQjtBQUNBLFFBQU1ZLE9BQU9wQyxJQUFJb0MsSUFBakI7QUFDQVgsMkRBQU9BLENBQ05jLGdCQURELENBQ2tCLEVBQUNmLEtBQUtBLEdBQU4sRUFEbEIsRUFFRTtBQUNFOEIsbUJBQWFsQixLQUFLa0IsV0FEcEI7QUFFRUMsWUFBTW5CLEtBQUttQixJQUZiO0FBR0VDLFdBQUt4RCxJQUFJb0MsSUFBSixDQUFTb0IsR0FIaEI7QUFJRUMsYUFBT3pELElBQUlvQyxJQUFKLENBQVNxQixLQUpsQjtBQUtFakMsV0FBSzVDLHVCQUF1Qm9CLElBQUlvQyxJQUFKLENBQVNaLEdBQWhDO0FBTFAsS0FGRixFQVFLLEVBQUNtQixLQUFLLElBQU4sRUFSTCxFQVVDaEIsSUFWRCxDQVVNLFVBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQ25CLFVBQUdELEdBQUgsRUFBUTtBQUNOLGVBQU9QLElBQUlTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixFQUFDQyxTQUFTLDZCQUFWLEVBQXJCLENBQVA7QUFDRDs7QUFFRFgsVUFBSVMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCRixJQUFyQjtBQUNELEtBaEJEO0FBaUJELEdBM0p3QjtBQTZKekI2QixhQTdKeUIsdUJBNkpiMUQsR0E3SmEsRUE2SlJxQixHQTdKUSxFQTZKSEMsSUE3SkcsRUE2Skc7O0FBRTFCcUMsd0JBQW9CM0QsR0FBcEIsRUFBeUJxQixHQUF6QixFQUE4QixVQUFTTyxHQUFULEVBQWM7QUFDMUMsVUFBTTNCLE9BQU9ELElBQUlDLElBQWpCO0FBQ0EsVUFBTXVCLE1BQU14QixJQUFJb0MsSUFBSixDQUFTWixHQUFyQjtBQUNBLFVBQU1ZLE9BQU9wQyxJQUFJb0MsSUFBakI7O0FBRUEsVUFBR25DLElBQUgsRUFBUztBQUNQd0IsK0RBQU9BLENBQ05jLGdCQURELENBQ2tCLEVBQUNmLEtBQUtBLEdBQU4sRUFEbEIsRUFFRTtBQUNFNEIsb0JBQVVuRCxLQUFLeUMsSUFEakI7QUFFRVksdUJBQWFsQixLQUFLa0IsV0FGcEI7QUFHRUMsZ0JBQU1uQixLQUFLbUIsSUFIYjtBQUlFQyxlQUFLcEIsS0FBS29CLEdBSlo7QUFLRUMsaUJBQU9yQixLQUFLcUIsS0FMZDtBQU1FakMsZUFBSzVDLHVCQUF1QndELEtBQUttQixJQUE1QjtBQU5QLFNBRkYsRUFTSyxFQUFDWixLQUFLLElBQU4sRUFUTCxFQVdDaEIsSUFYRCxDQVdNLFVBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQ25CLGNBQUdELEdBQUgsRUFBUTtBQUNOLG1CQUFPUCxJQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsRUFBQ0MsU0FBUyw2QkFBVixFQUFyQixDQUFQO0FBQ0Q7O0FBRURpQixtREFBRUEsQ0FBQ0MsTUFBSCxDQUFVZCxLQUFLd0IsWUFBZixFQUE2QixVQUFDaEMsR0FBRCxFQUFTO0FBQ3BDLGdCQUFHQSxHQUFILEVBQVE7QUFDTixxQkFBT1AsSUFBSVMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLEVBQUNDLFNBQVMscUJBQVYsRUFBckIsQ0FBUDtBQUNEOztBQUVELG1CQUFPWCxJQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJGLElBQXJCLENBQVA7QUFDRCxXQU5EO0FBT0QsU0F2QkQ7QUF3QkE7QUFDRCxPQTFCRCxNQTRCSztBQUNIUDtBQUNEO0FBQ0YsS0FwQ0Q7QUFxQ0QsR0FwTXdCO0FBc016QnVDLFFBdE15QixtQkFzTWxCN0QsR0F0TWtCLEVBc01icUIsR0F0TWEsRUFzTVI7O0FBRWZJLDJEQUFPQSxDQUVOcUMsZ0JBRkQsQ0FFa0IsRUFBQ3RDLEtBQUt4QixJQUFJdUIsS0FBSixDQUFVQyxHQUFoQixFQUZsQixFQUlDRyxJQUpELENBSU0sVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDbkIsVUFBSWtDLFNBQVMsRUFBYjs7QUFFQSxVQUFHbkMsR0FBSCxFQUFROztBQUVOLGVBQU9QLElBQUlTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixFQUFDQyxTQUFTLDJCQUFWLEVBQXJCLENBQVA7QUFDRDtBQUNEK0IsYUFBTzlDLElBQVAsQ0FBWVksS0FBS3VCLFFBQWpCO0FBQ0FXLGVBQVNBLE9BQU9DLE1BQVAsQ0FBY25DLEtBQUtZLE9BQW5CLENBQVQ7O0FBRUFsQyxrQkFBWXdELE1BQVosRUFBb0IsVUFBQ25DLEdBQUQsRUFBTXFDLE9BQU4sRUFBa0I7QUFDcEMsWUFBR3JDLEdBQUgsRUFBUTtBQUNOLGlCQUFPUCxJQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsRUFBQ0MsU0FBUyxxQkFBVixFQUFpQ1ksT0FBT2hCLEdBQXhDLEVBQXJCLENBQVA7QUFDRDtBQUNEc0MsZ0JBQVFDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBLGVBQU81QyxJQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJGLElBQXJCLENBQVA7QUFDRCxPQU5EO0FBUUQsS0F0QkQ7QUF1QkQ7QUEvTndCLENBQTNCOztBQWtPZVYsaUZBQWYiLCJmaWxlIjoiLi9hcGkvY29udHJvbGxlcnMvcHJvamVjdHNDb250cm9sbGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vbW9kZWxzL3Byb2plY3QnO1xyXG5pbXBvcnQgbXVsdGVyIGZyb20gJ211bHRlcic7XHJcbmltcG9ydCBtdWx0ZXJTMyBmcm9tICdtdWx0ZXItczMnO1xyXG5pbXBvcnQgYXdzIGZyb20gJ2F3cy1zZGsnO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5cclxuY29uc3QgcmVwbGFjZVNwYWNlRnJvbVN0cmluZyA9IChzdHJpbmcpID0+IHtcclxuICBsZXQgc3RyID0gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XHJcbiAgd2hpbGUgKHN0ci5pbmNsdWRlcygnICcpKSB7XHJcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKCcgJywgJy0nKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzdHI7XHJcbn1cclxuXHJcblxyXG5hd3MuY29uZmlnLnVwZGF0ZSh7XHJcbiAgYWNjZXNzS2V5SWQ6IHByb2Nlc3MuZW52LkFXU19BQ0NFU1NfS0VZX0lEIHx8IFwiQUtJQUpDRjZVWFNWQTNaQTZFM1FcIixcclxuICBzZWNyZXRBY2Nlc3NLZXk6IHByb2Nlc3MuZW52LkFXU19TRUNSRVRfQUNDRVNTX0tFWSB8fCBcIlBoNW0zRXVZWWdRamdOSnZhYmJ2bkxhY1JqUmEvSHdiN1FBQnc3V1pcIixcclxuICByZWdpb246ICdldS13ZXN0LTInXHJcbn0pXHJcbmNvbnN0IHMzID0gbmV3IGF3cy5TMygpXHJcblxyXG5jb25zdCBzdG9yYWdlID0gbXVsdGVyUzMoe1xyXG4gIHMzOiBzMyxcclxuICBidWNrZXQ6ICdyYWRlc2lnbicsXHJcbiAgYWNsOiAncHVibGljLXJlYWQnLFxyXG4gIGtleTogZnVuY3Rpb24ocmVxLCBmaWxlLCBjYikge1xyXG4gICAgY2IobnVsbCwgZmlsZS5vcmlnaW5hbG5hbWUpO1xyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IHVwbG9hZCA9IG11bHRlcih7c3RvcmFnZTogc3RvcmFnZX0pLnNpbmdsZSgnaW1hZ2UnKTtcclxuXHJcblxyXG5jb25zdCBkZWxldGVGaWxlcyA9IChhcnIsIGNiKSA9PiB7XHJcbiAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgRGVsZXRlOiB7XHJcbiAgICAgIE9iamVjdHM6IFtcclxuXHJcbiAgICAgIF0sXHJcbiAgICAgIFF1aWV0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIEJ1Y2tldDogJ3JhZGVzaWduJ1xyXG4gIH1cclxuICBhcnIuZm9yRWFjaCgoZmlsZVVybCwgaWR4KSA9PiB7XHJcbiAgICBwYXJhbXMuRGVsZXRlLk9iamVjdHMucHVzaCh7XHJcbiAgICAgIGtleTogZmlsZVVybFxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBzMy5kZWxldGVPYmplY3RzKHBhcmFtcywgY2IpXHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RzQ29udHJvbGxlciA9IHtcclxuICBnZXQocmVxLCByZXMsIG5leHQpIHtcclxuXHJcbiAgICBpZihyZXEucXVlcnkudWlkKSB7XHJcbiAgICAgIFByb2plY3RcclxuICAgICAgLmZpbmRPbmUoe3VpZDogcmVxLnF1ZXJ5LnVpZH0pXHJcblxyXG4gICAgICAuZXhlYygoZXJyLCBkYXRhKSA9PiB7XHJcblxyXG4gICAgICAgIGlmKGVycikge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHttZXNzYWdlOiBcIk5vdCBmb3VuZFwifSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIG5leHQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gIH0sXHJcblxyXG4gIGdldEFsbChyZXEsIHJlcykge1xyXG5cclxuICAgIFByb2plY3RcclxuXHJcbiAgICAuZmluZCgpXHJcblxyXG4gICAgLmV4ZWMoKGVyciwgZGF0YSkgPT4ge1xyXG5cclxuICAgICAgaWYoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuICByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVzc2FnZTogXCJQcm9qZWN0cyBub3QgZm91bmRcIn0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBhZGRJbWFnZShyZXEsIHJlcykge1xyXG4gICAgdXBsb2FkKHJlcSwgcmVzLCBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgY29uc3QgZmlsZSA9IHJlcS5maWxlO1xyXG5cclxuICAgICAgY29uc3QgdWlkID0gcmVxLmJvZHkudWlkO1xyXG5cclxuICAgICAgaWYoZXJyIGluc3RhbmNlb2YgbXVsdGVyLk11bHRlckVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHttdWx0ZXJFcnJvcjogZXJyfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFByb2plY3RcclxuXHJcbiAgICAgIC5maW5kT25lQW5kVXBkYXRlKHt1aWQ6IHVpZH0sXHJcbiAgICAgIHtcclxuICAgICAgICAkcHVzaDoge1xyXG4gICAgICAgICAgdXBsb2FkczogZmlsZS5wYXRoXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmV3OiB0cnVlXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAuZXhlYygoZXJyLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYoZXJyKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2Vycm9yOiBlcnJ9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICByZW1vdmVJbWFnZShyZXEsIHJlcykge1xyXG4gICAgY29uc3QgdWlkID0gcmVxLmJvZHkudWlkO1xyXG4gICAgY29uc3QgcGF0aCA9IHJlcS5ib2R5LnBhdGg7XHJcbiAgICBQcm9qZWN0XHJcblxyXG4gICAgLmZpbmRPbmVBbmRVcGRhdGUoaWQsXHJcbiAgICB7XHJcbiAgICAgICRwdWxsOiB7XHJcbiAgICAgICAgdXBsb2FkczogcGF0aFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cHNlcnQ6IHRydWUsXHJcbiAgICAgIG5ldzogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICAuZXhlYygoZXJyLCBkYXRhKSA9PiB7XHJcblxyXG4gICAgICBpZihlcnIpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2Vycm9yOiBlcnJ9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmcy51bmxpbmsocGF0aCwgKGVycikgPT4ge1xyXG4gICAgICAgIGlmKGVycikge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnJvcjogZXJyfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBjcmVhdGUocmVxLCByZXMpIHtcclxuXHJcbiAgICB1cGxvYWQocmVxLCByZXMsIGZ1bmN0aW9uKGVycikge1xyXG5cdFx0XHRjb25zdCBmaWxlID0gcmVxLmZpbGU7XHJcblx0XHRcdGlmKGVyciBpbnN0YW5jZW9mIG11bHRlci5NdWx0ZXJFcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xyXG5cdFx0XHR9XHJcblxyXG4gICAgICBpZihmaWxlKSB7XHJcbiAgICAgICAgUHJvamVjdFxyXG5cclxuICAgICAgICAuY3JlYXRlKHtcclxuICAgICAgICAgIGltYWdlVXJsOiBmaWxlLmxvY2F0aW9uLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IHJlcS5ib2R5LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgbmFtZTogcmVxLmJvZHkubmFtZSxcclxuICAgICAgICAgIHVpZDogcmVwbGFjZVNwYWNlRnJvbVN0cmluZyhyZXEuYm9keS5uYW1lKSxcclxuICAgICAgICAgIHRhZzogcmVxLmJvZHkudGFnLFxyXG4gICAgICAgICAgY29sb3I6IHJlcS5ib2R5LmNvbG9yXHJcbiAgICAgICAgfSwgKGVyciwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgaWYoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVzc2FnZTogZXJyLm1lc3NhZ2V9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHttZXNzYWdlOiBcIkNhbid0IHVwbG9hZCBpbWFnZS5cIn0pXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZShyZXEsIHJlcykge1xyXG4gICAgY29uc3QgdWlkID0gcmVxLmJvZHkudWlkO1xyXG4gICAgY29uc3QgYm9keSA9IHJlcS5ib2R5O1xyXG4gICAgUHJvamVjdFxyXG4gICAgLmZpbmRPbmVBbmRVcGRhdGUoe3VpZDogdWlkfSxcclxuICAgICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBib2R5LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIG5hbWU6IGJvZHkubmFtZSxcclxuICAgICAgICB0YWc6IHJlcS5ib2R5LnRhZyxcclxuICAgICAgICBjb2xvcjogcmVxLmJvZHkuY29sb3IsXHJcbiAgICAgICAgdWlkOiByZXBsYWNlU3BhY2VGcm9tU3RyaW5nKHJlcS5ib2R5LnVpZClcclxuICAgICAgfSwge25ldzogdHJ1ZX0pXHJcblxyXG4gICAgLmV4ZWMoKGVyciwgZGF0YSkgPT4ge1xyXG4gICAgICBpZihlcnIpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe21lc3NhZ2U6ICdUaGUgcHJvamVjdCBpcyBub3QgdXBkYXRlZC4nfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSlcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlSW1hZ2UocmVxLCByZXMsIG5leHQpIHtcclxuXHJcbiAgICB1cGxvYWRXaXRoTWV0YUltYWdlKHJlcSwgcmVzLCBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgY29uc3QgZmlsZSA9IHJlcS5maWxlO1xyXG4gICAgICBjb25zdCB1aWQgPSByZXEuYm9keS51aWQ7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keTtcclxuXHJcbiAgICAgIGlmKGZpbGUpIHtcclxuICAgICAgICBQcm9qZWN0XHJcbiAgICAgICAgLmZpbmRPbmVBbmRVcGRhdGUoe3VpZDogdWlkfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2VVcmw6IGZpbGUucGF0aCxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGJvZHkuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIG5hbWU6IGJvZHkubmFtZSxcclxuICAgICAgICAgICAgdGFnOiBib2R5LnRhZyxcclxuICAgICAgICAgICAgY29sb3I6IGJvZHkuY29sb3IsXHJcbiAgICAgICAgICAgIHVpZDogcmVwbGFjZVNwYWNlRnJvbVN0cmluZyhib2R5Lm5hbWUpXHJcbiAgICAgICAgICB9LCB7bmV3OiB0cnVlfSlcclxuXHJcbiAgICAgICAgLmV4ZWMoKGVyciwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgaWYoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVzc2FnZTogJ1RoZSBwcm9qZWN0IGlzIG5vdCB1cGRhdGVkLid9KVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZzLnVubGluayhib2R5Lm9sZEltYWdlUGF0aCwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICBpZihlcnIpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe21lc3NhZ2U6IFwiQ2FuJ3QgcmVtb3ZlIGltYWdlLlwifSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgcHJvamVjdCBiYXNlZCBvbiBwcm9qZWN0X2lkIHJlY2VpdmVkIGZyb20gdGhlIGJvZHk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIG5leHQoKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGRlbGV0ZShyZXEsIHJlcykge1xyXG5cclxuICAgIFByb2plY3RcclxuXHJcbiAgICAuZmluZE9uZUFuZFJlbW92ZSh7dWlkOiByZXEucXVlcnkudWlkfSlcclxuXHJcbiAgICAuZXhlYygoZXJyLCBkYXRhKSA9PiB7XHJcbiAgICAgIGxldCBpbWFnZXMgPSBbXTtcclxuXHJcbiAgICAgIGlmKGVycikge1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe21lc3NhZ2U6IFwiQ2FuJ3QgcmVtb3ZlIHRoZSBwcm9qZWN0LlwifSk7XHJcbiAgICAgIH1cclxuICAgICAgaW1hZ2VzLnB1c2goZGF0YS5pbWFnZVVybCk7XHJcbiAgICAgIGltYWdlcyA9IGltYWdlcy5jb25jYXQoZGF0YS51cGxvYWRzKTtcclxuXHJcbiAgICAgIGRlbGV0ZUZpbGVzKGltYWdlcywgKGVyciwgc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIGlmKGVycikge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHttZXNzYWdlOiBcIkNhbid0IHJlbW92ZSBmaWxlcy5cIiwgZXJyb3I6IGVycn0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xyXG4gICAgICB9KVxyXG5cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0c0NvbnRyb2xsZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\\n//# sourceURL=webpack-internal:///./api/controllers/projectsController.js\\n\");\n\n//# sourceURL=webpack:///./api/controllers/projectsController.js?");

/***/ })

};