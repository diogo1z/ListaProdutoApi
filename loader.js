const server = require('./config/server')
require('./config/database').default
require('./config/routes')(server)