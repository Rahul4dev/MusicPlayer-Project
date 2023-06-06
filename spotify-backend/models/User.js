// How to create a Model instance ?
// step 1: require a package which connect node to db instance: we use mongoose
const mongoose = require('mongoose');

// Step 2: create a schema object from mongoose instance{ structure of user objects}

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  likedSongs: {
    // todo: type change
    type: String,
    default: '',
  },
  likedPlaylist: {
    // todo: type change
    type: String,
    default: '',
  },
  subscribedArtists: {
    // todo: type change
    type: String,
    default: '',
  },
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
