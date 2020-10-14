function setPageHeight() {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.body.style.setProperty('--vh', `${vh}px`);

    var topAppBarHeight = document.getElementById("app-bar").offsetHeight
    var mainContent = document.getElementById("main-content")
    mainContent.style.height = "calc(" + document.body.offsetHeight + "px - " + topAppBarHeight + "px)"
}
setPageHeight()

window.addEventListener('resize', function (event) {
    setPageHeight()
});


function goto(page) {

    $(function () {
        $("#main-content").load('./html/' + page + ".html");
    });
}
goto('chat')

function checkTheme() {
    if (localStorage.getItem("darkmode") == "true") {
        document.documentElement.setAttribute('data-theme', 'dark');
        try {
            console.log(document.getElementById("theme").childNodes)
            document.getElementById("theme").childNodes[3].innerHTML = `brightness_high`
            document.getElementById("theme").childNodes[5].innerHTML = `Light mode`
        } catch (error) {}
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem("darkmode", false)
        try {
            document.getElementById("theme").childNodes[3].innerHTML = `nights_stay`
            document.getElementById("theme").childNodes[5].innerHTML = `Dark mode`
        } catch (error) {}
    }
}
checkTheme()