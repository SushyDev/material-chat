var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path')
var server = app.listen(process.env.PORT);
var io = require('socket.io').listen(server);

// Set up 'public' folder 
app.use(express.static(path.join(__dirname, 'public')))

// Point / to index.html (could just put index.html in public but leaving for reference)
app.use('/', function(req, res, next){
  res.sendFile('public/index.html', { root : __dirname })
})

var users = 0;

console.log(users)

io.on('connection', function (socket) {
    socket.on('chat_message', function (message, avatar, username, userID) {
    io.emit('chat_message', message, avatar, username, userID);
    io.emit('online', io.engine.clientsCount)
    });

    socket.on('disconnect', function() {
      io.emit('online', io.engine.clientsCount)
    });
    
    io.emit('online', io.engine.clientsCount)
}); 

const DiscordOauth2 = require("discord-oauth2");
const oauth = new DiscordOauth2();
 
const access_token = "CETzFduQMzBoIzNzz-IIp81RkG4DsL0T";
 
oauth.getUser(access_token).then(console.log);