# Manguito Page v0.1.4

App Deployed on heroku as [Manguito Page](https://manguitopage.herokuapp.com/).

## Scripts

In the project directory, you can run:

### `npm start`

Runs the Backend.\
PORT 5000 assigned [http://localhost:5000](http://localhost:5000)

### `npm run server`

runs backend using nodemon, any update on backend will be automatically applied.\

### `npm run dev`

Runs frontend and backend concurrently on localhost.\

App can be found in [http://localhost:3000](http://localhost:5000) for more information.

### `cd client && npm run watch`

Runs watching css on separate terminal to update app.css file automatically as file gets updated

## Dependencies

### Backend Dependencies

bcryptjs\
cloudinary\
dotenv\
express\
express-mongo-sanitize\
express-validator\
helmet\
jsonwebtoken\
multer\
multer-storage-cloudinary\
concurrently\
nodemon

### Frontend Dependencies

fontawesome\
tailwindcss/aspect-ratio\
tailwindcss-textshadow\
aos\
autoprefixer\
axios\
hamburger-react\
moment\
postcss-cli\
react-router-dom\
react-moment\
tailwindcss\
chokidar-cli\
uuid

## Changes

## Known Issues

1. There are some junk code that are not needed need to find them out and delete them some time to make it look cleaner.(working progress)

## Change Log

### v0.1.0

1. Initial release

### v0.1.1

1. Redesigned the landing page, navbar, and about page with more modern looking layout.
2. minor changes on design of most of other pages
3. Fixed the issue of express validator normalizing dots in email address
4. Fixed the issue of card flips on landing page not displaying on safari browser.

### v0.1.2

1. Optimized the image size using virtual schema and improved the page loading speed & general performance.
2. Now each post got own url instead of rendering current post every time.
3. Add 404 page.
4. Added copy url to clipboard feature.
5. Added functionality to go back to gallery upon clicking on backdrop(gray background) of post in larger screen device.

### v0.1.3

1. Added previous/next post buttons. you are going to sent to first post if you click next button on last post. also you will be sent to last post if you click previous button on first post.
2. Fixed issue of pictures not displayed properly in mobile page
3. Redesigned the 404 Not Found Page
4. Added Load More Feature to the gallery page
