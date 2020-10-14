import {
  MDCTopAppBar
} from '@material/top-app-bar';
import {
  MDCDrawer
} from "@material/drawer";

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);



const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

const listEl = document.querySelector('.mdc-drawer .mdc-list');
const mainContentEl = document.querySelector('.main-content');

listEl.addEventListener('click', (event) => {
  var location = event.path[0].children[2].innerHTML
  goto(location.toLowerCase())
  drawer.open = !drawer.open;
});

document.body.addEventListener('MDCDrawer:closed', () => {
  
});


topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

console.log("Loaded drawer")

var io = require('socket.io-client')('https://material-chat.glitch.me');
io.on('connection', function (socket) {
  console.log("working")
  socket.on('chat_message', function (message, avatar, username, userID) {
  io.emit('chat_message', message, avatar, username, userID);
  io.emit('online', io.engine.clientsCount)
  });

  socket.on('disconnect', function() {
    io.emit('online', io.engine.clientsCount)
  });
  
  io.emit('online', io.engine.clientsCount)
}); 
