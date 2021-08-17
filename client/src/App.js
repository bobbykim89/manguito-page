import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Posts from './components/Post/Posts';
import Alerts from './components/layout/Alerts';

import PostState from './context/post/PostContext';
import CommentState from './context/comment/CommentContext';
import AuthState from './context/auth/AuthContext';
import AlertState from './context/alert/AlertContext';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <PostState>
        <CommentState>
          <AlertState>
            <Router>
              <Fragment>
                <Navbar />
                <Alerts />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/gallery' component={Posts} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/signup' component={Signup} />
                </Switch>
                <Footer />
              </Fragment>
            </Router>
          </AlertState>
        </CommentState>
      </PostState>
    </AuthState>
  );
}

export default App;
