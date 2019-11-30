'use strict';
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var fs = require('fs');
var path = require('path');
var filepreview = require('filepreview-es6');
module.exports = function(app) {
  var fulcrum = require('../controllers/fulcrumController');

  // fulcrum Routes
  app.route('/works')
    .get(fulcrum.list_all_works)
    .post(fulcrum.create_a_works);
    
  app.route('/works/:workId')
    .get(fulcrum.read_a_work)
    .put(fulcrum.update_a_work)
    .delete(fulcrum.delete_a_work);
    
  app.route('/users')
    .get(fulcrum.list_all_users)
    .post(fulcrum.create_a_users);

  app.route('/users/:userId')
    .get(fulcrum.read_a_user)
    .put(fulcrum.update_a_user)
    .delete(fulcrum.delete_a_user);

  app.route('/typesOfWorks')
    .get(fulcrum.list_all_types)
    .post(fulcrum.create_a_types);

  app.route('/typesOfWorks/:typeId')
    .get(fulcrum.read_a_type)
    .put(fulcrum.update_a_type)
    .delete(fulcrum.delete_a_type);
  
    app.route('/uploadphoto').post(
      upload.single("file"),
      (req, res) => {
        const tempPath = req.file.path;
        const targetPath = path.join(__dirname,"../../uploads/image/" + req.body.student_id + path.extname(req.file.originalname));
        fs.rename(tempPath, targetPath, err => {
          if (!filepreview.generateSync(targetPath, path.join(__dirname, "../../uploads/preview/" + req.body.student_id + '.jpg'))) {
            console.log('Oops, something went wrong.');
          } else {
            console.log('File preview done!');
          };
          res
            .status(200)
            .contentType("text/plain")
            .end("File uploaded!");
        });
      }
    );

};
