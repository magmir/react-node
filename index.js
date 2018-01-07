const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');

require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

// app will set up configuration for listening to right port
// running express server
const app = express();

// app.use are wiring up middlewares inside app
// middlewares are small func that modify incoming request to our app
// before they're sent off to routes handlers

app.use(bodyParser.json());

// tell express we will use cookies in our app
// max age - how log cookie should be in browser before expiring (30 days)
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// require reout function and immediately call it with app obj
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

// config to make sure that express behaves correctly in prod mode
if (process.env.NODE_ENV === 'production') {
  // express will serve up prod assets (.js, .css)
  app.use(express.static('client/build'));

  // express will serve up the index.html file if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// heroku can inject environment variables
const PORT = process.env.PORT || 5000;

// node (not express) listening to port provided by heroku or localhost:5000
app.listen(PORT);
