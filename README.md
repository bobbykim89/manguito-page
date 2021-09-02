# Manguito Page v0.1.1

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

## Dependencies

### `Backend Dependencies`

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
nodemon\

### `Frontend Dependencies`

fontawesome\
tailwindcss/aspect-ratio\
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
uuid\

## Changes

1. Redesigned the landing page, navbar, and about page with more modern looking layout.
2. minor changes on design of most of other pages
3. Fixed the issue of express validator normalizing dots in email address

## Known Issues

1. npm run dev on frontend side does not work properly somehow. watch keep turns off as soon as it started.
2. Need to run npm run dev to run backend and frontend, and npm run watch from client directory to run properly on on dev environment.
3. Images from cloudinary is too big and they are causing large delay on page loading. need to figure out how to reduce file size.
4. Implementing a button to navigate to previous/next post would bring some convenience.
5. Load more button or lazy loading to increase page loading speed.
