// *********************************************************************************
// Packages required to make project run
// *********************************************************************************

// Dependencies
var path = require('path')
var express = require('express')

var app = express()
var PORT = process.env.PORT || 3000 //
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// require routing
require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)

// still require listener on port funciton and console log to make sure its working
app.listen(PORT, function () {
  console.log(`app listening on port: {PORT}`)
})
