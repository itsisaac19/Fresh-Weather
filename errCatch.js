function testerror () {
  welcome()
  setTimeout(function() {
    try {
      testForErr()
    }
    catch(err) {
      document.getElementById("welcometext").innerHTML = "You are not authorized to access this website."
      document.getElementById("welcometext").style.zIndex = "1000"
      document.getElementById("welcometext").style.display = "block"
      document.getElementById("welcometext").classList.remove("hideWelcomeText")
      document.getElementById("welcometext").classList.add("showWelcomeText")
    }
  }, 3000)

}
function alertbuddy() {
    alert("ok buddy")
}

function weatherTestError () {
  fetch('https://api.climacell.co/v3/weather/forecast/daily?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&unit_system=us&start_time=now&end_time='+localStorage.getItem("next10days")+'T14%3A00%3A00Z&fields=temp%2Cweather_code&apikey=gjkSy3KHmWy7xWUrToVJA24shlhC5w5z').then((response) => {
    if (response.ok) {
      //alert("setting api key to oA")
      localStorage.setItem("apiKey", "oATA14jpsO1MdhKOjKCscL6Aym7N6QAn")
      return response.json();
  
    } else {
      //alert("setting api key to gj")
      localStorage.setItem("apiKey", "gjkSy3KHmWy7xWUrToVJA24shlhC5w5z")
      throw new Error('Something went wrong');
    }
  })
  .then((responseJson) => {
    // Do something with the response
  })
  .catch((error) => {
    console.log(error)
  });
}
weatherTestError();


