const getStart = () => {
    document.getElementsByClassName("octapad-home-body")[0].style.display = "none"
    document.getElementsByClassName("octapad-home-body")[1].style.display = "flex"
    document.getElementById("loading-video").play()
    setTimeout(openApp, 5300)
}
const openApp = () => {
    window.open("https://htmlpreview.github.io/?https://github.com/prabhasha2006/Octapad-studio-test1/blob/main/octapad.html", "_self")
}
