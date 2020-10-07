// GLOBAL VARIABLES:

var currtime = document.getElementById("clock");

//Animations:

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
     document.getElementById("stat1").innerHTML = currenthumidity + " " + data["humidity"]["units"];
     document.getElementById("stat3").innerHTML = currentwindspeed + " " + data["wind_speed"]["units"];
     document.getElementById("stat4").innerHTML = currentairpFinal + " " + data["baro_pressure"]["units"];

 });
} getCurrentWeather();
