const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET_KEY');
    const userId = decodedToken.UserId;
    if (req.body.userId && parseInt(req.body.userId) !== userId) {
      res.status(401).json({
        error: new Error('Invalid user ID')
      });
    }
    else {
      next();
    }
  } catch(error) {
      res.status(401).json({
        error: new Error(error)
      });
  }
};