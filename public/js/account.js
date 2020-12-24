var profile = JSON.parse(localStorage.getItem("profile"));

document.getElementById("name").innerHTML = "Username:<br>" + profile[0].username
document.getElementById("pfp").src = profile[0].avatar

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        localStorage.removeItem("profile")
        location.reload();
    });
  }

  function onLoad() {
    gapi.load('auth2', function() {
      gapi.auth2.init();
    });
  }