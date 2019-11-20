'use strict';


var mongoose = require('mongoose'),
  Work = mongoose.model('Works');

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
