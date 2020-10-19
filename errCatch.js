function testerror () {
    try {
        welcome()
      }
      catch(err) {
        document.getElementById("welcometext").innerHTML = "You are not authorized to access this website."
        document.getElementById("welcometext").style.zIndex = "1000"
        document.getElementById("welcometext").style.display = "block"
        document.getElementById("welcometext").classList.remove("hideWelcomeText")
        document.getElementById("welcometext").classList.add("showWelcomeText")
      }
}
function alertbuddy() {
    alert("ok buddy")
}