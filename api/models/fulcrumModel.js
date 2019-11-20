'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WorkSchema = new Schema({
  email: {
    type: String,
    required: 'Kindly enter the email'
  },
  password: {
    type: String,
    required: 'Kindly enter the password'
  },
  name: {
    type: String,
    required: 'Kindly enter the name'
  },
  about_u: {
    type: String
  },
  regist_date: {
    type: Date,
    default: Date.now
  },
  avatar: {
    type: String,
    required: 'Kindly select the avatar'
  }
});

module.exports = mongoose.model('Works', WorkSchema);