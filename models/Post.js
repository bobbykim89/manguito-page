const mongoose = require('mongoose');

const opts = { toJSON: { virtuals: true } };

const PostSchema = mongoose.Schema(
  {
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
  },
  opts
);

PostSchema.virtual('url').get(function () {
  return this.image.replace('/upload', '/upload/c_scale,w_1200/q_auto');
});

PostSchema.virtual('thumb').get(function () {
  return this.image.replace('/upload', '/upload/c_scale,w_250/f_auto');
});

module.exports = mongoose.model('post', PostSchema);
