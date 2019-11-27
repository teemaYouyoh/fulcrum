'use strict';

var mongoose = require('mongoose'),
  Work = mongoose.model('Works'),
  User = mongoose.model('Users');

exports.list_all_works = function(req, res) {
  Work.find({}, function(err, work) {
    if (err)
      res.send(err);
    res.json(work);
  });
};

exports.create_a_works = function(req, res) {
  var new_work = new Work(req.body);
  new_work.save(function(err, work) {
    if (err)
      res.send(err);
    res.json(work);
  });
};

exports.read_a_work = function(req, res) {
  Work.findById(req.params.workId, function(err, work) {
    if (err)
      res.send(err);
    res.json(work);
  });
};

exports.update_a_work = function(req, res) {
  Work.findOneAndUpdate({_id: req.params.workId}, req.body, {new: true}, function(err, work) {
    if (err)
      res.send(err);
    res.json(work);
  });
};

exports.delete_a_work = function(req, res) {


  Work.remove({
    _id: req.params.workId
  }, function(err, work) {
    if (err)
      res.send(err);
    res.json({ message: 'Work successfully deleted' });
  });
};

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_a_users = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.read_a_user = function(req, res) {
  Work.findById(req.params.workId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.delete_a_user = function(req, res) {


  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};
