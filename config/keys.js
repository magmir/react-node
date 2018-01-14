// file to figure out what set of credentials to return
// this will be used only on backend!


// env.node_env === production -> this happens automatically on heroku
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  // return dev keys
  module.exports = require('./dev');
}



// FOR CLIENT:
// we need to add .env files, because when we will use the config
// file in client by using import, the whole file
// would be visible