'use strict';
module.exports = function(app) {
  var fulcrum = require('../controllers/fulcrumController');

  // fulcrum Routes
  app.route('/works')
    .get(fulcrum.list_all_works)
    .post(fulcrum.create_a_works);
    
  app.route('/users')
    .get(fulcrum.list_all_users)
    .post(fulcrum.create_a_users);

  app.route('/works/:workId')
    .get(fulcrum.read_a_work)
    .put(fulcrum.update_a_work)
    .delete(fulcrum.delete_a_work);

  app.route('/user/:userId')
    .get(fulcrum.read_a_work)
    .put(fulcrum.update_a_work)
    .delete(fulcrum.delete_a_work);
};
