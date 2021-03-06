const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { upload, cloudinary } = require('../cloudinary/config');

const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');
const Auth = require('../middleware/Auth');

// @route GET api/posts
// @ desc GET all posts
// access Public
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.err(err.message);
    res.status(500).send('Server Error');
  }
});

// @route GET api/posts/:id
// @ desc GET single post
// access Public
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    console.err(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/posts
// @desc  ADD new post
// @access  Private
router.post(
  '/',
  [
    Auth,
    upload.single('image'),
    [
      check('content', 'You need to write down some content')
        .not()
        .isEmpty()
        .trim()
        .escape(),
      check('image', 'Please upload an image file').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const { admin } = req.user;
    const errors = validationResult(req);
    if (!admin) {
      return res.status(401).json({ msg: 'Access denied...' });
    } else if (!errors.isEmpty) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select('-password');
      const newPost = new Post({
        content: req.body.content,
        image: req.file.path,
        imageId: req.file.filename,
        name: user.name,
        author: user.id,
      });
      const posting = await newPost.save();
      res.json(posting);
      console.log(posting);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route PUT api/posts/:id
// @desc  Update post
// access Private
// Update Post
router.put(
  '/:id',
  [
    Auth,
    [
      check('content', 'Please write some content')
        .not()
        .isEmpty()
        .trim()
        .escape(),
    ],
  ],
  async (req, res) => {
    const { id } = req.user;

    try {
      let posting = await Post.findById(req.params.id);
      if (!posting)
        return res.status(404).json({ msg: 'Posting not found :(' });

      // Making sure user is authorized
      if (posting.author.toString() !== id) {
        return res.status(401).json({ msg: 'Not Authorized' });
      }
      posting = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(posting);
      console.log(req.params);
      console.log(req.body);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route DELETE api/posts
// @desc  Delete post
// access Private
// Delete Post
router.delete('/:id', Auth, async (req, res) => {
  const { id } = req.user;

  try {
    let posting = await Post.findById(req.params.id);
    if (!posting) return res.status(404).json({ msg: 'Posting not found :(' });

    // Making sure user is authorized
    if (posting.author.toString() !== id) {
      return res.status(401).json({ msg: 'Not Authorized' });
    }
    if (posting.comments) {
      await Comment.deleteMany({
        _id: {
          $in: posting.comments,
        },
      });
    }
    // Remove Cloudinary image
    await cloudinary.uploader.destroy(posting.imageId);
    await Post.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Posting has been deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
