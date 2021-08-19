if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const connectDB = require('./config/db');
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(mongoSanitize());

app.use(helmet());

const scriptSrcUrls = [
  'https://cdn.jsdelivr.net',
  'https://kit.fontawesome.com',
  'https://cdnjs.cloudflare.com',
  'https://cdn.jsdelivr.net',
];
const styleSrcUrls = [
  'https://kit-free.fontawesome.com',
  'https://cdn.jsdelivr.net',
  'https://api.tiles.mapbox.com',
  'https://fonts.googleapis.com',
  'https://use.fontawesome.com',
];
const fontSrcUrls = [];
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: [],
      connectSrc: ["'self'"],
      scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
      styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
      workerSrc: ["'self'", 'blob:'],
      childSrc: ['blob:'],
      objectSrc: [],
      imgSrc: [
        "'self'",
        'blob:',
        'data:',
        'https://res.cloudinary.com/dwgni1x3t/', // CLOUDINARY ACCOUNT
        'https://images.unsplash.com',
      ],
      fontSrc: ["'self'", ...fontSrcUrls],
    },
  })
);

app.get('/', (req, res) => res.json({ msg: 'Welcome to Manguito Page!' }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/comments', require('./routes/comments'));

// Serve static assets in production
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
