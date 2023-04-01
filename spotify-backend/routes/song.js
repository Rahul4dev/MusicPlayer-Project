const express = require('express');
const passport = require('passport');

const Song = require('../models/Song');
const User = require('../models/User');

const router = express.Router();

// req.user gets the user by passport.authentication
// step 1: create song json object {name, thumbnail, track} from body, artist from user
router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { name, thumbnail, track } = req.body;
    if (!name || !thumbnail || !track) {
      return res
        .status(301)
        .json({ err: 'Insufficient details to create song.' });
    }
    const artist = req.user._id;
    const songDetails = { name, thumbnail, track, artist };
    const createdSong = await Song.create(songDetails);
    return res.status(200).json(createdSong);
  }
);

// Get Routes for all available songs published on this server
// first: get request for mysongs which user have stored/ created

router.get(
  '/get/mysongs',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    // We need to get all songs where artist id == currentUser._id
    const songs = await Song.find({ artist: req.user._id });
    return res.status(200).json({ data: songs });
  }
);

// Second: get route for artist songs
// I will send the artist id and I want to see all songs that artist has published.
router.get(
  '/get/artist/:artistId',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { artistId } = req.params;
    // We can check if the artist does not exist
    const artist = await User.findOne({ _id: artistId });
    // ![] = false
    // !null = true
    // !undefined = true
    if (!artist || artist) {
      return res.status(301).json({ err: 'Artist does not exist' });
    }

    const songs = await Song.find({ artist: artistId });
    return res.status(200).json({ data: songs });
  }
);

// third: get route for song name

router.get(
  '/get/songname/:songName',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { songName } = req.params;

    // name:songName --> exact name matching. Vanilla, Vanila
    // Pattern matching instead of direct name matching.
    const songs = await Song.find({ name: songName });
    return res.status(200).json({ data: songs });
  }
);

module.exports = router;
