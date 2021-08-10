const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  text: {
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
});

module.exports = mongoose.model('comment', CommentSchema);
