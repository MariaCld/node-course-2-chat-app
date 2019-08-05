const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
//communication beetween web server & client
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app'
    });
    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined',
        createdAt: new Date().getTime()
    })
    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        // io.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()

        // })
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()

        // });
    });

    socket.on('disconnect', () => {
        console.log('client disconnected');
    })
})

server.listen(port, host, () => {
    console.log(`Server started on port ${port}`);
});
