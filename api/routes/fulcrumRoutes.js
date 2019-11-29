'use strict';
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
};
