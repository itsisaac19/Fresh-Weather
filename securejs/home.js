// GLOBAL VARIABLES:

var currtime = document.getElementById("clock");
var bg = document.getElementById("flowers")



//Disable Tab

document.onkeydown = function (t) {
    if(t.which == 9){
     return false;
    }
   }

//Error Catch

   function testForErr () {
       var s = "o"
   }
   

   function consoleLog () {
       //console.log(localStorage.getItem("bgcolor"))
   }


//Welcome:

function welcome() {

    // NULL/EMPTY CONDITIONS

    if (document.getElementById("minheight").style.backgroundColor == "") {
        //alert("ccd")
        document.getElementById("minheight").style.backgroundColor = localStorage.getItem("bgcolor")
    }
    if (localStorage.getItem("apiKey") === null) {
        localStorage.setItem("apiKey", "oATA14jpsO1MdhKOjKCscL6Aym7N6QAn")
    }
    /*
    if (localStorage.getItem("updatesOctober19") === null) {
        showUpdates ()
        localStorage.setItem("updatesOctober19", "seen")
        return;
    }*/
    if (localStorage.getItem("bgimage") == "url(/Bimages/GeometricDark1.png)") {
        //alert("whaa")
        darkTheme()
    }



    // PUT CONSOLE LOGS BELOW
    //console.log(localStorage.getItem("bgimage"))
    //console.log(localStorage.getItem("updatesOctober19"))
    //console.log(document.getElementById("minheight").style.backgroundColor)
    //console.log(localStorage.getItem("squareColor"))

    //UN-COMMENT THE BELOW LINE FOR UNNESSACARY API CALLS
    getCurrentWeather();
    mobileBgChange ()

    // PUT LCL STRG ITEMS BELOW
    localStorage.setItem("showingUpdates", "no");
    //localStorage.setItem("bgimage", bg.style.backgroundImage); 
    localStorage.setItem("layoutMode", "no")
    //localStorage.removeItem("name")
    //localStorage.removeItem("updatesOctober19")

    //SET DEFAULTS
    document.getElementById("freshWelcomeLogo").style.display = "none"
    document.getElementById("minheight").style.backgroundColor = localStorage.getItem("bgcolor")
    document.getElementsByClassName("arrow")[0].style.display = "none"
    document.getElementById("updates").style.display = "none"    
    document.getElementById("notibubble").innerHTML = "Welcome, " + localStorage.getItem("name") 
    document.getElementById("bgcolorpicker").value = localStorage.getItem("bgcolor")
    document.getElementById("nonebg").style.backgroundColor = localStorage.getItem("bgcolor")

    bg.style.backgroundImage = localStorage.getItem("bgimage")

    updateButton.classList.add("updateButtonHide");   
    document.getElementById("name").classList.add("hidename")
    document.getElementById("notibubble").classList.add("notidown")
    document.getElementById("notibubble").classList.remove("notiup")


    // AUTO COLOR BG 
    switch (localStorage.getItem("userChooseAuto")) {
        case "active":
            document.getElementById("auto").style.color = "white"
            break;
        case "unactive":
            document.getElementById("auto").style.color = "black"
            break;
    }

    setTimeout(function(){
        document.getElementById("notibubble").classList.remove("notidown")
        document.getElementById("notibubble").classList.add("notiup")
    },2000);

    showHome();
}

function showUpdates () {

    //change the display of the logo so that the user can't click it
    document.getElementById("freshWelcomeLogo").classList.add("FreshLogodisplaynone")

    //Change the showing updates to yes (for things that need to know whether the user is viewing the updates)
    localStorage.setItem("showingUpdates", "yes");

    //Blur background 
    document.getElementById("upBlur").classList.remove("updateBlurHide")
    document.getElementById("upBlur").classList.add("updateBlurShow")

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

        //Logs whether the user has seen the update
        //console.log(localStorage.getItem("updatesOctober10"))
    });


    //hide update box function
    function hideUpdates () {

        //alert("hideingupdates")
        //lcl strg. for user
        //localStorage.setItem("showingUpdates", "no");

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

function hideUpdates () {

    var aB = document.getElementsByClassName("arrow")[0];
    var updateButton = document.getElementById("updateButton");

    //alert("hideingupdates")
    //lcl strg. for user
    localStorage.setItem("showingUpdates", "no");

    document.getElementById("upBlur").classList.add("updateBlurHide")
    document.getElementById("upBlur").classList.remove("updateBlurShow")

    //hide button + box
    setTimeout(function() {
        aB.style.display = "none"
        updateButton.classList.remove("updateButtonShow");
        updateButton.classList.add("updateButtonHide");
        updatesBox.style.display = "none"

        document.getElementById("updates").style.display = "none" 
    }, 300)
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
              //console.log(localStorage.getItem("name"))
              // Trigger the showHome
              setTimeout(function() {
                localStorage.setItem("tutorial", "yes")
                showHome()
              },100);
            }
          });


}

function hideTutorial () {
    tutbox.classList.remove("tutboxShow")
    tutbox.classList.add("tutboxHide")
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

    if (localStorage.getItem("tutorial", "yes")) {
        document.getElementById('flowers').style.backgroundImage = "url(/Bimages//flat-design-floral-wallpaper-design/GoldBlue.jpg)"
    }

    /*if (localStorage.getItem("updatesOctober19") === null) {
        localStorage.setItem("updatesOctober19", "seen")
        showUpdates ()
        return;
    }*/
    if (localStorage.getItem("tutorial", "yes")) {

        //alert("tut")

        document.getElementById('flowers').style.backgroundImage = "url(/Bimages//flat-design-floral-wallpaper-design/GoldBlue.jpg)"

        /*setTimeout(function() {
            tutbox = document.getElementById("tutbox");

            tutbox.classList.add("tutboxShow")
            tutbox.classList.remove("tutboxHide")
            localStorage.setItem("tutorial", "no")
        }, 1500);*/
    }
}
switch (localStorage.getItem("showingUpdates")) {
    case "yes":
        //console.log("bruh")
}        


function responsivewarning(x) {
    
    var hG = document.getElementById("HourlyGrid")
    switch (localStorage.getItem("showingUpdates")) {
        case "yes":
            //console.log("disabledresponsive")
            break;
        case "no":
            if (width.matches) { // If media query matches

                localStorage.setItem("belowMediaMobile", "yes")



                hG.innerHTML = `

                <em id="HourlyChartContainer">
                    <canvas id="hourlyChart"></canvas>
                </em>
    
                <div id="temphour1">test</div>
                <img class="bruh1" id="wiconhour1"/>  
                <div class="defaultHourly" id="hour1">3pm</div>           
            
                <img class="bruh2" id="wiconhour2"/>
                <div id="temphour2">test</div>
                <div class="defaultHourly" id="hour2">4pm</div>   
            
                <img class="bruh3" id="wiconhour3"/>
                <div id="temphour3">test</div>
                <div class="defaultHourly" id="hour3">5pm</div>   
            
                <img class="bruh4" id="wiconhour4"/>
                <div id="temphour4">test</div>
                <div class="defaultHourly" id="hour4">6pm</div>   
                
                <img class="bruh5" id="wiconhour5"/>
                <div id="temphour5">test</div>
                <div class="defaultHourly" id="hour5">7pm</div>   
            
                <img class="bruh6" id="wiconhour6"/>
                <div id="temphour6">test</div>
                <div class="defaultHourly" id="hour6">8pm</div>   
            
                <img class="bruh7" id="wiconhour7"/>
                <div id="temphour7">test</div>
                <div class="defaultHourly" id="hour7">9pm</div>   
            
                <img class="bruh8" id="wiconhour8"/>
                <div id="temphour8">test</div>
                <div class="defaultHourly" id="hour8">10pm</div>   
            
                <img class="bruh9" id="wiconhour9"/>
                <div id="temphour9">test</div>
                <div id="hour9">10pm</div>  
            
                <img class="bruh10" id="wiconhour10"/>
                <div id="temphour10">test</div>
                <div id="hour10">10pm</div>  
            
                <img class="bruh11" id="wiconhour11"/>
                <div id="temphour11">test</div>
                <div id="hour11">10pm</div>  
            
                <img class="bruh12" id="wiconhour12"/>
                <div id="temphour12">test</div>
                <div id="hour12">10pm</div>  
            
                <img class="bruh13" id="wiconhour13"/>
                <div id="temphour13">test</div>
                <div id="hour13">10pm</div>  
            
                <img class="bruh14" id="wiconhour14"/>
                <div id="temphour14">test</div>
                <div id="hour14">10pm</div>  
            
                <img class="bruh15" id="wiconhour15"/>
                <div id="temphour15">test</div>
                <div id="hour15">10pm</div>  
            
                `
              } else {

                localStorage.setItem("belowMediaMobile", "no")

                hG.innerHTML = `

                <em id="HourlyChartContainer">
                <canvas id="hourlyChart"></canvas>
                </em>

                <div id="temphour1">test</div>
                <img class="bruh1" id="wiconhour1"/>  
                <div id="hour1">3pm</div>           
            
                <img class="bruh2" id="wiconhour2"/>
                <div id="temphour2">test</div>
                <div id="hour2">4pm</div>   
            
                <img class="bruh3" id="wiconhour3"/>
                <div id="temphour3">test</div>
                <div id="hour3">5pm</div>   
            
                <img class="bruh4" id="wiconhour4"/>
                <div id="temphour4">test</div>
                <div id="hour4">6pm</div>   
                
                <img class="bruh5" id="wiconhour5"/>
                <div id="temphour5">test</div>
                <div id="hour5">7pm</div>   
            
                <img class="bruh6" id="wiconhour6"/>
                <div id="temphour6">test</div>
                <div id="hour6">8pm</div>   
            
                <img class="bruh7" id="wiconhour7"/>
                <div id="temphour7">test</div>
                <div id="hour7">9pm</div>   
            
                <img class="bruh8" id="wiconhour8"/>
                <div id="temphour8">test</div>
                <div id="hour8">10pm</div>   

                <img class="bruh9" id="wiconhour9"/>
                <div id="temphour9">test</div>
                <div id="hour9">10pm</div>  
            
                <img class="bruh10" id="wiconhour10"/>
                <div id="temphour10">test</div>
                <div id="hour10">10pm</div>  
            
                <img class="bruh11" id="wiconhour11"/>
                <div id="temphour11">test</div>
                <div id="hour11">10pm</div>  
            
                <img class="bruh12" id="wiconhour12"/>
                <div id="temphour12">test</div>
                <div id="hour12">10pm</div>  
            
                <img class="bruh13" id="wiconhour13"/>
                <div id="temphour13">test</div>
                <div id="hour13">10pm</div>  
            
                <img class="bruh14" id="wiconhour14"/>
                <div id="temphour14">test</div>
                <div id="hour14">10pm</div>  
            
                <img class="bruh15" id="wiconhour15"/>
                <div id="temphour15">test</div>
                <div id="hour15">10pm</div>  
                `
              }
            break;
    }
}


  var width = window.matchMedia("(max-width: 800px)")
  responsivewarning(width) // Call listener function at run time
  width.addListener(responsivewarning) // Attach listener function on state changes*/

/*

  //HEIGHT
  function responsivewarningHeight(x) {

    switch (localStorage.getItem("showingUpdates")) {
        case "yes":
            //console.log("disabledresponsive")
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




*/



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

   customize.classList.remove("displaynone")
   setTimeout(function() {
    customize.classList.remove("swingout")
    customize.classList.add("swingin")
   }, 300);

   localStorage.setItem("customizePage", "true")
   tutbox = document.getElementById("tutbox");
   //tutbox.style.display = "none"
}
//dashboard

function freshdashboard () {
    var bodygrid = document.getElementById("bodygrid")
    var customize = document.getElementById("customizesquare")
    
    bodygrid.classList.add("goback");
    bodygrid.classList.remove("goleft");
 
    customize.classList.add("swingout")
    customize.classList.remove("swingin")

    setTimeout(function() {
        customize.classList.add("displaynone")
       }, 300);

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
    localStorage.setItem("layoutMode", "yes")

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
    document.getElementById('leftbottombodygrid').innerHTML = ""
    document.getElementById('dailyGrid').innerHTML = ""
    document.getElementById('madeWithLove').innerHTML = ""

    


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

//function allowDrop(ev) {
  //  ev.preventDefault();
  //}
  
  //function drag(ev) {
    //ev.dataTransfer.setData("text", ev.target.id);
  //}
  
  //function drop(ev) {
    //ev.preventDefault();
    //var data = ev.dataTransfer.getData("text");
    //ev.target.appendChild(document.getElementById(data));
  //}

function exitChangeLayout() {

    localStorage.setItem("layoutMode", "no")

    document.getElementById('dottedboxleft').style.display = "none"
    document.getElementById('dottedboxright').style.display = "none"

    document.getElementById("exit").classList.remove("exitshow")
    document.getElementById("exit").classList.add("exithide")

    setTimeout(function(){
        location.reload();
    },300);

}
//Background Image Change Functions  -----------------------------------------


var backgroundColorAuto = document.getElementById("minheight").style.backgroundColor
var mobileHtml = document.getElementsByTagName("html")


function mobileBgChange () {

    if (localStorage.getItem("belowMediaMobile") == "yes") {
        for(var i=0; i < mobileHtml.length; i++) {
            mobileHtml[i].style.background = localStorage.getItem("bgimage");

            if (localStorage.getItem("bgimage") == "null") {
                setTimeout(function() {
                    for(var i=0; i < mobileHtml.length; i++) {
                        var noneBg = document.getElementById("nonebg").style.backgroundColor
                        //console.log(noneBg)
                        mobileHtml[i].style.background = null
                        mobileHtml[i].style.backgroundColor = noneBg
                    }
                }, 100)
            }

        }
    } else {
        for(var i=0; i < mobileHtml.length; i++) {
            var noneBg = document.getElementById("nonebg").style.backgroundColor
            //console.log(noneBg)
            mobileHtml[i].style.background = null
            mobileHtml[i].style.backgroundColor = noneBg
        }        
    }
    setTimeout(mobileBgChange, 1000)
}




function nonebg1 () {
    //alert("dw")
    bg.style.backgroundImage = null
    localStorage.setItem("bgimage", "null")
    mobileBgChange ()
}
function defaultbg () {
    bg.style.backgroundImage = "url(/FlowersandStuff-01.png)"
    localStorage.setItem("bgimage", "url(/FlowersandStuff-01.png)")
    mobileBgChange ()
}
function rainbowbg () {
    bg.style.backgroundImage = "url(/Bimages/background-with-floral-concept/PinnkandGreen.jpg)"
    localStorage.setItem("bgimage", "url(/Bimages/background-with-floral-concept/PinnkandGreen.jpg)")
    mobileBgChange ()
}
function tropicalbg () {
    bg.style.backgroundImage = "url(/Bimages/flat-abstract-floral-background/Tropical.jpg)"
    localStorage.setItem("bgimage", "url(/Bimages/flat-abstract-floral-background/Tropical.jpg)")
    mobileBgChange ()
}
function goldblue() {
    bg.style.backgroundImage = "url(/Bimages/flat-design-floral-wallpaper-design/GoldBlue.jpg)"
    localStorage.setItem("bgimage", "url(/Bimages/flat-design-floral-wallpaper-design/GoldBlue.jpg")
    mobileBgChange ()
}
function darkModern () {
    bg.style.backgroundImage = "url(/Bimages/GeometricDark1.png)"
    localStorage.setItem("bgimage", "url(/Bimages/GeometricDark1.png)")
    mobileBgChange ()
}
//Color bgchange 

document.getElementById("bgcolorpicker").addEventListener('change', function() {
    document.getElementById("minheight").style.backgroundColor = this.value
    document.getElementById("nonebg").style.backgroundColor = this.value
    
    document.getElementById("auto").style.color = "black"
    localStorage.setItem("bgcolor", this.value)
    mobileBgChange () 

    //console.log(localStorage.getItem("bgcolor"))
})

function autobgcolor () {

    if (document.getElementById("auto").style.color == "black") {

        document.getElementById("auto").style.color = "white"
        localStorage.setItem("userChooseAuto", "active")

        switch (localStorage.getItem("bgimage")) {
            default:
                document.getElementById("minheight").style.backgroundColor = "#d6f5f5"
                document.getElementById("bgcolorpicker").value = "#d6f5f5"
    
                localStorage.setItem("bgcolor", "#d6f5f5")
    
                document.getElementById("nonebg").style.backgroundColor = localStorage.getItem("bgcolor")
                break;
    
            case "url(/FlowersandStuff-01.png)": 
                document.getElementById("minheight").style.backgroundColor = "#d6f5f5"
                document.getElementById("bgcolorpicker").value = "#d6f5f5"
    
                localStorage.setItem("bgcolor", "#d6f5f5")
    
                document.getElementById("nonebg").style.backgroundColor = localStorage.getItem("bgcolor")
            break;
        }
    } else {
        document.getElementById("auto").style.color = "black"
        localStorage.setItem("userChooseAuto", "unactive")
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

function DefaultHours () {
    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();

    var mid = 'PM';

    if (hour > 12) {
      hour = hour - 12;
    }    
    if(hour==0){ 
      hour=12;
    }
    if(TwentyFourHour < 12) {
       mid = 'AM';
    }
    if((TwentyFourHour == 24)) {
    mid = 'AM'
    }

            //Hour display

            document.getElementById("hour1").innerHTML = hour + " " + mid

            var hour1 = (hour+1)
            if (hour1 > 12) {
                hour1 = hour1 - 12
            }
            var TwentyFourHour1 = (TwentyFourHour + 1)
            var mid1 = mid 
            if (TwentyFourHour1 > 24) {
                TwentyFourHour1 = TwentyFourHour1 - 24
            }
            if (TwentyFourHour1 == 24) {
                mid1 = "AM"
            }
            if (TwentyFourHour1 >= 1) {
                if (TwentyFourHour1 < 12) {
                    mid1 = "AM"
                }
            }
            if (TwentyFourHour1 > 11) {
                mid1 = "PM"
            }
            
            document.getElementById("hour2").innerHTML = hour1 + " " + mid1
    
            var hour2 = (hour+2)
            if (hour2 > 12) {
                hour2 = hour2 - 12
            }
            var TwentyFourHour2 = (TwentyFourHour + 2)
            var mid2 = mid 
            if (TwentyFourHour2 > 24) {
                TwentyFourHour2 = TwentyFourHour2 - 24
            }
            if (TwentyFourHour2 == 24) {
                mid2 = "AM"
            }
            if (TwentyFourHour2 >= 1) {
                if (TwentyFourHour2 < 12) {
                    mid2 = "AM"
                }
            }
            if (TwentyFourHour2 > 11) {
                mid2 = "PM"
            }
            
            document.getElementById("hour3").innerHTML = hour2 + " " + mid2
    
            var hour3 = (hour+3)
            if (hour3 > 12) {
                hour3 = hour3 - 12
            }
            var TwentyFourHour3 = (TwentyFourHour + 3)
            var mid3 = mid 
            if (TwentyFourHour3 > 24) {
                TwentyFourHour3 = TwentyFourHour3 - 24
            }
            if (TwentyFourHour3 == 24) {
                mid3 = "AM"
            }
            if (TwentyFourHour3 >= 1) {
                if (TwentyFourHour3 < 12) {
                    mid3 = "AM"
                }
            }
            if (TwentyFourHour3 > 11) {
                mid3 = "PM"
            }
            
            document.getElementById("hour4").innerHTML = hour3 + " " + mid3
    
            var hour4 = (hour+4)
            if (hour4 > 12) {
                hour4 = hour4 - 12
            }
            var TwentyFourHour4 = (TwentyFourHour + 4)
            var mid4 = mid 
            if (TwentyFourHour4 > 24) {
                TwentyFourHour4 = TwentyFourHour4 - 24
            }
            if (TwentyFourHour4 == 24) {
                mid4 = "AM"
            }
            if (TwentyFourHour4 >= 1) {
                if (TwentyFourHour4 < 12) {
                    mid4 = "AM"
                }
            }
            if (TwentyFourHour4 > 11) {
                mid4 = "PM"
            }
            
            document.getElementById("hour5").innerHTML = hour4 + " " + mid4
    
            var hour5 = (hour+5)
            if (hour5 > 12) {
                hour5 = hour5 - 12
            }
            var TwentyFourHour5 = (TwentyFourHour + 5)
            var mid5 = mid 
            if (TwentyFourHour5 > 24) {
                TwentyFourHour5 = TwentyFourHour5 - 24
            }
            if (TwentyFourHour5 == 24) {
                mid5 = "AM"
            }
            if (TwentyFourHour5 >= 1) {
                if (TwentyFourHour5 < 12) {
                    mid5 = "AM"
                }
            }
            if (TwentyFourHour5 > 11) {
                mid5 = "PM"
            }
            
            document.getElementById("hour6").innerHTML = hour5 + " " + mid5
    
            var hour6 = (hour+6)
            if (hour6 > 12) {
                hour6 = hour6 - 12
            }	
            var TwentyFourHour6 = (TwentyFourHour + 6)
            var mid6 = mid 
            if (TwentyFourHour6 > 24) {
                TwentyFourHour6 = TwentyFourHour6 - 24
            }
            if (TwentyFourHour6 == 24) {
                mid6 = "AM"
            }
            if (TwentyFourHour6 >= 1) {
                if (TwentyFourHour6 < 12) {
                    mid6 = "AM"
                }
            }
            if (TwentyFourHour6 > 11) {
                mid6 = "PM"
            }
            
            document.getElementById("hour7").innerHTML = hour6 + " " + mid6
    
            var hour7 = (hour+7)
            if (hour7 > 12) {
                hour7 = hour7 - 12
            }	
            var TwentyFourHour7 = (TwentyFourHour + 7)
            var mid7 = mid 
            if (TwentyFourHour7 > 24) {
                TwentyFourHour7 = TwentyFourHour7 - 24
            }
            if (TwentyFourHour7 == 24) {
                mid7 = "AM"
            }
            if (TwentyFourHour7 >= 1) {
                if (TwentyFourHour7 < 12) {
                    mid7 = "AM"
                }
            }
            if (TwentyFourHour7 > 11) {
                mid7 = "PM"
            }
            
            document.getElementById("hour8").innerHTML = hour7 + " " + mid7
}
DefaultHours();

function TimeHourly () {

    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();

    var mid = 'PM';

    if (hour > 12) {
      hour = hour - 12;
    }    
    if(hour==0){ 
      hour=12;
    }
    if(TwentyFourHour < 12) {
       mid = 'AM';
    }
    if((TwentyFourHour == 24)) {
    mid = 'AM'
    }

            //Hour display

            document.getElementById("hour1").innerHTML = hour + " " + mid

            var hour1 = (hour+1)
            if (hour1 > 12) {
                hour1 = hour1 - 12
            }
            var TwentyFourHour1 = (TwentyFourHour + 1)
            var mid1 = mid 
            if (TwentyFourHour1 > 24) {
                TwentyFourHour1 = TwentyFourHour1 - 24
            }
            if (TwentyFourHour1 == 24) {
                mid1 = "AM"
            }
            if (TwentyFourHour1 >= 1) {
                if (TwentyFourHour1 < 12) {
                    mid1 = "AM"
                }
            }
            if (TwentyFourHour1 > 11) {
                mid1 = "PM"
            }
            
            document.getElementById("hour2").innerHTML = hour1 + " " + mid1
    
            var hour2 = (hour+2)
            if (hour2 > 12) {
                hour2 = hour2 - 12
            }
            var TwentyFourHour2 = (TwentyFourHour + 2)
            var mid2 = mid 
            if (TwentyFourHour2 > 24) {
                TwentyFourHour2 = TwentyFourHour2 - 24
            }
            if (TwentyFourHour2 == 24) {
                mid2 = "AM"
            }
            if (TwentyFourHour2 >= 1) {
                if (TwentyFourHour2 < 12) {
                    mid2 = "AM"
                }
            }
            if (TwentyFourHour2 > 11) {
                mid2 = "PM"
            }
            
            document.getElementById("hour3").innerHTML = hour2 + " " + mid2
    
            var hour3 = (hour+3)
            if (hour3 > 12) {
                hour3 = hour3 - 12
            }
            var TwentyFourHour3 = (TwentyFourHour + 3)
            var mid3 = mid 
            if (TwentyFourHour3 > 24) {
                TwentyFourHour3 = TwentyFourHour3 - 24
            }
            if (TwentyFourHour3 == 24) {
                mid3 = "AM"
            }
            if (TwentyFourHour3 >= 1) {
                if (TwentyFourHour3 < 12) {
                    mid3 = "AM"
                }
            }
            if (TwentyFourHour3 > 11) {
                mid3 = "PM"
            }
            
            document.getElementById("hour4").innerHTML = hour3 + " " + mid3
    
            var hour4 = (hour+4)
            if (hour4 > 12) {
                hour4 = hour4 - 12
            }
            var TwentyFourHour4 = (TwentyFourHour + 4)
            var mid4 = mid 
            if (TwentyFourHour4 > 24) {
                TwentyFourHour4 = TwentyFourHour4 - 24
            }
            if (TwentyFourHour4 == 24) {
                mid4 = "AM"
            }
            if (TwentyFourHour4 >= 1) {
                if (TwentyFourHour4 < 12) {
                    mid4 = "AM"
                }
            }
            if (TwentyFourHour4 > 11) {
                mid4 = "PM"
            }
            
            document.getElementById("hour5").innerHTML = hour4 + " " + mid4
    
            var hour5 = (hour+5)
            if (hour5 > 12) {
                hour5 = hour5 - 12
            }
            var TwentyFourHour5 = (TwentyFourHour + 5)
            var mid5 = mid 
            if (TwentyFourHour5 > 24) {
                TwentyFourHour5 = TwentyFourHour5 - 24
            }
            if (TwentyFourHour5 == 24) {
                mid5 = "AM"
            }
            if (TwentyFourHour5 >= 1) {
                if (TwentyFourHour5 < 12) {
                    mid5 = "AM"
                }
            }
            if (TwentyFourHour5 > 11) {
                mid5 = "PM"
            }
            
            document.getElementById("hour6").innerHTML = hour5 + " " + mid5
    
            var hour6 = (hour+6)
            if (hour6 > 12) {
                hour6 = hour6 - 12
            }	
            var TwentyFourHour6 = (TwentyFourHour + 6)
            var mid6 = mid 
            if (TwentyFourHour6 > 24) {
                TwentyFourHour6 = TwentyFourHour6 - 24
            }
            if (TwentyFourHour6 == 24) {
                mid6 = "AM"
            }
            if (TwentyFourHour6 >= 1) {
                if (TwentyFourHour6 < 12) {
                    mid6 = "AM"
                }
            }
            if (TwentyFourHour6 > 11) {
                mid6 = "PM"
            }
            
            document.getElementById("hour7").innerHTML = hour6 + " " + mid6
    
            var hour7 = (hour+7)
            if (hour7 > 12) {
                hour7 = hour7 - 12
            }	
            var TwentyFourHour7 = (TwentyFourHour + 7)
            var mid7 = mid 
            if (TwentyFourHour7 > 24) {
                TwentyFourHour7 = TwentyFourHour7 - 24
            }
            if (TwentyFourHour7 == 24) {
                mid7 = "AM"
            }
            if (TwentyFourHour7 >= 1) {
                if (TwentyFourHour7 < 12) {
                    mid7 = "AM"
                }
            }
            if (TwentyFourHour7 > 11) {
                mid7 = "PM"
            }
            
            document.getElementById("hour8").innerHTML = hour7 + " " + mid7
    

    var hour8 = (hour+8)
    if (hour8 > 12) {
        hour8 = hour8 - 12
    }	
    if (hour8 > 12) {
        hour8 = hour8 - 12
    }	
    var TwentyFourHour8 = (TwentyFourHour + 8)
    var mid8 = mid 
    if (TwentyFourHour8 > 24) {
        TwentyFourHour8 = TwentyFourHour8 - 24
    }
    if (TwentyFourHour8 == 24) {
        mid8 = "AM"
    }
    if (TwentyFourHour8 >= 1) {
        if (TwentyFourHour8 < 12) {
            mid8 = "AM"
        }
    }
    if (TwentyFourHour8 > 11) {
        mid8 = "PM"
    }
    
    document.getElementById("hour9").innerHTML = hour8 + " " + mid8

    var hour9 = (hour+9)
    if (hour9 > 12) {
        hour9 = hour9 - 12
    }	
    if (hour9 > 12) {
        hour9 = hour9 - 12
    }	
    var TwentyFourHour9 = (TwentyFourHour9 + 9)
    var mid9 = mid
    if (TwentyFourHour9 > 24) {
        TwentyFourHour9 = TwentyFourHour9 - 24
    }
    if (TwentyFourHour9 == 24) {
        mid9 = "AM"
    }
    if (TwentyFourHour9 >= 1) {
        if (TwentyFourHour9 < 12) {
            mid9 = "AM"
        }
    }
    if (TwentyFourHour9 > 11) {
        mid9 = "PM"
    }
    
    document.getElementById("hour10").innerHTML = hour9 + " " + mid9

    var hour10 = (hour+10)
    if (hour10 > 12) {
        hour10 = hour10 - 12
    }	
    if (hour10 > 12) {
        hour10 = hour10 - 12
    }	
    var TwentyFourHour10 = (TwentyFourHour + 10)
    var mid10 = mid 
    if (TwentyFourHour10 > 24) {
        TwentyFourHour10 = TwentyFourHour10 - 24
    }
    if (TwentyFourHour10 == 24) {
        mid10 = "AM"
    }
    if (TwentyFourHour10 >= 1) {
        if (TwentyFourHour10 < 12) {
            mid10 = "AM"
        }
    }
    if (TwentyFourHour10 > 11) {
        mid10 = "PM"
    }

    document.getElementById("hour11").innerHTML = hour10 + " " + mid10

    var hour11 = (hour+11)
    if (hour11 > 12) {
        hour11 = hour11 - 12
    }	
    if (hour11 > 12) {
        hour11 = hour11 - 12
    }	
    var TwentyFourHour11 = (TwentyFourHour + 11)
    var mid11 = mid 

    if (TwentyFourHour11 > 24) {
        TwentyFourHour11 = TwentyFourHour11 - 24
    }
    if (TwentyFourHour11 == 24) {
        mid11 = "AM"
    }
    if (TwentyFourHour11 >= 1) {
        if (TwentyFourHour11 < 12) {
            mid11 = "AM"
        }
    }
    if (TwentyFourHour11 > 11) {
        mid11 = "PM"
    }
    


    document.getElementById("hour12").innerHTML = hour11 + " " + mid11

    var hour12 = (hour+12)
    if (hour12 > 12) {
        hour12 = hour12 - 12
    }	
    if (hour12 > 12) {
        hour12 = hour12 - 12
    }	
    var TwentyFourHour12 = (TwentyFourHour + 12)
    var mid12 = mid 
    if (TwentyFourHour12 > 24) {
        TwentyFourHour12 = TwentyFourHour12 - 24
    }
    if (TwentyFourHour12 == 24) {
        mid12 = "AM"
    }
    if (TwentyFourHour12 >= 1) {
        if (TwentyFourHour12 < 12) {
            mid12 = "AM"
        }
    }
    if (TwentyFourHour12 > 11) {
        mid12 = "PM"
    }
    
    document.getElementById("hour13").innerHTML = hour12 + " " + mid12

    var hour13 = (hour+13)
    if (hour13 > 12) {
        hour13 = hour13 - 12
    }	
    if (hour13 > 12) {
        hour13 = hour13 - 12
    }	
    var TwentyFourHour13 = (TwentyFourHour + 13)
    var mid13 = mid 
    if (TwentyFourHour13 > 24) {
        TwentyFourHour13 = TwentyFourHour13 - 24
    }
    if (TwentyFourHour13 == 24) {
        mid13 = "AM"
    }
    if (TwentyFourHour13 >= 1) {
        if (TwentyFourHour13 < 12) {
            mid13 = "AM"
        }
    }
    if (TwentyFourHour13 > 11) {
        mid13 = "PM"
    }
    
    document.getElementById("hour14").innerHTML = hour13 + " " + mid13

    var hour14 = (hour+14)

    if (hour14 > 12) {
        hour14 = hour14 - 12
    } 
    if (hour14 > 12) {
        hour14 = hour14 - 12
    }		

    var TwentyFourHour14 = (TwentyFourHour + 14)
    var mid14 = mid 


    if (TwentyFourHour14 > 24) {
        TwentyFourHour14 = TwentyFourHour14 - 24
    }

    if (TwentyFourHour14 == 24) {
        mid14 = "AM"
    }
    if (TwentyFourHour14 >= 1) {
        if (TwentyFourHour14 < 12) {
            mid14 = "AM"
        }
    }
    if (TwentyFourHour14 > 11) {
        mid14 = "PM"
    }
    
    document.getElementById("hour15").innerHTML = hour14 + " " + mid14


    var hour15 = (hour+15)
    if (hour15 > 12) {
        hour15 = hour15 - 12
    }	
    if (hour15 > 12) {
        hour15 = hour15 - 12
    }
    var TwentyFourHour15 = (TwentyFourHour + 15)
    var mid15 = mid 
    if (TwentyFourHour15 > 24) {
        TwentyFourHour15 = TwentyFourHour15 - 24
    }
    if (TwentyFourHour15 == 24) {
        mid15 = "AM"
    }
    if (TwentyFourHour15 >= 1) {
        if (TwentyFourHour15 < 12) {
            mid15 = "AM"
        }
    }
    if (TwentyFourHour15 > 11) {
        mid15 = "PM"
    }
    
    //document.getElementById("hour16").innerHTML = hour15 + " " + mid15

}
TimeHourly();

function getCurrentWeather () {



//----------------------------------------------------------------------

    //ALWAYS 4 DAYS IN THE FUTURE TIME:

    var f = new Date();
	var u = f.getMonth()+1;
    var c = f.getDate()+4;
    var cForDaily = f.getDate()+10;

	if (c > 31) {
		if (u=="01") {
			console.log("ALERT OVERFLOWING FROM JANUARY TO FEBRUARY");
            c = (c - 31);
            cForDaily = (cForDaily - 31);
		}
	}

	// LEAP YEAR WUT BELOW
	if (c > 28) {
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
            cForDaily = (cForDaily - 31);
			u = (u+1);
		}
	} 
	if (c > 30) {
		if (u=="04") {
			console.log("ALERT OVERFLOWING FROM APRIL TO MAY");
            c = (c - 30);
            cForDaily = (cForDaily - 30);
			u = (u+1);
		}
	} 
	if (c > 31) {
		if (u=="05") {
			console.log("ALERT OVERFLOWING FROM MAY TO JUNE");
            c = (c - 31);
            cForDaily = (cForDaily - 31);
			u = (u+1);
		}
	} 
	if (c > 30) {
		if (u=="06") {
			console.log("ALERT OVERFLOWING FROM JUNE TO JULY");
            c = (c - 30);
            cForDaily = (cForDaily - 30);
			u = (u+1);
		}
	} 
	if (c > 31) {
		if (u=="07") {
			console.log("ALERT OVERFLOWING FROM JULY TO AUGUST");
            c = (c - 31);
            cForDaily = (cForDaily - 31);
			u = (u+1);
		}
	} 
	if (c > 31) {
		if (u=="08") {
			console.log("ALERT OVERFLOWING FROM AUGUST TO SEPTEMBER");
            c = (c - 31);
            cForDaily = (cForDaily - 31);
			u = (u+1);
		}
	} 
	if (c > 30) {
		if (u=="09") {
			console.log("ALERT OVERFLOWING FROM SEPTEMBER TO OCTOBER");
            c = (c - 30);
            cForDaily = (cForDaily - 30);
			u = (u+1);
		}
	} 
	if (c > 31) {
		if (u=="10") {
			console.log("ALERT OVERFLOWING FROM OCTOBER TO NOVEMBER");
            c = (c - 31);
            cForDaily = (cForDaily - 31);
			u = (u+1);
		}
	} 
	if (c > 30) {
		if (u=="11") {
			console.log("ALERT OVERFLOWING FROM NOVEMBER TO DECEMBER");
            c = (c - 30);
            cForDaily = (cForDaily - 30);
			u = (u+1);
		}
	} 
	if (c > 31) {
		if (u=="12") {
			console.log("ALERT OVERFLOWING FROM DECEMBER TO JANUARY");
            c = (c - 31);
            cForDaily = (cForDaily - 31);
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
    var next10days = gigger + "-" + u + "-"+ cForDaily  
    
    document.getElementById("date").innerHTML = rigger + " " + figger + ", " + gigger
    //console.log(next10days)

    //fetch('https://api.climacell.co/v3/weather/realtime?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&unit_system='+localStorage.getItem("units")+'&fields=temp%2Chumidity%2Cwind_speed%2Cbaro_pressure%2Cweather_code%2Csunrise%2Csunset&apikey=gjkSy3KHmWy7xWUrToVJA24shlhC5w5z')
    //.then(response => response.json())
    //.then(data => (console.log(data)))

    localStorage.setItem("lat", 45.086650)
    localStorage.setItem("lon", -93.118200)
    localStorage.setItem("units", "us")
    
    //fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&units=imperial&appid=024402f357b3f2165dff5e013cebfd7b')
	//.then(response => response.json())
    //.then(data => (console.log(data)))

    //fetch('https://api.climacell.co/v3/weather/forecast/hourly?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&location_id=shoreview&unit_system='+localStorage.getItem("units")+'&start_time=now&end_time='+next4days+'T14%3A09%3A50Z&fields=precipitation%2Ctemp%2Chumidity%2Cwind_speed%2Cweather_code%2Cbaro_pressure%2Cfeels_like%2Cprecipitation_probability&apikey=gjkSy3KHmWy7xWUrToVJA24shlhC5w5z')
	//.then(response => response.json())
    //.then(data => (console.log(data)))

    /*fetch('https://api.weather.gov/gridpoints/MPX/116,72/forecast')
	.then(response => response.json())
    .then(data => (console.log(data)))*/

    fetch('https://api.weather.gov/gridpoints/MPX/116,72/forecast')
	.then(response => response.json())
    .then(data => {

        localStorage.setItem("currentTextDesc", data['properties']['periods'][0]['detailedForecast'])

    })

//----------------------------------------------------------------------



 //REALTIME
 fetch('https://api.climacell.co/v3/weather/realtime?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&unit_system='+localStorage.getItem("units")+'&fields=feels_like%2Ctemp%2Chumidity%2Cwind_speed%2Cbaro_pressure%2Cweather_code%2Csunrise%2Csunset&apikey='+localStorage.getItem("apiKey"))
 .then(response => response.json())
 .then(data => {

     var currenttemp = Math.floor(data['temp']['value'])
     localStorage.setItem("currenticonstart", (data['weather_code']["value"]))
     var currenthumidity = Math.floor(data["humidity"]["value"])
     var currentwindspeed = Math.floor(data["wind_speed"]["value"])
     var currentairp =  data["baro_pressure"]["value"]
     var currentairpFinal = currentairp.toFixed(2)
     var feelsLike = data['feels_like']['value']

     iconDesc();

     if (cForDaily > 31) {
		if (u=="01") {
			console.log("ALERT OVERFLOWING FROM JANUARY TO FEBRUARY");
            cForDaily = (cForDaily - 31);
		}
	}

	// cForDaily
	if (cForDaily > 28) {
		if (u=="02") {
			console.log("ALERT OVERFLOWING FROM FEBRUARY TO MARCH");
			cForDaily = (cForDaily - 28);
			u = (u+1);
		}
	} 
	if (cForDaily > 31) {
		if (u=="03") {
			console.log("ALERT OVERFLOWING FROM MARCH TO APRIL");
            cForDaily = (cForDaily - 31);
			u = (u+1);
		}
	} 
	if (cForDaily > 30) {
		if (u=="04") {
			console.log("ALERT OVERFLOWING FROM APRIL TO MAY");
            cForDaily = (cForDaily - 30);
			u = (u+1);
		}
	} 
	if (cForDaily > 31) {
		if (u=="05") {
			console.log("ALERT OVERFLOWING FROM MAY TO JUNE");
            cForDaily = (cForDaily - 31);
			u = (u+1);
		}
	} 
	if (cForDaily > 30) {
		if (u=="06") {
			console.log("ALERT OVERFLOWING FROM JUNE TO JULY");
            cForDaily = (cForDaily - 30);
			u = (u+1);
		}
	} 
	if (cForDaily > 31) {
		if (u=="07") {
			console.log("ALERT OVERFLOWING FROM JULY TO AUGUST");
            cForDaily = (cForDaily - 31);
			u = (u+1);
		}
	} 
	if (cForDaily > 31) {
		if (u=="08") {
			console.log("ALERT OVERFLOWING FROM AUGUST TO SEPTEMBER");
            cForDaily = (cForDaily - 31);
			u = (u+1);
		}
	} 
	if (cForDaily > 30) {
		if (u=="09") {
			console.log("ALERT OVERFLOWING FROM SEPTEMBER TO OCTOBER");
            cForDaily = (cForDaily - 30);
			u = (u+1);
		}
	} 
	if (cForDaily > 31) {
		if (u=="10") {
			console.log("ALERT OVERFLOWING FROM OCTOBER TO NOVEMBER");
            cForDaily = (cForDaily - 31);
			u = (u+1);
		}
	} 
	if (cForDaily > 30) {
		if (u=="11") {
			console.log("ALERT OVERFLOWING FROM NOVEMBER TO DECEMBER");
            cForDaily = (cForDaily - 30);
			u = (u+1);
		}
	} 
	if (cForDaily > 31) {
		if (u=="12") {
			console.log("ALERT OVERFLOWING FROM DECEMBER TO JANUARY");
            cForDaily = (cForDaily - 31);
			u = (01);
		}
    }
    if (cForDaily < 10) {
		cForDaily = "0" + cForDaily;
	}
    localStorage.setItem("next10days", gigger + "-" + u + "-"+ cForDaily )
    //console.log(localStorage.getItem("next10days"))

    


//HOURLY WEATHER
    fetch('https://api.climacell.co/v3/weather/forecast/hourly?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&location_id=shoreview&unit_system='+localStorage.getItem("units")+'&start_time=now&end_time='+next4days+'T14%3A09%3A50Z&fields=precipitation%2Ctemp%2Chumidity%2Cwind_speed%2Cweather_code%2Cbaro_pressure%2Cfeels_like%2Cprecipitation_probability&apikey='+localStorage.getItem("apiKey"))
	.then(response => response.json())
	.then(data => {

        var now = new Date();
    	var TwentyFourHour = now.getHours();
    	var hour = now.getHours();

    	var mid = 'PM';
  
    	if (hour > 12) {
      	hour = hour - 12;
    	}    
    	if(hour==0){ 
      	hour=12;
    	}
    	if(TwentyFourHour < 12) {
       	mid = 'AM';
		}
		if((TwentyFourHour == 24)) {
		mid = 'AM'
		}

        var currentrainchance = data[0]["precipitation_probability"]["value"];
        var temphour1 = Math.floor(data[0]['temp']['value']);
        var temphour2 = Math.floor(data[1]['temp']['value']);
        var temphour3 = Math.floor(data[2]['temp']['value']);
        var temphour4 = Math.floor(data[3]['temp']['value']);
        var temphour5 = Math.floor(data[4]['temp']['value']);
        var temphour6 = Math.floor(data[5]['temp']['value']);
        var temphour7 = Math.floor(data[6]['temp']['value']);
        var temphour8 = Math.floor(data[7]['temp']['value']);

        var temphour9 = Math.floor(data[8]['temp']['value']);
        var temphour10 = Math.floor(data[9]['temp']['value']);
        var temphour11 = Math.floor(data[10]['temp']['value']);
        var temphour12 = Math.floor(data[11]['temp']['value']);
        var temphour13 = Math.floor(data[12]['temp']['value']);
        var temphour14 = Math.floor(data[13]['temp']['value']);
        var temphour15 = Math.floor(data[14]['temp']['value']);
        var temphour16 = Math.floor(data[15]['temp']['value']);

        var weatherCode1 = data[0]['weather_code']['value']
        var weatherCode2 = data[1]['weather_code']['value']
        var weatherCode3 = data[2]['weather_code']['value']
        var weatherCode4 = data[3]['weather_code']['value']
        var weatherCode5 = data[4]['weather_code']['value']
        var weatherCode6 = data[5]['weather_code']['value']
        var weatherCode7 = data[6]['weather_code']['value']
        var weatherCode8 = data[7]['weather_code']['value']

        icon1 = iconSelect(weatherCode1)
        icon2 = iconSelect(weatherCode2)
        icon3 = iconSelect(weatherCode3)
        icon4 = iconSelect(weatherCode4)
        icon5 = iconSelect(weatherCode5)
        icon6 = iconSelect(weatherCode6)
        icon7 = iconSelect(weatherCode7)
        icon8 = iconSelect(weatherCode8)

        var weatherCode9 = data[8]['weather_code']['value']
        var weatherCode10 = data[9]['weather_code']['value']
        var weatherCode11 = data[10]['weather_code']['value']
        var weatherCode12 = data[11]['weather_code']['value']
        var weatherCode13 = data[12]['weather_code']['value']
        var weatherCode14 = data[13]['weather_code']['value']
        var weatherCode15 = data[14]['weather_code']['value']
        var weatherCode16 = data[15]['weather_code']['value']

        icon9 = iconSelect(weatherCode9)
        icon10 = iconSelect(weatherCode10)
        icon11 = iconSelect(weatherCode11)
        icon12 = iconSelect(weatherCode12)
        icon13 = iconSelect(weatherCode13)
        icon14 = iconSelect(weatherCode14)
        icon15 = iconSelect(weatherCode15)
        icon16 = iconSelect(weatherCode16)

        localStorage.setItem("icon9", icon9)
        localStorage.setItem("icon10", icon10)
        localStorage.setItem("icon11", icon11)
        localStorage.setItem("icon12", icon12)
        localStorage.setItem("icon13", icon13)
        localStorage.setItem("icon14", icon14)
        localStorage.setItem("icon15", icon15)
        localStorage.setItem("icon16", icon16)

        ///ISAAC LOOK HERe!!! Wanna know where YOU LEFT OFF EH? Make a grid for the left bottom square, then place inital
        //text so you can see the houly data. GLFH!!! LMAO

        //Temp

        function setTempHourDefault () {

            document.getElementById("temphour1").innerHTML = temphour1 + "°"
            document.getElementById("temphour2").innerHTML = temphour2 + "°"
            document.getElementById("temphour3").innerHTML = temphour3 + "°"
            document.getElementById("temphour4").innerHTML = temphour4 + "°"
            document.getElementById("temphour5").innerHTML = temphour5 + "°"
            document.getElementById("temphour6").innerHTML = temphour6 + "°"
            document.getElementById("temphour7").innerHTML = temphour7 + "°"
            document.getElementById("temphour8").innerHTML = temphour8 + "°"

            setTimeout(setTempHourDefault, 100)
        }
        setTempHourDefault();

        localStorage.setItem("temphour9", temphour9 + "°")  
        localStorage.setItem("temphour10", temphour10 + "°")
        localStorage.setItem("temphour11", temphour11 + "°")
        localStorage.setItem("temphour12", temphour12 + "°")
        localStorage.setItem("temphour13", temphour13 + "°")
        localStorage.setItem("temphour14", temphour14 + "°")
        localStorage.setItem("temphour15", temphour15 + "°")
        localStorage.setItem("temphour16", temphour16 + "°")

        //Icons

        function setIconHourDefault () {

            document.getElementById("wiconhour1").src = icon1
            document.getElementById("wiconhour2").src = icon2
            document.getElementById("wiconhour3").src = icon3
            document.getElementById("wiconhour4").src = icon4
            document.getElementById("wiconhour5").src = icon5
            document.getElementById("wiconhour6").src = icon6
            document.getElementById("wiconhour7").src = icon7
            document.getElementById("wiconhour8").src = icon8

            setTimeout(setIconHourDefault, 100)
        }
        setIconHourDefault();


        document.getElementById("temphour9").innerHTML = localStorage.getItem("temphour9")
        document.getElementById("temphour10").innerHTML = localStorage.getItem("temphour10")
        document.getElementById("temphour11").innerHTML = localStorage.getItem("temphour11")
        document.getElementById("temphour12").innerHTML = localStorage.getItem("temphour12")
        document.getElementById("temphour13").innerHTML = localStorage.getItem("temphour13")
        document.getElementById("temphour14").innerHTML = localStorage.getItem("temphour14")
        document.getElementById("temphour15").innerHTML = localStorage.getItem("temphour15")
        //document.getElementById("temphour16").innerHTML = localStorage.getItem("temphour16")

        document.getElementById("wiconhour9").src = localStorage.getItem("icon9")
        document.getElementById("wiconhour10").src = localStorage.getItem("icon10")
        document.getElementById("wiconhour11").src = localStorage.getItem("icon11")
        document.getElementById("wiconhour12").src = localStorage.getItem("icon12")
        document.getElementById("wiconhour13").src = localStorage.getItem("icon13")
        document.getElementById("wiconhour14").src = localStorage.getItem("icon14")
        document.getElementById("wiconhour15").src = localStorage.getItem("icon15")
        //document.getElementById("wiconhour16").src = localStorage.getItem("icon16")

        //--------------------------------


        document.getElementById("stat2").innerHTML = currentrainchance + " %";
    })    


    //fetch('https://api.climacell.co/v3/weather/forecast/daily?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&unit_system=us&start_time=now&end_time='+next10days+'T14%3A00%3A00Z&fields=temp%2Cweather_code&apikey=oATA14jpsO1MdhKOjKCscL6Aym7N6QAn')
	//.then(response => response.json())
    //.then(data => (console.log(data)))
    

    //console.log(localStorage.getItem("next10days"))
//DAILY (for temp high/low)
    fetch('https://api.climacell.co/v3/weather/forecast/daily?lat='+localStorage.getItem("lat")+'&lon='+localStorage.getItem("lon")+'&unit_system=us&start_time=now&end_time='+localStorage.getItem("next10days")+'T14%3A00%3A00Z&fields=temp%2Cweather_code&apikey='+localStorage.getItem("apiKey"))
	.then(response => response.json())
	.then(data => {
        var templow = Math.floor(data[0]["temp"][0]['min']["value"])
        var temphigh = Math.floor(data[0]["temp"][1]['max']["value"])

        document.getElementById("temphighlow").innerHTML = temphigh + "° / " + templow + "°";

        //Daily Weather Box ----------------------------------------------------
        //----------------------------------------------------------------------
        //----------------------------------------------------------------------

        var dailyTempMin1 = Math.floor(data[0]["temp"][0]['min']["value"])
        var dailyTempMin2 = Math.floor(data[1]["temp"][0]['min']["value"])
        var dailyTempMin3 = Math.floor(data[2]["temp"][0]['min']["value"])
        var dailyTempMin4 = Math.floor(data[3]["temp"][0]['min']["value"])
        var dailyTempMin5 = Math.floor(data[4]["temp"][0]['min']["value"])
        var dailyTempMin6 = Math.floor(data[5]["temp"][0]['min']["value"])
        var dailyTempMin7 = Math.floor(data[6]["temp"][0]['min']["value"])

        var dailyTempMax1 = Math.floor(data[0]["temp"][1]['max']["value"])
        var dailyTempMax2 = Math.floor(data[1]["temp"][1]['max']["value"])
        var dailyTempMax3 = Math.floor(data[2]["temp"][1]['max']["value"])
        var dailyTempMax4 = Math.floor(data[3]["temp"][1]['max']["value"])
        var dailyTempMax5 = Math.floor(data[4]["temp"][1]['max']["value"])
        var dailyTempMax6 = Math.floor(data[5]["temp"][1]['max']["value"])
        var dailyTempMax7 = Math.floor(data[6]["temp"][1]['max']["value"])

        document.getElementById("tempDaily1").innerHTML = dailyTempMax1 + "° / " + dailyTempMin1 + "°";
        document.getElementById("tempDaily2").innerHTML = dailyTempMax2 + "° / " + dailyTempMin2 + "°";
        document.getElementById("tempDaily3").innerHTML = dailyTempMax3 + "° / " + dailyTempMin3 + "°";
        document.getElementById("tempDaily4").innerHTML = dailyTempMax4 + "° / " + dailyTempMin4 + "°";
        document.getElementById("tempDaily5").innerHTML = dailyTempMax5 + "° / " + dailyTempMin5 + "°";
        document.getElementById("tempDaily6").innerHTML = dailyTempMax6 + "° / " + dailyTempMin6 + "°";
        document.getElementById("tempDaily7").innerHTML = dailyTempMax7 + "° / " + dailyTempMin7 + "°";

        var dailyIcon1 = iconSelect(data[0]['weather_code']['value']);
        var dailyIcon2 = iconSelect(data[1]['weather_code']['value']);
        var dailyIcon3 = iconSelect(data[2]['weather_code']['value']);
        var dailyIcon4 = iconSelect(data[3]['weather_code']['value']);
        var dailyIcon5 = iconSelect(data[4]['weather_code']['value']);
        var dailyIcon6 = iconSelect(data[5]['weather_code']['value']);
        var dailyIcon7 = iconSelect(data[6]['weather_code']['value']);

        document.getElementById("iconDaily1").src = dailyIcon1
        document.getElementById("iconDaily2").src = dailyIcon2
        document.getElementById("iconDaily3").src = dailyIcon3
        document.getElementById("iconDaily4").src = dailyIcon4
        document.getElementById("iconDaily5").src = dailyIcon5
        document.getElementById("iconDaily6").src = dailyIcon6
        document.getElementById("iconDaily7").src = dailyIcon7




    }) 



//----------------------------------------------------------------------

//----------------------------------------------------------------------


     
     document.getElementById("wicon").src = currenticonend;

     document.getElementById("temp").innerHTML = currenttemp + "° " + data["temp"]["units"];
     document.getElementById("stat1").innerHTML = currenthumidity + " " + data["humidity"]["units"];
     document.getElementById("stat3").innerHTML = currentwindspeed + " " + data["wind_speed"]["units"];
     document.getElementById("stat4").innerHTML = Math.floor(feelsLike)  + "°" + " " + data["temp"]["units"]

     document.getElementById("stat4icon").src = document.getElementById("wicon").src

 });
} 


function weekdays() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "SUN";
    weekday[1] = "MON";
    weekday[2] = "TUES";
    weekday[3] = "WED";
    weekday[4] = "THU";
    weekday[5] = "FRI";
    weekday[6] = "SAT";
    weekday[7] = "SUN";
    weekday[8] = "MON";
    weekday[9] = "TUES";
    weekday[10] = "WED";
    weekday[11] = "THU";
    weekday[12] = "FRI";
    weekday[13] = "SAT";
    weekday[14] = "SUN";
    weekday[15] = "MON";
    weekday[16] = "TUES";
    weekday[17] = "WED";
    weekday[18] = "THU";
    weekday[19] = "FRI";
    weekday[20] = "SAT";
    weekday[21] = "SUN";
    weekday[22] = "MON";

  
    var numberday = weekday[d.getDay()];
    document.getElementById("dateDaily1").innerHTML = numberday;
  
    var twose = weekday[d.getDay()+1];
    document.getElementById("dateDaily2").innerHTML = twose
  
    var threese = weekday[d.getDay()+2];
    document.getElementById("dateDaily3").innerHTML = threese
  
    var fourse = weekday[d.getDay()+3];
    document.getElementById("dateDaily4").innerHTML = fourse

    var fivese = weekday[d.getDay()+4];
    document.getElementById("dateDaily5").innerHTML = fivese
  
    var sixse = weekday[d.getDay()+5];
    document.getElementById("dateDaily6").innerHTML = sixse
  
    var sevense = weekday[d.getDay()+6];
    document.getElementById("dateDaily7").innerHTML = sevense

    //var eightse = weekday[d.getDay()+1];
    //document.getElementById("dateDaily8").innerHTML = eightse
  
    //var ninese = weekday[d.getDay()+2];
    //document.getElementById("dateDaily9").innerHTML = ninese
  
    //var tense = weekday[d.getDay()+3];
    //document.getElementById("dateDaily10").innerHTML = tense
  }
  weekdays();


  /*
  document.body.onscroll = function () {
    var mobileTop = document.body.scrollTop

    console.log(mobileTop)
  };
*/

  function safari () {

    if (localStorage.getItem("belowMediaMobile") == "yes") {
        // Get the user-agent string 
        let userAgentString =  
        navigator.userAgent; 

        // Detect Chrome 
        let chromeAgent =  
        userAgentString.indexOf("Chrome") > -1;
        
        // Detect Safari 
        let safariAgent = userAgentString.indexOf("Safari") > -1; 

        // Discard Safari since it also matches Chrome 
        if ((chromeAgent) && (safariAgent)) safariAgent = false; 

        var browserSafari = safariAgent; 

        //console.log(browserSafari)

        if (browserSafari == true) {
            document.getElementById("biggrid").style.top = "60%"
            //console.log('safari')
        } else {
            //alert("sdjsdk")
            document.getElementById("biggrid").style.top = "60%"
            //console.log('notSafari')
        }
    } else {

    }
  }

  safari();

