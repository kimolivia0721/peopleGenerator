/* server.js - Express server*/
'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();

const path = require('path');
app.use(express.static(__dirname + "/../pub"));


app.get('/', (req, res) => {

	res.sendFile('pub/examples.html');
});

app.get('/problem', (req, res) => {
	// You can indicate a status code to send back
	// by default it is 200, but it's up to you
	// if you want to send something
	res.status(500).send('There was a problem on the server')
});


const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
})