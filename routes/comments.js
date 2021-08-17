const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const Auth = require('../middleware/Auth');

// @route GET api/posts/:id/comments
// @ desc GET all posts
// access Public
router.get('/:id/comments', async (req, res) => {
  try {
    const comments = await Comment.find({}).sort({ date: -1 });
    res.json(comments);
  } catch (err) {
    console.err(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/posts
// @desc  ADD new post
// @access  Private
router.post(
  '/:id/comments',
  [Auth, [check('body', 'Please write down something').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select('-password');
      const posting = await Post.findById(req.params.id);
      const newComment = new Comment({
        text: req.body.text,
        name: user.name,
        author: req.user.id,
        post: req.params.id,
      });
      const comment = await newComment.save();
      posting.comments.unshift(newComment);
      await posting.save();
      res.json(comment);
    } catch (err) {
      console.err(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route DELETE api/posts/:id/comments/:comment_id
// @desc  Delete post
// access Private
router.delete('/:id/comments/:comment_id', Auth, async (req, res) => {
  const { id, comment_id } = req.params;
  const posting = await Post.findById(id);
  const comment = await Comment.findById(comment_id);

  // Make sure comment exists
  if (!comment) {
    return res.status(404).json({ msg: 'Comment does not exist' });
  }
  // Check User
  if (comment.author.toString() !== req.user.id) {
    return res.status(404).json({ msg: 'Current user is not authorized' });
  }
  // Delete Comment from both Post and Comment Schema
  await Post.findByIdAndUpdate(id, { $pull: { comments: comment_id } });
  await Comment.findByIdAndDelete(comment_id);
  res.json('Comment Successfully Deleted :D');
});

module.exports = router;
