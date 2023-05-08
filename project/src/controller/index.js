const usersController = require('./users-controller') ; 
const emailController = require('./folder.controller') ; 
const googleAuth = require('./auth/index') ; 
module.exports = {...emailController,...usersController , ...googleAuth} ; 