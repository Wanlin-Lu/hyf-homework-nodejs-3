var express = require('express')
var app = express()

app.get('/', function(req, res) {
	res.send("Hello World!")
})

app.get('/users', function(req, res) {
	res.send([])
})

app.post('/users', function(req, res) {
	res.send({id:0})
})

app.get('/users/:id', function(req, res) {
	res.send({id:0})
})
var server = app.listen(3000)