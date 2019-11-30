'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WorkSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the email'
  },
  section: {
    type: String,
    required: 'Kindly enter the password'
  },
  genre: {
    type: String,
    required: 'Kindly enter the name'
  },
  author: {
    type: String
  },
  text: {
    type: String,
    required: 'Kindly select the avatar'
  },
  image: {
    type: String,
    required: 'Kindly select the avatar'
  },
  authorId: {
    type: String,
    required: 'Kindly select the avatar'
  },
  date: {
    type: String,
    required: 'Kindly select the avatar'
  },
});

var UserSchema = new Schema({
  email: {
    type: String,
    required: 'Kindly enter the email'
  },
  password: {
    type: String,
    required: 'Kindly enter the password'
  },
  about_u: {
    type: Object
  },
  regist_date: {
    type: String,
    required: 'Kindly enter the date'
  },
  avatar: {
    type: String,
    required: 'Kindly select the avatar'
  }
});

var TypesOfWorksSchema = new Schema({
  verses: {
    type: Array,
    required: 'Kindly enter the verse'
  },
  books: {
    type: Array,
    required: 'Kindly enter the book'
  },
  articles: {
    type: Array,
    required: 'Kindly enter the article'
  },
});

module.exports = mongoose.model('Works', WorkSchema);
module.exports = mongoose.model('Users', UserSchema);
module.exports = mongoose.model('TypesOfWorks', TypesOfWorksSchema);