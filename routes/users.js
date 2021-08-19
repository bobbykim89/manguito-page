if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route   POST api/users
// @ desc   Register a user
// access   Public
router.post(
  '/',
  [
    check('name', 'Please add Username').not().isEmpty(),
    check('email', 'Please include a valid email address')
      .isEmail()
      .normalizeEmail(),
    check(
      'password',
      'Please enter a password with 6 to 16 characters'
    ).isLength({ min: 6, max: 16 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password, admin } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          msg: 'Following email address is already in use, Please use different Email',
        });
      }
      user = new User({
        name,
        email,
        password,
        admin,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      const payload = {
        user: {
          id: user.id,
          admin: user.admin,
        },
      };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
