const express = require('express');
const passport = require('passport');

const Playlist = require('../models/Playlist');
const User = require('../models/User');
const Song = require('../models/Song');

const router = express.Router();
// Route 1: create a playlist
router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    const { name, thumbnail, songs } = req.body;
    if (!name || !thumbnail || !songs) {
      return res.status(301).json({ err: 'Insufficient data' });
    }
    const playlistData = {
      name,
      thumbnail,
      songs,
      owner: currentUser._id,
      collaborators: [],
    };
    const playlist = await Playlist.create(playlistData);
    return res.status(200).json(playlist);
  }
);

// Route 2: get a playlist by id
// we'll get the playlistId as a route parameter and we'll return the playlist having the name of the playlistId.

router.get(
  '/get/playlist/:playlistId',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    // dynamic route for the playlistId
    const playlistId = req.params.playlistId;
    // need to find the id
    const playlist = await Playlist.findOne({ _id: playlistId });
    if (!playlist) {
      return res.status(301).json({ message: 'playlist not found' });
    }

    return res.status(200).json(playlist);
  }
);

// get all playlist made by an artist

router.get(
  '/get/artist/:artistId',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const artistId = req.params.artistId;
    // we can check if artistId exist?
    const artist = await User.findOne({ _id: artistId });
    if (!artist) {
      return res.status(304).json({ error: 'artist not found' });
    }

    const playlists = await Playlist.find({ owner: artistId });
    return res.status(200).json({ data: playlists });
  }
);

// add a song to a playlist

router.post(
  '/add/song',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    const { playlistId, songId } = req.body;
    // step 1: check if such playlist is exist?
    const playlist = await Playlist.findOne({ _id: playlistId });
    if (!playlist) {
      return res.status(304).json({ err: 'Playlist does not exist' });
    }

    // step 2: check if user is owner or collaborator of the playlist
    if (
      // playlist.owner !== currentUser._id : we can't equate object to a string, we can use .equals() method
      !playlist.owner.equals(currentUser._id) &&
      !playlist.collaborators.includes(currentUser._id)
    ) {
      return res
        .status(400)
        .json({ err: 'Not allowed to access this playlist' });
    }

    // step 3: check if the songId exist?
    const song = await Song.findOne({ _id: songId });
    if (!song) {
      return res.status(304).json({ err: 'Song does not exist' });
    }

    // everything is fine, now add the song to the playlist
    playlist.songs.push(songId);
    await playlist.save();

    return res.status(200).json(playlist);
  }
);

module.exports = router;
