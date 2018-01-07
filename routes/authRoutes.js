const passport = require('passport');

module.exports = app => {
  // we want to ask google for user profile and email
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  // sec arg is a function that we want to execute every time user
  // goes to this route
  app.get('/api/logout', (req, res) => {
    // logout is a function that is attached automaticaly to
    // req object by passport (the same for user)
    // it kills the cookies
    req.logout();
    res.redirect('/');
  });

  // req - incoming request
  // res - outcoming response
  app.get('/api/current_user', (req, res) => {
    res.send((req.user));
  });
};

