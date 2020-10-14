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
    console.log(profileData)

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;

    //Goto chat page
    goto('chat')
  }

  var profile = JSON.parse(localStorage.getItem("profile"));
  //If no profile is found
  if(profile == null) {
      goto('login')
  }