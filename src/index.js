var express = require('express')
var app = express()

app.get('/', function(req, res) {
	res.send("Hello World!")
})

app.get('/users', function(req, res) {
	res.send([])
})

var server = app.listen(3000)