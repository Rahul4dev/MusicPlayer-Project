const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Routes
const authRoutes = require('./routes/auth');
const songRoutes = require('./routes/song');
const playlistRoutes = require('./routes/playlist');

// Models
const User = require('./models/User');

// Passport requires
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;

const app = express();
const port = 8000;

// convert data to json format
app.use(express.json());

// connect to MongoDB server
// takes two arguments: which db to connect to, connection options
mongoose
  .connect(
    'mongodb+srv://rahul4devMongo:' +
      process.env.MONGO_PASSWORD +
      '@cluster0.wy0hy3p.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((x) => {
    console.log('Connected to MongoDB server');
  })
  .catch((err) => {
    alert("Couldn't connect to MongoDB server" + err.message);
  });

// Passport Config to encrypt tokens

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'verySecretCodeWhichNeedsToBeStoredSecretly';

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.find({ id: jwt_payload.sub })
      .then(function (user) {
        return done(user);
      })
      .catch(function (err) {
        return console.log(err), done(false);
      });
  })
);

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.use('/auth', authRoutes);
app.use('/song', songRoutes);
app.use('/playlist', playlistRoutes);

app.listen(port, () => {
  console.log('app listening on port ' + port);
});
