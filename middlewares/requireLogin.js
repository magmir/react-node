// make sure that the user is log in before any route handler will be executed

// next - function we run when out middleware finish running
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({error: 'You must be logged in'});
  }
  next();
};