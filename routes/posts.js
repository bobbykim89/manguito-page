if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Post = require('../models/Post');

// @route GET api/posts
// @ desc GET all posts
// access Public

// @route POST api/posts
// @desc  ADD new post
// @access  Private

// @route PUT api/posts/:id
// @desc  Update post
// access Private

// @route DELETE api/posts
// @desc  Delete post
// access Private

module.exports = router;
