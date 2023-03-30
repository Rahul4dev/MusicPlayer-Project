const express = require('express');
const passport = require('passport');
const router = express.Router();

const Song = require('../models/Song');
const User = require('../models/User');

router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    // req.user gets the user by passport.authentication
    // step 1: create song json object {name, thumbnail, track} from body, artist from user
    const { name, thumbnail, track } = req.body;

    if (!name || !thumbnail || !track) {
      return res
        .status(301)
        .json({ error: 'Insufficient details to create song.' });
    }
    const artist = req.user._id;
    const songDetails = { name, thumbnail, track, artist };
    try {
      const createdSong = await Song.create(songDetails);
      return res.status(200).json(createdSong);
    } catch {
      console.log(error);
    }
  }
);

// Get Routes for all available songs published on this server
// first: get request for mysongs which user have stored/ created

router.get(
  '/get/mysongs',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    // we have the user already
    const currentUser = req.user;
    // we need to check those songs which have song.artist === currentUser._id
    try {
      const songs = await Song.find({ artist: currentUser._id });
      return res.status(200).json({ data: songs });
    } catch (err) {
      console.log(err);
    }
  }
);

// Second: get route for artist songs

router.get(
  '/get/artist',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { artistId } = req.body;

    try {
      const artist = await User.find({ _id: artistId });
      if (!artist) {
        return res.status(301).json({ error: 'artist not found' });
      }
      const songs = await Song.find({ artist: artistId });
      return res.status(200).json({ data: songs });
    } catch (err) {
      console.log(err.message);
    }
  }
);

// third: get route for song name

router.get(
  '/get/songname',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { songName } = req.body;
    try {
      const songs = await Song.find({ name: songName });
      return res.status(200).json({ data: songs });
    } catch (err) {
      console.log(err.message);
    }
  }
);

module.exports = router;
