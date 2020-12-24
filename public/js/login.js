//When google sign in is complete
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    var profileData = [
        {
            "id": profile.getId(),
            "username": profile.getName(),
            "avatar": profile.getImageUrl(),
        }
    ]

    localStorage.setItem('profile', JSON.stringify(profileData))

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;

    //Hide overlay
    document.getElementById("main").style.display = "none"
    document.getElementById("main").innerHTML = ""
  }

  var profile = JSON.parse(localStorage.getItem("profile"));
  //If no profile is found
  if(profile == null) {
      //Display overlay and show login page on it
      document.getElementById("main").style.display = "flex"
      $(function(){
        $("#main").load('./html/'+'login'+".html");
      });
  }

