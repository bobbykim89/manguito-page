const mongoose = require('mongoose');

// const ImageSchema = mongoose.Schema({
//   url: String,
//   filename: String,
// });

const PostSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  imageId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'comment',
    },
  ],
});

module.exports = mongoose.model('post', PostSchema);
