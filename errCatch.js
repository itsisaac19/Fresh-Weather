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


fetch('https://api.climacell.co/v3/weather/forecast/daily?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&unit_system=us&start_time=now&end_time='+localStorage.getItem("next10days")+'T14%3A00%3A00Z&fields=temp%2Cweather_code&apikey=gjkSy3KHmWy7xWUrToVJA24shlhC5w5z')
  .then(handleErrors)
  .then(function(response) {
      console.log("ok");
  }).catch(function(error) {
      console.log(error);
      localstorage.setItem("apiKey") = "gjkSy3KHmWy7xWUrToVJA24shlhC5w5z"
  });

function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}