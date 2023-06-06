const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
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
app.use(cors());
const port = 8000;

// convert data to json format
app.use(express.json());

// connect to MongoDB server
// takes two arguments: which db to connect to, connection options
mongoose.set('strictQuery', true);
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
  .then(() => {
    console.log('Connected to MongoDB server');
  })
  .catch((err) => {
    console.log("Couldn't connect to MongoDB server" + err.message);
  });

// Passport Config to encrypt tokens

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'verySecretCodeWhichNeedsToBeStoredSecretly';

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ _id: jwt_payload.identifier }, function (err, user) {
      // done(error, doesTheUserExist)
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
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
