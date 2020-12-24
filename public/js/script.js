window.addEventListener('resize', function(event){
    setPageHeight()
});

function setPageHeight() {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.body.style.setProperty('--vh', `${vh}px`);
}
setPageHeight()

function toggleDrawer() {
    var sidebar = document.getElementById("nav")
    if(sidebar.style.width == "72vw") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "72vw";
    }
}

function goto(page) {
    
    toggleDrawer()
    
    if(page == "chat") {
        document.getElementById("main").style.display = "none"
        document.getElementById("main").innerHTML = ""
    } else {
        document.getElementById("main").style.display = "flex"
        $(function(){
            $("#main").load('./html/'+page+".html");
          });
    }
}

function checkTheme() {
    if (localStorage.getItem("darkmode") == "true") {
        document.documentElement.setAttribute('data-theme', 'dark');
        try {
            document.getElementById("theme").innerHTML = `<span class="material-icons">brightness_high</span> Enable Light mode`
        } catch (error) {}
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem("darkmode", false)
        try {
            document.getElementById("theme").innerHTML = `<span class="material-icons">nights_stay</span> Enable Dark mode`
        } catch (error) {}
    }
}
checkTheme()