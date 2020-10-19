if (window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // “Fear is the path to the Dark Side" - Yoda
}
// GLOBAL VARIABLES:

var currtime = document.getElementById("clock");


//Welcome:

function welcome() {

    localStorage.setItem("showingUpdates", "no");

    //localStorage.removeItem("name")
    //localStorage.removeItem("updatesOctober10")

    document.getElementById("name").classList.add("hidename")
    document.getElementById("minheight").style.backgroundColor = localStorage.getItem("bgcolor")
    bg.style.backgroundImage = localStorage.getItem("bgimage")

    updateButton.classList.add("updateButtonHide");
    document.getElementsByClassName("arrow")[0].style.display = "none"
    document.getElementById("updates").style.display = "none" 
    
    if (document.getElementById("bgcolorpicker").value === null) {
        localStorage.setItem("bgcolor", "#ffffff")
    }
    if (document.getElementById("bgcolorpicker").value === "") {
        localStorage.setItem("bgcolor", "#ffffff")
    }
    if (document.getElementById("bgcolorpicker").value === "#000000") {
        localStorage.setItem("bgcolor", "#ffffff")
    }
    document.getElementById("bgcolorpicker").value = localStorage.getItem("bgcolor")

    if (localStorage.getItem("name") === null) {
        newVisitor();
        return;
    }
    if (localStorage.getItem("updatesOctober10") === null) {
        showUpdates ()
        return;
    }

    localStorage.getItem("userChooseAuto")
    //console.log(localStorage.getItem("userChooseAuto"))
    //console.log(document.getElementById("minheight").style.backgroundColor)

    switch (localStorage.getItem("userChooseAuto")) {
        case "active":
            document.getElementById("auto").style.color = "white"
            break;
        case "unactive":
            document.getElementById("auto").style.color = "black"
            break;
    }


    document.getElementById("freshWelcomeLogo").style.display = "none"
    showHome();
    document.getElementById("notibubble").innerHTML = "Welcome, " + localStorage.getItem("name") 

    document.getElementById("notibubble").classList.add("notidown")
    document.getElementById("notibubble").classList.remove("notiup")

    setTimeout(function(){
        document.getElementById("notibubble").classList.remove("notidown")
        document.getElementById("notibubble").classList.add("notiup")
    },3000);
}

function showUpdates () {

    //change the display of the logo so that the user can't click it
    document.getElementById("freshWelcomeLogo").classList.add("FreshLogodisplaynone")

    //Change the showing updates to yes (for things that need to know whether the user is viewing the updates)
    localStorage.setItem("showingUpdates", "yes");

    //Show the update box
    document.getElementById("updates").style.display = "block" 
    var updatesBox = document.getElementById("updatesBox") 
    updatesBox.style.display = "block"

    //Hide the update button
    var updateButton = document.getElementById("updateButton");
    updateButton.classList.remove("updateButtonShow");
    updateButton.classList.add("updateButtonHide");

    //Show the bouncing arrow
    var aB = document.getElementsByClassName("arrow")[0];
    aB.style.display = "block"



    //when the update button is clicked, hide the update box + set random lcl strg. values
    updateButton.addEventListener("click", function() {
        hideUpdates();
        localStorage.setItem("updatesOctober10", "no")

        //Logs whether the user has seen the update
        console.log(localStorage.getItem("updatesOctober10"))
    });


    //hide update box function
    function hideUpdates () {

        //alert("hideingupdates")
        //lcl strg. for user
        localStorage.setItem("showingUpdates", "no");

        //hide button + box
        setTimeout(function() {
            aB.style.display = "none"
            updateButton.classList.remove("updateButtonShow");
            updateButton.classList.add("updateButtonHide");
            updatesBox.style.display = "none"

            document.getElementById("updates").style.display = "none" 
        }, 300)
        
        
    }

}

    //Hide the bouncing arrow when the user scrolls down:
    function hideArrow () {
        var aB = document.getElementsByClassName("arrow")[0];
        var uB = document.getElementById("updatesBox");

        var scrlTop = uB.scrollTop;

        //console.log(scrlTop)
        document.getElementById("scrollText").innerHTML = scrlTop

        switch (document.getElementById("scrollText").innerHTML) {
            default :
                aB.style.display = "none"
                break;
            //Show the arrow if the user decides to scroll back up top
            case "0" :
                aB.style.display = "block"
                break;
            case "452" :

                break;                
        }


        ///CHANGE THIS FOR EVERY UPDATE TO HOWEVER LONG IS SUFFICIENT:
        ///CHANGE THIS FOR EVERY UPDATE TO HOWEVER LONG IS SUFFICIENT:
        ///CHANGE THIS FOR EVERY UPDATE TO HOWEVER LONG IS SUFFICIENT:
        if (document.getElementById("scrollText").innerHTML > "500") {
            updateButton.classList.remove("updateButtonHide");
            updateButton.classList.add("updateButtonShow");
        }

    }


function newVisitor () {

    document.getElementById("notibubble").innerHTML = "Welcome" 
    document.getElementById("backwhite").classList.remove("backwhitehidedisplay")

    var backwhite = document.getElementById("backwhite")
    backwhite.classList.add("backwhiteshow")

    var uhoh = document.getElementById("uhoh")
    uhoh.classList.add("zerozindex");

    document.getElementById("welcometext").style.zIndex = "1000"
    document.getElementById("welcometext").style.display = "block"

    document.getElementById("welcometext").innerHTML = "Welcome to Fresh."

    //Welcome text in view
    setTimeout(function() {
        document.getElementById("welcometext").classList.remove("hideWelcomeText")
        document.getElementById("welcometext").classList.add("showWelcomeText")
    },200);

    setTimeout(function() {
        var bhold = document.getElementById("buttonhold");
        bhold.classList.add("buttonholdfadein");
        bhold.classList.add("buttonholdreg");
        bhold.classList.remove("buttonholddown")
        bhold.classList.remove("buttonholdfadeout")
        bhold.classList.remove("buttonholdhidedisplay");
    },500);


}
//After user clicks arrow:

document.getElementById("freshWelcomeLogo").classList.remove("FreshLogodisplaynone")

function contNewVisitor () {

    setTimeout(function() {
        var bhold =document.getElementById("buttonhold")
        bhold.classList.add("buttonholdfadeout")
        bhold.classList.remove("buttonholdfadein");
        setTimeout(function() {
            var bhold = document.getElementById("buttonhold")
            bhold.classList.remove("buttonholdfadeout")
            bhold.classList.add("buttonholdhidedisplay");
        },700);
    },1000);

        //Welcome text fades away, logo fades in
        setTimeout(function() {

            var flogo = document.getElementById("freshWelcomeLogo")


            flogo.classList.remove("logoup")
            flogo.classList.add("logodown")
    
            document.getElementById("welcometext").classList.add("hideWelcomeText")
            document.getElementById("welcometext").classList.remove("showWelcomeText")
        },1000);
    
        //Logo fades away, name query is presented
        setTimeout(function() {
            document.getElementById("name").classList.remove("hidename")
            document.getElementById("name").classList.add("showname")
    
            document.getElementById("welcometext").innerHTML = "First off, what would you like to be called?"

            
            document.getElementById("freshWelcomeLogo").classList.remove("logodown")
            document.getElementById("freshWelcomeLogo").classList.add("logoup")
            
            //Welcome text shown as query
          setTimeout(function() {
            document.getElementById("welcometext").classList.remove("hideWelcomeText")
            document.getElementById("welcometext").classList.add("showWelcomeText")
                setTimeout(function() {
                    document.getElementById("name").focus();
                    document.getElementById("freshWelcomeLogo").classList.add("FreshLogodisplaynone")
                }, 200); 
            },800);
    
        },4300);
        
    
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
                localStorage.setItem("tutorial", "yes")
                showHome()
              },100);
            }
          });


}


function showHome () {
    //alert("showinghome")

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
    if (localStorage.getItem("tutorial", "yes")) {
        setTimeout(function() {
            tutbox = document.getElementById("tutbox");

            tutbox.style.display = "block"
            localStorage.setItem("tutorial", "no")
        }, 2500);
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
switch (localStorage.getItem("showingUpdates")) {
    case "yes":
        console.log("bruh")
}        

function responsivewarning(x) {

    switch (localStorage.getItem("showingUpdates")) {
        case "yes":
            console.log("disabledresponsive")
            break;
        case "no":
            if (width.matches) { // If media query matches
                document.getElementById("backwhite").classList.remove("backwhitehide")
                document.getElementById("backwhite").classList.add("backwhiteshowdisplay")
                document.getElementById("backwhite").classList.remove("backwhitehidedisplay")
              } else {
                document.getElementById("backwhite").classList.add("backwhitehidedisplay")
                document.getElementById("backwhite").classList.remove("backwhiteshowdisplay")
              }
            break;
    }
}


  var width = window.matchMedia("(max-width: 800px)")
  responsivewarning(width) // Call listener function at run time
  width.addListener(responsivewarning) // Attach listener function on state changes



  //HEIGHT
  function responsivewarningHeight(x) {

    switch (localStorage.getItem("showingUpdates")) {
        case "yes":
            console.log("disabledresponsive")
            break;
        case "no":
            if (Height.matches) { // If media query matches
                document.getElementById("backwhiteHeight").classList.remove("backwhiteHeighthide")
                document.getElementById("backwhiteHeight").classList.add("backwhiteHeightshowdisplay")
                document.getElementById("backwhiteHeight").classList.remove("backwhiteHeighthidedisplay")
              } else {
                document.getElementById("backwhiteHeight").classList.add("backwhiteHeighthidedisplay")
                document.getElementById("backwhiteHeight").classList.remove("backwhiteHeightshowdisplay")
              }
            break;
    }
}


  var Height = window.matchMedia("(max-height: 640px)")
  responsivewarningHeight(Height) // Call listener function at run time
  Height.addListener(responsivewarningHeight) // Attach listener function on state changes








//Animations: -----------------------------------------------

//fancy button
var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }
//fancy button





//customize page

function customize() {
   var bodygrid = document.getElementById("bodygrid")
   var customize = document.getElementById("customizesquare")
   
   bodygrid.classList.remove("goback");
   bodygrid.classList.add("goleft");

   customize.classList.remove("swingout")
   customize.classList.add("swingin")

   localStorage.setItem("customizePage", "true")
   tutbox = document.getElementById("tutbox");
   tutbox.style.display = "none"
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
    //var element1 = document.getElementById("expandthedots");
    //element1.classList.add("expandhoriztranslate");
    //element1.classList.remove("closedhoriztranslate");

    //document.getElementById("customize").style.display = "block"

    //var element2 = document.getElementById("customize");
    //element2.classList.add("customizefadein");
    //element2.classList.remove("customizefadeout");
} 
function closethedots() {
    //var element = document.getElementById("expandthedots");
    //element.classList.add("closedhoriztranslate");
    //element.classList.remove("expandhoriztranslate");

    //var element2 = document.getElementById("customize");
    //element2.classList.add("customizefadeout");
    //element2.classList.remove("customizefadein");

    //setTimeout(function(){

    //    document.getElementById("customize").style.display = "none"

    //},699);
}
//logo
function expandthelogo() {
    //var element1 = document.getElementById("expandthelogo");
    //element1.classList.add("expandhoriztranslatelogo");
    //element1.classList.remove("closedhoriztranslatelogo");

    //document.getElementById("settings").style.display = "block"

    //var element2 = document.getElementById("settings");
    //element2.classList.add("customizefadein");
    //element2.classList.remove("customizefadeout");

    //pushdots();
} 
function closethelogo() {
    //var element = document.getElementById("expandthelogo");
    //element.classList.add("closedhoriztranslatelogo");
    //element.classList.remove("expandhoriztranslatelogo");

    //var element2 = document.getElementById("settings");
    //element2.classList.add("customizefadeout");
    //element2.classList.remove("customizefadein");

    //pulldots();

    //setTimeout(function(){
    //    document.getElementById("settings").style.display = "none"
    //},699);
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

    //Set the squares to be dragggable
    document.getElementById('leftopbodygrid').setAttribute('draggable', true);
    document.getElementById('leftbottombodygrid').setAttribute('draggable', true);
    document.getElementById('rightbodygrid').setAttribute('draggable', true);

    //Show the dotted boxes which you can drag squares onto
    document.getElementById('dottedboxleft').style.display = "block"
    document.getElementById('dottedboxright').style.display = "block"

    //Notify the user that layout mode is active
    document.getElementById("notibubble").innerHTML = "Layout Mode"

    //Remove the html of all the elements
    document.getElementById('rightbodygrid').innerHTML = ""
    document.getElementById('leftopbodygrid').innerHTML = ""
    document.getElementById('clocksquare').innerHTML = ""
    document.getElementById('logosquare').innerHTML = ""
    document.getElementById('dotsquare').innerHTML = ""


    document.getElementById("notibubble").classList.add("notidown")
    document.getElementById("notibubble").classList.remove("notiup")

    document.getElementById("flowers").classList.add("flowershidden")
    document.getElementById("flowers").classList.remove("flowersshown")

    document.getElementById("greensplit").classList.remove("greensplitshow")
    document.getElementById("greensplit").classList.add("greenspilthide")

    setTimeout(function(){
        document.getElementById("notibubble").classList.remove("notidown")
        document.getElementById("notibubble").classList.add("notiup")
    },3000);

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
//Background Image Change Functions  -----------------------------------------

var bg = document.getElementById("flowers")
var backgroundColorAuto = document.getElementById("minheight").style.backgroundColor

function defaultbg () {
    bg.style.backgroundImage = "url(/FlowersandStuff-01.png)"
    localStorage.setItem("bgimage", "url(/FlowersandStuff-01.png)")
}
function rainbowbg () {
    bg.style.backgroundImage = "url(/Bimages/background-with-floral-concept/PinnkandGreen.jpg)"
    localStorage.setItem("bgimage", "url(/Bimages/background-with-floral-concept/PinnkandGreen.jpg)")
}
function tropicalbg () {
    bg.style.backgroundImage = "url(/Bimages/flat-abstract-floral-background/Tropical.jpg)"
    localStorage.setItem("bgimage", "url(/Bimages/flat-abstract-floral-background/Tropical.jpg)")
}
function goldblue() {
    bg.style.backgroundImage = "url(/Bimages//flat-design-floral-wallpaper-design/GoldBlue.jpg)"
    localStorage.setItem("bgimage", "url(/Bimages//flat-design-floral-wallpaper-design/GoldBlue.jpg")
}
//Color bgchange 

document.getElementById("bgcolorpicker").addEventListener('change', function() {
    document.getElementById("minheight").style.backgroundColor = this.value
    
    document.getElementById("auto").style.color = "black"
    localStorage.setItem("bgcolor", this.value)

    //console.log(localStorage.getItem("bgcolor"))
})

function autobgcolor () {


    switch (document.getElementById("auto").style.color) {
        default :
            if (backgroundColorAuto == "#d6f5f5") {
                localStorage.setItem("userChooseAuto", "active")
            } 
            if (backgroundColorAuto == "#ffffff") {
                localStorage.setItem("userChooseAuto", "unactive")
            } 
            break;
        case "black":
            localStorage.setItem("userChooseAuto", "unactive")
            break;

        case "white":
            localStorage.setItem("userChooseAuto", "active")
            break;
    }

    switch (localStorage.getItem("userChooseAuto")) {
        case "unactive":
            //alert("assigingwhite")
            document.getElementById("auto").style.color = "white"
            break;
        case "active":
            document.getElementById("auto").style.color = "black"
            break;
    }

 

    switch (localStorage.getItem("bgimage")) {
        default:
            document.getElementById("minheight").style.backgroundColor = "#d6f5f5"
            document.getElementById("bgcolorpicker").value = "#d6f5f5"
            localStorage.setItem("bgcolor", "#d6f5f5")
            break;

        case "url(/FlowersandStuff-01.png)": 
            document.getElementById("minheight").style.backgroundColor = "#d6f5f5"
            document.getElementById("bgcolorpicker").value = "#d6f5f5"
            localStorage.setItem("bgcolor", "#d6f5f5")
        break;
    }
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
    //console.log(next4days)

    //fetch('https://api.climacell.co/v3/weather/realtime?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&unit_system='+localStorage.getItem("units")+'&fields=temp%2Chumidity%2Cwind_speed%2Cbaro_pressure%2Cweather_code%2Csunrise%2Csunset&apikey=gjkSy3KHmWy7xWUrToVJA24shlhC5w5z')
    //.then(response => response.json())
    //.then(data => (console.log(data)))

//----------------------------------------------------------------------

    localStorage.setItem("lat", 45.086650)
    localStorage.setItem("lon", -93.118200)
    localStorage.setItem("units", "us")

 //REALTIME
 fetch('https://api.climacell.co/v3/weather/realtime?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&unit_system='+localStorage.getItem("units")+'&fields=temp%2Chumidity%2Cwind_speed%2Cbaro_pressure%2Cweather_code%2Csunrise%2Csunset&apikey=oATA14jpsO1MdhKOjKCscL6Aym7N6QAn')
 .then(response => response.json())
 .then(data => {

     var currenttemp = Math.floor(data['temp']['value'])
     localStorage.setItem("currenticonstart", (data['weather_code']["value"]))
     var currenthumidity = Math.floor(data["humidity"]["value"])
     var currentwindspeed = Math.floor(data["wind_speed"]["value"])
     var currentairp =  data["baro_pressure"]["value"]
     var currentairpFinal = currentairp.toFixed(2)

     iconDesc();

//HOURLY (for precip probability)
    fetch('https://api.climacell.co/v3/weather/forecast/hourly?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&location_id=shoreview&unit_system='+localStorage.getItem("units")+'&start_time=now&end_time='+next4days+'T14%3A09%3A50Z&fields=precipitation_probability&apikey=gjkSy3KHmWy7xWUrToVJA24shlhC5w5z')
	.then(response => response.json())
	.then(data => {
        var currentrainchance = data[0]["precipitation_probability"]["value"]
        document.getElementById("stat2").innerHTML = currentrainchance + " %";
    })    


//DAILY (for temp high/low)
    fetch('https://api.climacell.co/v3/weather/forecast/daily?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&unit_system=us&start_time=now&end_time=2020-10-21T14%3A00%3A00Z&fields=temp&apikey=oATA14jpsO1MdhKOjKCscL6Aym7N6QAn')
	.then(response => response.json())
	.then(data => {
        var templow = Math.floor(data[0]["temp"][0]['min']["value"])
        var temphigh = Math.floor(data[0]["temp"][1]['max']["value"])

        document.getElementById("temphighlow").innerHTML = temphigh + "° / " + templow + "°";
    }) 

//----------------------------------------------------------------------

//----------------------------------------------------------------------


     
     document.getElementById("wicon").src = currenticonend;

     document.getElementById("temp").innerHTML = currenttemp + "° " + data["temp"]["units"];
     document.getElementById("stat1").innerHTML = currenthumidity + " " + data["humidity"]["units"];
     document.getElementById("stat3").innerHTML = currentwindspeed + " " + data["wind_speed"]["units"];
     document.getElementById("stat4").innerHTML = currentairpFinal + " " + data["baro_pressure"]["units"];

 });
} getCurrentWeather();
