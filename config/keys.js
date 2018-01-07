// file to figure out what set of credentials to return
// this will be used only in backend!


// env.node_env === production -> this happens automaticaly on heroku
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  // return dev keys
  module.exports = require('./dev');
}



// FOR CLIENT:
// we need to add .env files, because when we will use the config
// file in clien by using impoer, the whole file
// would be visible