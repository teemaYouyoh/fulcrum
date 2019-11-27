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

var UserSchema = new Schema({
  email: {
    type: String,
    required: 'Kindly enter the email'
  },
  name: {
    type: String,
    required: 'Kindly enter the name'
  },
  password: {
    type: String,
    required: 'Kindly enter the password'
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
module.exports = mongoose.model('Users', UserSchema);