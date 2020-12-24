var input = document.getElementById("message-content")
input.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        sendMessage()
    }
});

function sendMessage() {
    var profile = JSON.parse(localStorage.getItem("profile"));
    var username = profile[0].username
    var localUser = profile[0].id;
    var avatar = profile[0].avatar
    var message = input.value
    if(avatar == null) avatar = "https://api-private.atlassian.com/users/4c8d4470f1032ac752ee2ad1c41ce01d/avatar"
    if(username == null) username = "Guest"
    if(message == "") return;
    socket.emit('chat_message', message, avatar, username, localUser)
    input.value = ""
}