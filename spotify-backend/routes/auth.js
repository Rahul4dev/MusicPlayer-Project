const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { getToken } = require('../utils/helpers');

// POST route to register a user
router.post('/register', async (req, res) => {
  // code run when the user is registered using POST request.
  // req.body will contain the {email, password, firstName, lastName and userName} will bring these data from req.body

  const { email, password, firstName, lastName, userName } = req.body;

  // if the user is already registered then throw an error.
  const user = await User.findOne({ email: email });
  if (user) {
    return res.status(403).json({ message: 'Already registered' });
  }

  // code run this line means we got new User.
  // Step 3: Create a new User in the database.
  // we do not store password in the plain text in the database. we encrypt them first.
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUserData = {
    email,
    password: hashedPassword,
    firstName,
    lastName,
    userName,
  };
  const newUser = await User.create(newUserData);
  console.log(newUserData);
  // step 4: create a authentication object for the new user: create auth token.

  const token = await getToken(email, newUser);

  // step 5: return the result to the user
  const userToReturn = { ...newUser.toJSON(), token };
  console.log(userToReturn);
  delete userToReturn.password;
  return res.status(200).json(userToReturn);
});

router.post('/login', async (req, res) => {
  // step 1: get email and password sent by the user from req.body

  const { email, password } = req.body;
  // step 2: check if the user's email is already, if not please signup first

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(403).json({ error: 'invalid credentials' });
  }
  // step 3: if the user is email exist, check if the password is correct, id not credentials are invalid.
  // since the password is stored in hashed format, we have to compare the password against the hashed password on the same parameters on which the hashed password was created. This comparison is done using the bcrypt algorithm.
  console.log(user);

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(403).json({ error: 'invalid credentials' });
  }
  // step 4: if both email and password are valid,return a token to user,
  const token = await getToken(user.email, user);

  const userToReturn = { ...user.toJSON(), token };
  delete userToReturn.password;
  return res.status(200).json(userToReturn);
  // todo: redirect to login page.
});

module.exports = router;
