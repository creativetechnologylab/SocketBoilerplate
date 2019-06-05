const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use('/static', express.static(`${__dirname}/static`));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/static/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('test message', function(msg) {
        io.emit('test message', msg);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

http.listen(3000, function(){
  console.log('Started web server at http://localhost:3000');
});