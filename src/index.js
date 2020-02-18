var express = require('express')
var app = express()

app.get('/', function(req, res) {
	res.send("Hello World!")
})

const users = {}

app.get('/users', function(req, res) {
	res.send(users)
})

var server = app.listen(3000)