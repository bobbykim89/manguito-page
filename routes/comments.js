const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const Auth = require('../middleware/Auth');

// @route GET api/comments
// @ desc GET all comments
// access Public
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.json(comments);
  } catch (err) {
    console.err(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/comments
// @desc  ADD new comment
// @access  Private
router.post(
  '/',
  [
    Auth,
    [
      check('body', 'Please write down something')
        .not()
        .isEmpty()
        .trim()
        .escape(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select('-password');

      const newComment = new Comment({
        text: req.body.text,
        name: user.name,
        author: req.user.id,
        post: req.body.post,
      });
      const comment = await newComment.save();
      const posting = await Post.findById(req.body.post);
      posting.comments.unshift(newComment);
      await posting.save();
      res.json(comment);
    } catch (err) {
      console.err(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route DELETE api/comments/:comment_id
// @desc  Delete comment
// access Private
router.delete('/:id', Auth, async (req, res) => {
  const { id, admin } = req.user;

  try {
    const comment = await Comment.findById(req.params.id);
    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist' });
    }
    // Check User and proceed
    if (comment.author.toString() === id || admin) {
      // Delete Comment from both Post and Comment Schema
      await Comment.findByIdAndDelete(req.params.id);
      if (comment.post) {
        await Post.findByIdAndUpdate(comment.post, {
          $pull: { comments: req.params.id },
        });
      }

      res.json({ msg: 'Comment Successfully Deleted :D' });
    } else {
      // Block if it does not meet credential
      return res.status(404).json({ msg: 'Current user is not authorized' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
