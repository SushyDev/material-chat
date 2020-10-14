socket.on('chat_message', function(message, avatar, username, userID){

    var profile = JSON.parse(localStorage.getItem("profile"));

    var localUser = profile[0].id;

    console.log(profile)

    var Chat = document.getElementById("chat")

    if (userID === localUser) {

        var messageContainer = document.createElement("div")
        messageContainer.className = "message-container"

        var nameDiv = document.createElement("div")
        nameDiv.className = "name"
        nameDiv.innerHTML = username
        messageContainer.appendChild(nameDiv)

        var contentDiv = document.createElement("div")
        contentDiv.className = "content"
        contentDiv.innerHTML = message
        messageContainer.appendChild(contentDiv)
        
        var messageIcon = document.createElement("img")
        messageIcon.src = avatar
        
        var iconDiv = document.createElement("div")
        iconDiv.className = "icon"
        iconDiv.appendChild(messageIcon)
        
        var messageDiv = document.createElement("div")
        messageDiv.className = "sent message"
        
        messageDiv.appendChild(messageContainer)
        messageDiv.appendChild(iconDiv)

        Chat.appendChild(messageDiv)

    } else {

        var messageContainer = document.createElement("div")
        messageContainer.className = "message-container"

        var nameDiv = document.createElement("div")
        nameDiv.className = "name"
        nameDiv.innerHTML = username
        messageContainer.appendChild(nameDiv)

        var contentDiv = document.createElement("div")
        contentDiv.className = "content"
        contentDiv.innerHTML = message
        messageContainer.appendChild(contentDiv)

        var messageIcon = document.createElement("img")
        messageIcon.src = avatar

        var iconDiv = document.createElement("div")
        iconDiv.className = "icon"
        iconDiv.appendChild(messageIcon)

        var messageDiv = document.createElement("div")
        messageDiv.className = "message"

        messageDiv.appendChild(iconDiv)
        messageDiv.appendChild(messageContainer)

        Chat.appendChild(messageDiv)

    }

    Chat.scrollTo(0,Chat.scrollHeight);
});

socket.on('online', function(online){
document.getElementById("user-counter").innerHTML = online + " Users online"
});