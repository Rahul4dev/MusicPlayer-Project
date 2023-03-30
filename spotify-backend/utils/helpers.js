const jwt = require('jsonwebtoken');
exports = {};

exports.getToken = async (email, user) => {
  //todo: create token from email and newUser data
  const token = jwt.sign(
    { identifier: user._id },
    'verysecretcodeWhichneedstobeStoredSecretly'
  );
  return token;
};

module.exports = exports;
