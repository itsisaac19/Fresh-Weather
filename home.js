// GLOBAL VARIABLES:

var currtime = document.getElementById("clock");


//Welcome:

function welcome() {

    document.getElementById("name").classList.add("hidename")

    if (localStorage.getItem("name") === null) {
        newVisitor();
        return;
    }
    showHome();
    document.getElementById("notibubble").innerHTML = "Welcome, " + localStorage.getItem("name") 

    document.getElementById("notibubble").classList.add("notidown")
    document.getElementById("notibubble").classList.remove("notiup")

    setTimeout(function(){
        document.getElementById("notibubble").classList.remove("notidown")
        document.getElementById("notibubble").classList.add("notiup")
    },3000);
}

function newVisitor () {

    document.getElementById("notibubble").innerHTML = "Welcome" 

    var backwhite = document.getElementById("backwhite")
    backwhite.classList.add("backwhiteshow")

    document.getElementById("uhoh").style.zIndex = "0"
    document.getElementById("welcometext").style.zIndex = "1000"
    document.getElementById("welcometext").style.display = "block"

    document.getElementById("welcometext").innerHTML = "Welcome to Fresh."

    //Welcome text in view
    setTimeout(function() {
        document.getElementById("welcometext").classList.remove("hideWelcomeText")
        document.getElementById("welcometext").classList.add("showWelcomeText")
    },200);

    //Welcome text fades away, logo fades in
    setTimeout(function() {
        document.getElementById("freshWelcomeLogo").classList.add("logodown")
        document.getElementById("freshWelcomeLogo").classList.remove("logoup")

        document.getElementById("welcometext").classList.add("hideWelcomeText")
        document.getElementById("welcometext").classList.remove("showWelcomeText")
    },3300);

    //Logo fades away, name query is presented
    setTimeout(function() {
        document.getElementById("name").classList.remove("hidename")
        document.getElementById("name").classList.add("showname")

        document.getElementById("welcometext").innerHTML = "First off, what would you like to be called?"
        document.getElementById("name").focus();
        
        document.getElementById("freshWelcomeLogo").classList.remove("logodown")
        document.getElementById("freshWelcomeLogo").classList.add("logoup")
        
        //Welcome text shown as query
      setTimeout(function() {
        document.getElementById("welcometext").classList.remove("hideWelcomeText")
        document.getElementById("welcometext").classList.add("showWelcomeText")
        },200);

    },7300);

    //listening for when user enters name in
    var input = document.getElementById("name");
    input.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Cancel the default action, if needed
          event.preventDefault();
          //Get Data Quick
          enteredname = input.value
          localStorage.setItem("name", enteredname)
          console.log(localStorage.getItem("name"))
          // Trigger the showHome
          setTimeout(function() {
            showHome()
          },100);
        }
      });

}

function showHome () {

    document.getElementById("welcometext").classList.add("hideWelcomeText")
    document.getElementById("welcometext").classList.remove("showWelcomeText")

    document.getElementById("name").classList.add("hidename")
    document.getElementById("name").classList.remove("showname")

    var backwhite = document.getElementById("backwhite")
    backwhite.classList.remove("backwhiteshow")
    backwhite.classList.add("backwhitehide")

    if (localStorage.getItem("name") === null) {
        document.getElementById("notibubble").innerHTML = "Welcome"
    } else {
        document.getElementById("notibubble").innerHTML = "Welcome, " + localStorage.getItem("name") 
    }
    
    setTimeout(function(){
        document.getElementById("backwhite").classList.add("backwhitehidedisplay")
        document.getElementById("name").classList.add("hidenamedisplay")
    },1600);

    setTimeout(function(){
        document.getElementById("notibubble").classList.add("notidown")
        document.getElementById("notibubble").classList.remove("notiup")
    },1000);



    setTimeout(function(){
        document.getElementById("notibubble").classList.remove("notidown")
        document.getElementById("notibubble").classList.add("notiup")
    },5000);
}


function responsivewarning(x) {
    if (width.matches) { // If media query matches
      document.getElementById("backwhite").classList.remove("backwhitehide")
      document.getElementById("backwhite").classList.add("backwhiteshowdisplay")
      document.getElementById("backwhite").classList.remove("backwhitehidedisplay")
    } else {
      document.getElementById("backwhite").classList.add("backwhitehidedisplay")
      document.getElementById("backwhite").classList.remove("backwhiteshowdisplay")
    }
  }
  
  var width = window.matchMedia("(max-width: 700px)")
  responsivewarning(width) // Call listener function at run time
  width.addListener(responsivewarning) // Attach listener function on state changes


  function responsivewarning(height) {
    if (height.matches) { // If media query matches
      document.getElementById("backwhite").classList.remove("backwhitehide")
      document.getElementById("backwhite").classList.add("backwhiteshowdisplay")
      document.getElementById("backwhite").classList.remove("backwhitehidedisplay")
    } else {
      document.getElementById("backwhite").classList.add("backwhitehidedisplay")
      document.getElementById("backwhite").classList.remove("backwhiteshowdisplay")
    }
  }
  
  var height = window.matchMedia("(max-height: 640px)")
  responsivewarning(height) // Call listener function at run time
  height.addListener(responsivewarning) // Attach listener function on state changes







//Animations:

//customize page

function customize() {
   var bodygrid = document.getElementById("bodygrid")
   var customize = document.getElementById("customizesquare")
   
   bodygrid.classList.remove("goback");
   bodygrid.classList.add("goleft");

   customize.classList.remove("swingout")
   customize.classList.add("swingin")
}
//dashboard

function freshdashboard () {
    var bodygrid = document.getElementById("bodygrid")
    var customize = document.getElementById("customizesquare")
    
    bodygrid.classList.add("goback");
    bodygrid.classList.remove("goleft");
 
    customize.classList.add("swingout")
    customize.classList.remove("swingin")
}

//dots
function expandthedots() {
    var element1 = document.getElementById("expandthedots");
    element1.classList.add("expandhoriztranslate");
    element1.classList.remove("closedhoriztranslate");

    document.getElementById("customize").style.display = "block"

    var element2 = document.getElementById("customize");
    element2.classList.add("customizefadein");
    element2.classList.remove("customizefadeout");
} 
function closethedots() {
    var element = document.getElementById("expandthedots");
    element.classList.add("closedhoriztranslate");
    element.classList.remove("expandhoriztranslate");

    var element2 = document.getElementById("customize");
    element2.classList.add("customizefadeout");
    element2.classList.remove("customizefadein");

    setTimeout(function(){

        document.getElementById("customize").style.display = "none"

    },699);
}
//logo
function expandthelogo() {
    var element1 = document.getElementById("expandthelogo");
    element1.classList.add("expandhoriztranslatelogo");
    element1.classList.remove("closedhoriztranslatelogo");

    document.getElementById("settings").style.display = "block"

    var element2 = document.getElementById("settings");
    element2.classList.add("customizefadein");
    element2.classList.remove("customizefadeout");

    pushdots();
} 
function closethelogo() {
    var element = document.getElementById("expandthelogo");
    element.classList.add("closedhoriztranslatelogo");
    element.classList.remove("expandhoriztranslatelogo");

    var element2 = document.getElementById("settings");
    element2.classList.add("customizefadeout");
    element2.classList.remove("customizefadein");

    pulldots();

    setTimeout(function(){
        document.getElementById("settings").style.display = "none"
    },699);
}
//push amimation *still needs work*
function pushdots() {
    setTimeout(function(){
        var element = document.getElementById("dotsquare").style.left = "360px"
    },100);
}
function pulldots() {
    setTimeout(function(){
        var element = document.getElementById("dotsquare").style.left = "163px"
    },500);
}
//Layout Function 

function changeLayout () {
    freshdashboard();

    document.getElementById('leftopbodygrid').setAttribute('draggable', true);
    document.getElementById('leftbottombodygrid').setAttribute('draggable', true);
    document.getElementById('rightbodygrid').setAttribute('draggable', true);

    document.getElementById('dottedboxleft').style.display = "block"
    document.getElementById('dottedboxright').style.display = "block"

    document.getElementById("temp").innerHTML = ""
    document.getElementById("wicon").style.display = "none"
    document.getElementById("desc").innerHTML = ""
    document.getElementById("date").innerHTML = ""
    document.getElementById("clock").style.display = "none"
    document.getElementById("logo").style.display = "none"
    document.getElementById("dots").style.display = "none"
    document.getElementById("notibubble").innerHTML = "Layout Mode"
    
    document.getElementById("notibubble").classList.add("notidown")
    document.getElementById("notibubble").classList.remove("notiup")

    document.getElementById("flowers").classList.add("flowershidden")
    document.getElementById("flowers").classList.remove("flowersshown")

    document.getElementById("greensplit").classList.remove("greensplitshow")
    document.getElementById("greensplit").classList.add("greenspilthide")

    setTimeout(function(){
        document.getElementById("notibubble").classList.remove("notidown")
        document.getElementById("notibubble").classList.add("notiup")
    },2000);

    setTimeout(function(){
        document.getElementById("exit").classList.add("exitshow")
        document.getElementById("exit").classList.remove("exithide")
    },2200);
}

function exitChangeLayout() {

    document.getElementById('dottedboxleft').style.display = "none"
    document.getElementById('dottedboxright').style.display = "none"

    document.getElementById("exit").classList.remove("exitshow")
    document.getElementById("exit").classList.add("exithide")

    setTimeout(function(){
        location.reload();
    },300);

}


//Clock

function zeropadder(n){
  return (parseInt(n,10) < 10 ? '0' : '') +n;
}

function updateTime() {
  var timeNow = new Date(),
      hh = timeNow.getHours(),
      mm = timeNow.getMinutes(),
      ss = timeNow.getSeconds(),
      formatAMPM = (hh >=12? 'PM':'AM');
  hh = hh % 12 || 12;
  
  currtime.innerHTML = hh + "<span>:</span>" + zeropadder(mm) + " " + formatAMPM;
setTimeout(updateTime, 1000);
}

updateTime();

//WEATHER API AND DATA ------------------------------------------------------
//---------------------------------------------------------------------------


function getCurrentWeather () {



//----------------------------------------------------------------------

    //ALWAYS 4 DAYS IN THE FUTURE TIME:

    var f = new Date();
	var u = f.getMonth()+1;
	var c = f.getDate()+4;

	if (c > 31) {
		if (u=="01") {
			console.log("ALERT OVERFLOWING FROM JANUARY TO FEBRUARY");
			c = (c - 31);
		}
	}

	// LEAP YEAR WUT BELOW
	if (u > 28) {
		if (u=="02") {
			console.log("ALERT OVERFLOWING FROM FEBRUARY TO MARCH");
			c = (c - 28);
			u = (u+1);
		}
	} 
	if (c > 31) {
		if (u=="03") {
			console.log("ALERT OVERFLOWING FROM MARCH TO APRIL");
			c = (c - 31);
			u = (u+1);
		}
	} 
	if (c > 30) {
		if (u=="04") {
			console.log("ALERT OVERFLOWING FROM APRIL TO MAY");
			c = (c - 30);
			u = (u+1);
		}
	} 
	if (c > 31) {
		if (u=="05") {
			console.log("ALERT OVERFLOWING FROM MAY TO JUNE");
			c = (c - 31);
			u = (u+1);
		}
	} 
	if (c > 30) {
		if (u=="06") {
			console.log("ALERT OVERFLOWING FROM JUNE TO JULY");
			c = (c - 30);
			u = (u+1);
		}
	} 
	if (c > 31) {
		if (u=="07") {
			console.log("ALERT OVERFLOWING FROM JULY TO AUGUST");
			c = (c - 31);
			u = (u+1);
		}
	} 
	if (c > 31) {
		if (u=="08") {
			console.log("ALERT OVERFLOWING FROM AUGUST TO SEPTEMBER");
			c = (c - 31);
			u = (u+1);
		}
	} 
	if (c > 30) {
		if (u=="09") {
			console.log("ALERT OVERFLOWING FROM SEPTEMBER TO OCTOBER");
			c = (c - 30);
			u = (u+1);
		}
	} 
	if (c > 31) {
		if (u=="10") {
			console.log("ALERT OVERFLOWING FROM OCTOBER TO NOVEMBER");
			c = (c - 31);
			u = (u+1);
		}
	} 
	if (c > 30) {
		if (u=="11") {
			console.log("ALERT OVERFLOWING FROM NOVEMBER TO DECEMBER");
			c = (c - 30);
			u = (u+1);
		}
	} 
	if (c > 31) {
		if (u=="12") {
			console.log("ALERT OVERFLOWING FROM DECEMBER TO JANUARY");
			c = (c - 31);
			u = (01);
		}
	}
	if (c < 10) {
		c = "0" + c;
	}
	if (u < 10) {
		u = "0" + u;
    }
    var digger = new Date();
    var gigger =  digger.getFullYear();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var rigger = months[digger.getMonth()];
    var figger = digger.getDate();

    var next4days = gigger + "-" + u + "-"+ c  
    document.getElementById("date").innerHTML = rigger + " " + figger + ", " + gigger
    console.log(next4days)



//----------------------------------------------------------------------

    localStorage.setItem("lat", 45)
    localStorage.setItem("lon", -93)
    localStorage.setItem("units", "us")

 //REALTIME
 fetch('https://api.climacell.co/v3/weather/realtime?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&unit_system='+localStorage.getItem("units")+'&fields=temp%2Chumidity%2Cwind_speed%2Cbaro_pressure%2Cweather_code%2Csunrise%2Csunset&apikey=oATA14jpsO1MdhKOjKCscL6Aym7N6QAn')
 .then(response => response.json())
 .then(data => {

     var currenttemp = Math.floor(data['temp']['value'])
     var currenticonstart = (data['weather_code']["value"])
     var currenthumidity = Math.floor(data["humidity"]["value"])
     var currentwindspeed = Math.floor(data["wind_speed"]["value"])
     var currentairp =  data["baro_pressure"]["value"]
     var currentairpFinal = currentairp.toFixed(2)


//----------------------------------------------------------------------

     //Finish customizing 'currenticonstart' for each variable weather code!!:

     switch (currenticonstart) {
         default:
             currenticonend = "color/clear_day.svg"
             break;

         case "clear": 
         //day/night
             currenticonend = "color/clear_day.svg"
             break;

         case "cloudy":   
             currenticonend = "color/cloudy.svg" 
             break;

         case "drizzle":   
             currenticonend = "color/drizzle.svg" 
             break;

         case "flurries":   
             currenticonend = "color/flurries.svg" 
             break;

         case "fog":   
             currenticonend = "color/fog.svg" 
             break;

         case "fog_light":  
             currenticonstart = "Light Fog"            
             currenticonend = "color/fog_light.svg" 
             break;

         case "freezing_drizzle":  
             currenticonstart = "Freezing Drizzle"    
             currenticonend = "color/freezing_drizzle.svg" 
             break;

         case "freezing_rain_light":  
             currenticonstart = "UNDER CONSTRUCTION"    
             currenticonend = "color/freezing_rain_light.svg" 
             break;    

         case "freezing_rain":   
         currenticonstart = "UNDER CONSTRUCTION"  
             currenticonend = "color/freezing_rain.svg" 
             break;    
             
         case "freezing_rain_heavy": 
         currenticonstart = "UNDER CONSTRUCTION"    
             currenticonend = "color/freezing_rain_heavy.svg" 
             break;  
             
         case "ice_pellets_light": 
         currenticonstart = "UNDER CONSTRUCTION"    
             currenticonend = "color/ice_pellets_light.svg" 
             break;

         case "ice_pellets":   
         currenticonstart = "UNDER CONSTRUCTION"  
             currenticonend = "color/ice_pellets.svg" 
             break;

         case "ice_pellets_heavy":   
         currenticonstart = "UNDER CONSTRUCTION"  
             currenticonend = "color/ice_pellets_heavy.svg" 
             break;

         case "mostly_clear":
             currenticonstart = "Mostly Clear"  
             //day/night
             currenticonend = "color/mostly_clear_day.svg"
             break;

         case "mostly_cloudy":
             currenticonstart = "Mostly Cloudy"
             currenticonend =  "color/mostly_cloudy_day.svg"
             break;    

         case "partly_cloudy":
             currenticonstart = "Partly Cloudy"
             //day/night
             currenticonend =  "color/partly_cloudy_day.svg"
             break; 
     
         case "rain_light":
             currenticonend =  "color/rain_light.svg"
             break;

         case "rain":
             currenticonend =  "color/rain.svg"
             break; 

         case "rain_heavy":
             currenticonend =  "color/rain_heavy.svg"
             break;  
             
         case "snow_light":
             currenticonend =  "color/snow_light.svg"
             break;  

         case "snow":
             currenticonend =  "color/snow.svg"
             break;  
             
         case "snow_heavy":
             currenticonend =  "color/snow_heavy.svg"
             break;   

         case "tstorm":
             currenticonend =  "color/tstorm.svg"
             break;   
         }   
//----------------------------------------------------------------------

     function capitalizeFirstLetter(string) {
         return string.charAt(0).toUpperCase() + string.slice(1);
     }
     
     document.getElementById("wicon").src = currenticonend;
     document.getElementById("desc").innerHTML = (capitalizeFirstLetter(currenticonstart));
     document.getElementById("temp").innerHTML = currenttemp + "° " + data["temp"]["units"];
     //document.getElementById("stat1").innerHTML = currenthumidity + " " + data["humidity"]["units"];
     //document.getElementById("stat3").innerHTML = currentwindspeed + " " + data["wind_speed"]["units"];
     //document.getElementById("stat4").innerHTML = currentairpFinal + " " + data["baro_pressure"]["units"];

 });
} getCurrentWeather();
