# Manguito Page v0.1.5

App Deployed on heroku as [Manguito Page](https://manguitopage.herokuapp.com/).

## Scripts

In the project directory, you can run:

### `yarn start`

Runs the Backend.\
PORT 5000 assigned [http://localhost:5000](http://localhost:5000)

### `yarn server`

runs backend using nodemon, any update on backend will be automatically applied.\

### `yarn dev`

Runs frontend and backend concurrently on localhost.\

App can be found in [http://localhost:3000](http://localhost:5000) for more information.

### `yarn watch:css`

Runs watching css on separate terminal to update app.css file automatically as file gets updated

## Dependencies

### Backend Dependencies

bcryptjs\
cloudinary\
express\
express-mongo-sanitize\
express-validator\
helmet\
jsonwebtoken\
multer\
multer-storage-cloudinary

### Backend Dev Dependencies

concurrently\
dotenv\
nodemon

### Frontend Dependencies

vite\
@vitejs/plugin-react\
js-cookie\
tailwindcss/aspect-ratio\
tailwindcss-textshadow\
aos\
axios\
hamburger-react\
moment\
react-router-dom\
react-moment\
uuid\
@fortawesome/fontawesome-svg-core\
@fortawesome/free-brands-svg-icons\
@fortawesome/free-solid-svg-icons

### Frontend Dev Dependencies

autoprefixer\
tailwindcss\
postcss

## Changes

1. Use Vite as bundler for frontend page instead of Webpack.
2. Create vite.config.js file for bundling configuration.
3. Config absolute path to use @/\* for ./src.
4. Update _.js file to _.jsx files.
5. Update components to use Font Awesome package instead of Material Icons from CDN.
6. Fix bug happening while navigating previous and next post.
7. Fix bug of Load more button not showing up when it is not showing all available posts.
8. Update edit/delete of post and comment to require confirmation.
9. Remove moment and react-moment from dependencies and display date using Date().toDateString().

## Known Issues

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

### v0.1.4

1. Update the version of dependencies.
2. Update frontend folder structure to make it more intuitive.
3. Use Cookie for authentication instead of using local storage.
4. Minor update of layout to remove glitches.
5. Remove code that is no longer used.
