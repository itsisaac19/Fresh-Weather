
localStorage.removeItem("whichHardPress")
localStorage.removeItem("animateFocus")

document.getElementById('flowers').addEventListener("click", function(){
    //console.log(localStorage.getItem("whichHardPress"))
})

//When each of the squares is clicked:

document.getElementById('leftopbodygrid').addEventListener("click", function(){

    if (localStorage.getItem("belowMediaMobile") == "yes") {
        //This switch case prevents users from clicking another square WHILE focused in on another square
        switch(localStorage.getItem("whichHardPress")) {
            default :
                //If default do nothing
            break;
            case null :
                localStorage.setItem("whichHardPress", "leftopbodygrid")
                localStorage.setItem("pressing", "yes")

                //alert("null")
                hardPress();
            break;
        }
    } else {
        //console.log("you have clicked while in desktop mode.")
    }
})
document.getElementById('leftopbodygrid').addEventListener("mouseenter", function(){
    if (localStorage.getItem("belowMediaMobile") == "yes") {
        return;
    } else {
        //expandCurrentWeatherSquare()
    }
})
document.getElementById('leftopbodygrid').addEventListener("mouseleave", function(){
    if (localStorage.getItem("belowMediaMobile") == "yes") {
        return;
    } else {
        //closeCurrentWeatherSquare()
    }
})



document.getElementById('leftbottombodygrid').addEventListener("click", function(){

    if (localStorage.getItem("belowMediaMobile") == "yes") {
        //This switch case prevents users from clicking another square WHILE focused in on another square
        switch(localStorage.getItem("whichHardPress")) {
            default :
                
            break;
            case null :
                localStorage.setItem("whichHardPress", "leftbottombodygrid")
                localStorage.setItem("pressing", "yes")

                //alert("wdwd")
                hardPress();
            break;
        }
    } else {

    }
})



document.getElementById('rightbodygrid').addEventListener("click", function(){

    if (localStorage.getItem("belowMediaMobile") == "yes") {
        //This switch case prevents users from clicking another square WHILE focused in on another square
        switch(localStorage.getItem("whichHardPress")) {
            default :
                
            break;
            case null :
                localStorage.setItem("whichHardPress", "rightbodygrid")
                localStorage.setItem("pressing", "yes")

                //alert("wdwd")
                hardPress();
            break;
        }
    } else {

    }
})

function dailyHover() {
    if (localStorage.getItem("belowMediaMobile") == "yes") {
        return;
    }
    document.getElementById("dailyBox").classList.remove("closeBox")
    document.getElementById("dailyBox").classList.add("expandBox")

    document.getElementById("dailyGrid").classList.add("expandrows")
    document.getElementById("dailyGrid").classList.remove("closedrows")

    assignShowHourlyGrids();
}
function dailyHover2() {
    if (localStorage.getItem("belowMediaMobile") == "yes") {
        return;
    }
    document.getElementById("dailyBox").classList.remove("expandBox")
    document.getElementById("dailyBox").classList.add("closeBox")

    document.getElementById("dailyGrid").classList.remove("expandrows")
    document.getElementById("dailyGrid").classList.add("closedrows")

    assignHideHourlyGrids();
}


//If the escape key is pressed while currentFocus is yes, it will unfocus the square
document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
        if(localStorage.getItem("currentFocus") == "yes") {
            //alert("djshd")
            hardPress();
        }
    }
})

//If the area around the square is clicked while currentFocus is yes, it will unfocus the square
document.addEventListener("click", function() {
    setTimeout(function() {

        //console.log(localStorage.getItem("currentFocus"))
        if(localStorage.getItem("currentFocus") == "yes") {
            if(localStorage.getItem("pressing") == "yes") {
                return;
            } else {
                //alert("djshd")
                document.getElementById('clocksquare').classList.add('freeOffdetect')
                hardPress();
                localStorage.setItem("currentFocus", "no")
            }
        }
    }, 30);    


})


//If the squares are not detected, the focus is set to no
if (document.getElementById('clocksquare').classList.value == "freeOffdetect") {

    localStorage.setItem("currentFocus", "no")

    //console.log(localStorage.getItem("currentFocus"))

} 


//Universal Function for all squares
function hardPress () {

    //If layout mode is active, cancel the function
    if (localStorage.getItem("layoutMode") ==  "yes") {
        //alert("uhoh");
        return;
    }


    //document vars
    var s = document.getElementById('flowers')

    var dB = document.getElementById('dailyBox');
    var rBG = document.getElementById('rightbodygrid');
    var cS = document.getElementById('clocksquare');
    var cC = document.getElementById('climacell');
    var lBBG = document.getElementById('leftbottombodygrid');
    var lTBG = document.getElementById('leftopbodygrid');

    setTimeout(function() {

        //Identify the square that was pressed
        switch(localStorage.getItem("whichHardPress")) {

            //If the leftopbodygrid square was pressed:
            case "leftopbodygrid":
                if (document.getElementById('clocksquare').classList.value == "freeOffdetect") {

                    s.classList.add('freeUniversalBlurOn')
                
                    dB.classList.add('freeUniversalBlurOn')
                    rBG.classList.add('freeUniversalBlurOn')
                    cS.classList.add('freeUniversalBlurOn')
                    cC.classList.add('freeUniversalBlurOn')
                    lBBG.classList.add('freeUniversalBlurOn')
            
                    dB.classList.remove('freeOffdetect')
                    rBG.classList.remove('freeOffdetect')
                    cS.classList.remove('freeOffdetect')
                    cC.classList.remove('freeOffdetect')
                    lBBG.classList.remove('freeOffdetect')
            
                    localStorage.setItem("currentFocus", "yes")
                    localStorage.setItem("animateFocus", "yes")

                    document.getElementById('leftopbodygrid').classList.add("bounceFocus")

                    if (localStorage.getItem("belowMediaMobile") == "no") {
                        setTimeout(function() {
                            expandCurrentWeatherSquare ()
                        }, 200);
                    } else {
                        expandCurrentWeatherSquare ()
                    }

                    setTimeout(function() {
                        document.getElementById('leftopbodygrid').style.transform = "translateY(-8px)"
                        localStorage.setItem("animateFocus", "no")
                        //console.log("NOW")
                    }, 900);
                    

                    //console.log(localStorage.getItem("currentFocus"))
            
                } else {
            
                    switch (localStorage.getItem("animateFocus")) {
                        case "yes":
                            //alert("you have clicked while this animation is active.")
                            return;
                        break;
                        case "no":
                            //alert("you have clicked while this animation is  NOT active.")
                            cS.classList.add('freeOffdetect')
                            s.classList.remove('freeUniversalBlurOn')
                        
                            dB.classList.remove('freeUniversalBlurOn')
                            lBBG.classList.remove('freeUniversalBlurOn')
                            cS.classList.remove('freeUniversalBlurOn')
                            cC.classList.remove('freeUniversalBlurOn')
                            rBG.classList.remove('freeUniversalBlurOn')
        
                            document.getElementById('leftopbodygrid').classList.remove("bounceFocus")
                            document.getElementById('leftopbodygrid').style.transform = null
    
                            localStorage.removeItem("whichHardPress")

                            closeCurrentWeatherSquare ()
                        break
                        case null :
                            cS.classList.add('freeOffdetect')
                            s.classList.remove('freeUniversalBlurOn')
                        
                            dB.classList.remove('freeUniversalBlurOn')
                            lBBG.classList.remove('freeUniversalBlurOn')
                            cS.classList.remove('freeUniversalBlurOn')
                            cC.classList.remove('freeUniversalBlurOn')
                            rBG.classList.remove('freeUniversalBlurOn')
        
                            document.getElementById('leftopbodygrid').classList.remove("bounceFocus")
                            document.getElementById('leftopbodygrid').style.transform = null
    
                            localStorage.removeItem("whichHardPress")

                            closeCurrentWeatherSquare ()
                        break
                    }
                }
                break;






                //if the leftbottombodygrid square was pressed:
                case "leftbottombodygrid":
                    if (document.getElementById('clocksquare').classList.value == "freeOffdetect") {
    
                        s.classList.add('freeUniversalBlurOn')
                    
                        dB.classList.add('freeUniversalBlurOn')
                        rBG.classList.add('freeUniversalBlurOn')
                        cS.classList.add('freeUniversalBlurOn')
                        cC.classList.add('freeUniversalBlurOn')
                        lTBG.classList.add('freeUniversalBlurOn')
                
                        dB.classList.remove('freeOffdetect')
                        rBG.classList.remove('freeOffdetect')
                        cS.classList.remove('freeOffdetect')
                        cC.classList.remove('freeOffdetect')
                        lTBG.classList.remove('freeOffdetect')
                
                        localStorage.setItem("currentFocus", "yes")
                        localStorage.setItem("animateFocus", "yes")
    
                        document.getElementById('leftbottombodygrid').classList.add("bounceFocus")
                        if (localStorage.getItem("belowMediaMobile") == "no") {
                            setTimeout(function() {
                                expandHourlyAdvanced();
                            }, 300);
                        } else {
                            expandHourlyAdvanced();
                        }

                        setTimeout(function() {
                            document.getElementById('leftbottombodygrid').style.transform = "translateY(-8px)"
                            localStorage.setItem("animateFocus", "no")
                            //console.log("NOW")

                        }, 900);
                        
    
                        //console.log(localStorage.getItem("currentFocus"))
                
                    } else {
                
                        switch (localStorage.getItem("animateFocus")) {
                            case "yes":
                                //alert("you have clicked while this animation is active.")
                                return;
                            break;
                            case "no":
                                //alert("you have clicked while this animation is  NOT active.")
                                cS.classList.add('freeOffdetect')
                                s.classList.remove('freeUniversalBlurOn')
                            
                                dB.classList.remove('freeUniversalBlurOn')
                                lTBG.classList.remove('freeUniversalBlurOn')
                                cS.classList.remove('freeUniversalBlurOn')
                                cC.classList.remove('freeUniversalBlurOn')
                                rBG.classList.remove('freeUniversalBlurOn')
            
                                document.getElementById('leftbottombodygrid').classList.remove("bounceFocus")
                                document.getElementById('leftbottombodygrid').style.transform = null

                                lBBG.classList.add("lBBGnormal");
                                lBBG.classList.remove("fullExpandlBBG");
        
                                localStorage.removeItem("whichHardPress")

                                closeHourlyAdvanced();
                            break
                            case null :
                                cS.classList.add('freeOffdetect')
                                s.classList.remove('freeUniversalBlurOn')
                            
                                dB.classList.remove('freeUniversalBlurOn')
                                lTBG.classList.remove('freeUniversalBlurOn')
                                cS.classList.remove('freeUniversalBlurOn')
                                cC.classList.remove('freeUniversalBlurOn')
                                rBG.classList.remove('freeUniversalBlurOn')
            
                                document.getElementById('leftbottombodygrid').classList.remove("bounceFocus")
                                document.getElementById('leftbottombodygrid').style.transform = null

                                lBBG.classList.add("lBBGnormal");
                                lBBG.classList.remove("fullExpandlBBG");
        
                                localStorage.removeItem("whichHardPress")

                                closeHourlyAdvanced();
                            break
                        }
                    }
                    break;








                //if the rightbodygrid square was pressed:
                case "rightbodygrid":
                    if (document.getElementById('clocksquare').classList.value == "freeOffdetect") {
    
                        s.classList.add('freeUniversalBlurOn')
                    
                        dB.classList.add('freeUniversalBlurOn')
                        lBBG.classList.add('freeUniversalBlurOn')
                        cS.classList.add('freeUniversalBlurOn')
                        cC.classList.add('freeUniversalBlurOn')
                        lTBG.classList.add('freeUniversalBlurOn')
                
                        dB.classList.remove('freeOffdetect')
                        lBBG.classList.remove('freeOffdetect')
                        cS.classList.remove('freeOffdetect')
                        cC.classList.remove('freeOffdetect')
                        lTBG.classList.remove('freeOffdetect')
                
                        localStorage.setItem("currentFocus", "yes")
                        localStorage.setItem("animateFocus", "yes")
    
                        document.getElementById('rightbodygrid').classList.add("bounceFocus")
    
                        setTimeout(function() {
                            document.getElementById('rightbodygrid').style.transform = "translateY(-8px)"
                            localStorage.setItem("animateFocus", "no")
                            //console.log("NOW")
                        }, 900);
                        
    
                        //console.log(localStorage.getItem("currentFocus"))
                
                    } else {
                        switch (localStorage.getItem("animateFocus")) {
                            case "yes":
                                //alert("you have clicked while this animation is active.")
                                return;
                            break;
                            case "no":
                                //alert("you have clicked while this animation is  NOT active.")
                                cS.classList.add('freeOffdetect')
                                s.classList.remove('freeUniversalBlurOn')
                            
                                dB.classList.remove('freeUniversalBlurOn')
                                lBBG.classList.remove('freeUniversalBlurOn')
                                cS.classList.remove('freeUniversalBlurOn')
                                cC.classList.remove('freeUniversalBlurOn')
                                lTBG.classList.remove('freeUniversalBlurOn')
            
                                document.getElementById('rightbodygrid').classList.remove("bounceFocus")
                                document.getElementById('rightbodygrid').style.transform = null
        
                                localStorage.removeItem("whichHardPress")
                            break
                            case null :
                                cS.classList.add('freeOffdetect')
                                s.classList.remove('freeUniversalBlurOn')
                            
                                dB.classList.remove('freeUniversalBlurOn')
                                lBBG.classList.remove('freeUniversalBlurOn')
                                cS.classList.remove('freeUniversalBlurOn')
                                cC.classList.remove('freeUniversalBlurOn')
                                lTBG.classList.remove('freeUniversalBlurOn')
            
                                document.getElementById('rightbodygrid').classList.remove("bounceFocus")
                                document.getElementById('rightbodygrid').style.transform = null
        
                                localStorage.removeItem("whichHardPress")
                            break
                        }
                

                    }
                    break;




        }
    }, 10);

    //Set the mode pressing to no
setTimeout(function() {
    localStorage.setItem("pressing", "no")
    //console.log("set to no")
}, 500);
}



function orderForever () {
    switch (localStorage.getItem("animateFocus")) {
        default :
        document.getElementById('leftopbodygrid').style.cursor = "not-allowed"
        document.getElementById('leftbottombodygrid').style.cursor = "not-allowed"
        document.getElementById('rightbodygrid').style.cursor = "not-allowed"
        break;
        case null :
            document.getElementById('leftopbodygrid').style.cursor = null
            document.getElementById('leftbottombodygrid').style.cursor = null
            document.getElementById('rightbodygrid').style.cursor = null
        break;
        case "yes" :
            document.getElementById('leftopbodygrid').style.cursor = "not-allowed"
            document.getElementById('leftbottombodygrid').style.cursor = "not-allowed"
            document.getElementById('rightbodygrid').style.cursor = "not-allowed"
        break;
        case "no" :
            document.getElementById('leftopbodygrid').style.cursor = null
            document.getElementById('leftbottombodygrid').style.cursor = null
            document.getElementById('rightbodygrid').style.cursor = null
        break;
    }

setTimeout(orderForever, 1);
}

orderForever()


//Dark Theme 


//console.log(localStorage.getItem("bgimage"))

var squareColor = document.getElementById("clocksquare").style.backgroundColor 
localStorage.setItem("squareColor", squareColor) 

var nonebg = document.getElementById("nonebg")
var darkThemeButton = document.getElementById("darkModern")
var rainbow = document.getElementById("rainbow")
var jungle = document.getElementById("tropical")
var defaultBg = document.getElementById("default")
var Monkey = document.getElementById("goldblue")

darkThemeButton.addEventListener("click", darkTheme) 

nonebg.addEventListener("click", function() {
    nonebg1();
    switch(localStorage.getItem("squareColor")) {
        default :

        break;
        case "" :

        break;
        case "black" :

            DarkThemeForOtherBg();

        break;
    }
}) 
rainbow.addEventListener("click", function() {
    switch(localStorage.getItem("squareColor")) {
        default :

        break;
        case "" :

        break;
        case "black" :

            DarkThemeForOtherBg();

        break;
    }
}) 
jungle.addEventListener("click", function() {
    switch(localStorage.getItem("squareColor")) {
        default :

        break;
        case "" :

        break;
        case "black" :

            DarkThemeForOtherBg();

        break;
    }
}) 
defaultBg.addEventListener("click", function() {
    switch(localStorage.getItem("squareColor")) {
        default :

        break;
        case "" :

        break;
        case "black" :

            DarkThemeForOtherBg();

        break;
    }
}) 
Monkey.addEventListener("click", function() {
    switch(localStorage.getItem("squareColor")) {
        default :

        break;
        case "" :

        break;
        case "black" :

            DarkThemeForOtherBg();

        break;
    }
}) 

function darkTheme () {

    return;

    var dB = document.getElementById('futureDays');
    var cD = document.getElementById('currentDay');
    var dS = document.getElementById('dotsquare');
    var lS = document.getElementById('logosquare');
    var mWL = document.getElementById("madeWithLove")
    var lTBG = document.getElementById("leftopbodygrid")
    var rBG = document.getElementById('rightbodygrid');
    var cS = document.getElementById('clocksquare');
    var cC = document.getElementById('climacell');
    var cUS = document.getElementById('customizesquare');
    var lBBG = document.getElementById('leftbottombodygrid');
    var cUSback = document.getElementById("backgroundcolor")
    var cUStheme = document.getElementById("theme")
    var cUSlayout = document.getElementById("layout")

    var clock = document.getElementById("clock")

    var notiBubble = document.getElementById("notibubble")


    
    
    switch(localStorage.getItem("squareColor")) {
        default :

        break;
        case "" :
            //alert("emptt")

            // Select all <div> elements on the page
            const divs = document.getElementsByTagName("div")
            const h1s = document.getElementsByTagName("h1")
            const ps = document.getElementsByTagName("p")

            // Apply CSS styles to the selected <div> elements
            for (div of divs) {
                div.style.color = "white"
            }
            for (h1 of h1s) {
                h1.style.color = "rgb(88 88 88)"
            }
            for (p of ps) {
                p.style.color = "rgb(255 255 255)"
            }


          

            dB.style.backgroundColor = "rgb(152 152 152)"
            cD.style.backgroundColor = "rgb(121 121 121)"
            dS.style.backgroundColor = "rgb(64, 64, 64)"
            lS.style.backgroundColor = "rgb(64, 64, 64)"

            mWL.style.backgroundColor = "rgb(64, 64, 64)"
            mWL.style.boxShadow = "3px 4px 15px black"

            lTBG.style.backgroundColor = "rgb(152 152 152)"
            rBG.style.backgroundColor = "rgb(173 173 173)"

            cS.style.backgroundColor = "rgb(64, 64, 64)"
            cS.style.boxShadow = "3px 4px 15px black"

            cC.style.backgroundColor = "rgb(64, 64, 64)"
            cC.style.boxShadow = "3px 4px 15px black"

            //cUS.style.backgroundColor = "rgb(64, 64, 64)"
            //cUS.style.boxShadow = "3px 4px 15px black"
            cUSback.style.backgroundColor = "rgb(90 90 90)"
            cUSback.style.boxShadow = "3px 4px 15px black"
            cUSlayout.style.backgroundColor = "rgb(90 90 90)"
            cUSlayout.style.boxShadow = "3px 4px 15px black"
            cUStheme.style.backgroundColor = "rgb(90 90 90)"

            lBBG.style.backgroundColor = "rgb(121 121 121)"

            clock.style.color = "rgb(255, 255, 255)"

            notiBubble.style.backgroundColor = "rgb(10 10 10)"

            localStorage.setItem("squareColor", "black") 
        break;
        case "white" :
            //alert("squares detected white, going to dark mode")
            // Select all <div> elements on the page
            const divs2 = document.getElementsByTagName("div")
            const h1s2 = document.getElementsByTagName("h1")
            const ps2 = document.getElementsByTagName("p")

            // Apply CSS styles to the selected <div> elements
            for (div2 of divs2) {
                div2.style.color = "white"
            }
            for (h12 of h1s2) {
                h12.style.color = "rgb(88 88 88)"
            }
            for (p2 of ps2) {
                p2.style.color = "rgb(255 255 255)"
            }


          

            dB.style.backgroundColor = "rgb(152 152 152)"
            cD.style.backgroundColor = "rgb(121 121 121)"
            dS.style.backgroundColor = "rgb(64, 64, 64)"
            lS.style.backgroundColor = "rgb(64, 64, 64)"

            mWL.style.backgroundColor = "rgb(64, 64, 64)"
            mWL.style.boxShadow = "3px 4px 15px black"

            lTBG.style.backgroundColor = "rgb(152 152 152)"
            rBG.style.backgroundColor = "rgb(173 173 173)"

            cS.style.backgroundColor = "rgb(64, 64, 64)"
            cS.style.boxShadow = "3px 4px 15px black"

            cC.style.backgroundColor = "rgb(64, 64, 64)"
            cC.style.boxShadow = "3px 4px 15px black"

            //cUS.style.backgroundColor = "rgb(64, 64, 64)"
            //cUS.style.boxShadow = "3px 4px 15px black"
            cUSback.style.backgroundColor = "rgb(90 90 90)"
            cUSback.style.boxShadow = "3px 4px 15px black"
            cUSlayout.style.backgroundColor = "rgb(90 90 90)"
            cUSlayout.style.boxShadow = "3px 4px 15px black"
            cUStheme.style.backgroundColor = "rgb(90 90 90)"

            lBBG.style.backgroundColor = "rgb(121 121 121)"

            clock.style.color = "rgb(255, 255, 255)"

            notiBubble.style.backgroundColor = "rgb(10 10 10)"

            localStorage.setItem("squareColor", "black") 
        break;

    }
    
}

function DarkThemeForOtherBg () {

    var dB = document.getElementById('futureDays');
    var cD = document.getElementById('currentDay');
    var dS = document.getElementById('dotsquare');
    var lS = document.getElementById('logosquare');
    var mWL = document.getElementById("madeWithLove")
    var lTBG = document.getElementById("leftopbodygrid")
    var rBG = document.getElementById('rightbodygrid');
    var cS = document.getElementById('clocksquare');
    var cC = document.getElementById('climacell');
    var cUS = document.getElementById('customizesquare');
    var lBBG = document.getElementById('leftbottombodygrid');
    var cUSback = document.getElementById("backgroundcolor")
    var cUStheme = document.getElementById("theme")
    var cUSlayout = document.getElementById("layout")

    var notiBubble = document.getElementById("notibubble")

    var clock = document.getElementById("clock")

        //alert("squares detected  black, going to light mode")
        localStorage.setItem("squareColor", "white") 

        const divs3 = document.getElementsByTagName("div")
        const h1s3 = document.getElementsByTagName("h1")
        const ps3 = document.getElementsByTagName("p")

        // Apply CSS styles to the selected <div> elements
        for (div3 of divs3) {
            div3.style.color = null
        }
        for (h13 of h1s3) {
            h13.style.color = null
        }
        for (p3 of ps3) {
            p3.style.color = null
        }

        dB.style.backgroundColor = null
        dS.style.backgroundColor = null
        lS.style.backgroundColor = null
        lTBG.style.backgroundColor = null
        rBG.style.backgroundColor = null

        cS.style.backgroundColor = null
        cS.style.boxShadow = null

        cC.style.backgroundColor = null
        cC.style.boxShadow = null
        cD.style.backgroundColor = null

        //cUS.style.backgroundColor = null
        //cUS.style.boxShadow = null

        mWL.style.backgroundColor =  null
        mWL.style.boxShadow =  null

        cUSback.style.backgroundColor =null
        cUSback.style.boxShadow = null
        cUSlayout.style.backgroundColor = null
        cUSlayout.style.boxShadow = null
        cUStheme.style.backgroundColor = null

        clock.style.color = null

        notiBubble.style.backgroundColor = null

        lBBG.style.backgroundColor = null

}



/* CURRENT WEATHER SQUARE ANIMATION -----------------------------

EXPLANATION: WHEN THE USER CLICKS ON THE CURRENT WEATHER SQUARE, A SERIES OF STEPS
WILL HAPPEN; 

1. THE BACKGROUND AND ALL OTHER ELEMENTS WILL BLUR

2. THE CURRENT WEATHER SQUARE WILL HAVE AN EXPANSION ANIMATION (THIS) 

3. THE CSS GRID WITHIN #leftopbodygrid WILL CHANGE TO ENCOMPASS MORE
ADVANCED WEATHER DATA FOR EACH HOUR

4. THE ELEMENTS WILL ALL BE ASSIGNED A GRID POSITION AND A MARGIN-AUTO IF POSSIBLE

5. ALL OF THESE PROPERTIES SHOULD BE REASSIGNED A NULL VALUE IF POSSIBLE WHEN CLOSING THE SQUARE */


function expandCurrentWeatherSquare () {

    
    //Vars:

    var lTBG = document.getElementById("leftopbodygrid")
    var rightGray = document.getElementById("farLeftGray")
    var textDesc = document.getElementById("textDescCurrent")
    var paraIcon = document.getElementById("paragraphIcon")

    //console.log(rightGray.classList[0])

    if (rightGray.classList[0] == "expandGrayAdvanced") {
        closeCurrentWeatherSquare();
        return;
    }

    var lBBG = document.getElementById("leftbottombodygrid")

    setTimeout(function() {
        lBBG.style.transition = "cubic-bezier(.41,.6,.4,.95) 1s;", lBBG.style.top = "32.9vh", lBBG.style.filter = "opacity(0)"
    }, 1)


    //Change the rightGray square to expand 

    rightGray.classList.remove("closeGrayAdvanced")
    rightGray.classList.add("expandGrayAdvanced")

    //Change the box height to expand 

    //lTBG.style.zIndex = "2"

    //Add a scroll to the box if needed 

    textDesc.classList.add("textDescScroll")

    //Change the innerHtml of textDesc to the desc

    paraIcon.style.display = "none"

    textDesc.innerHTML = localStorage.getItem("currentTextDesc")

}

function closeCurrentWeatherSquare () {
    //Vars:

    var lBBG = document.getElementById("leftbottombodygrid")
    var rightGray = document.getElementById("farLeftGray")
    var textDesc = document.getElementById("textDescCurrent")
    var paraIcon = document.getElementById("paragraphIcon")

    //Change the rightGray square to expand 

    rightGray.classList.add("closeGrayAdvanced")
    rightGray.classList.remove("expandGrayAdvanced")

    //Change the box height to expand 

    //lTBG.classList.remove("heightExpandLeftop")
    //lTBG.classList.add("heightNormalLeftop")

    setTimeout(function() {
        lBBG.style.transition = "cubic-bezier(.41,.6,.4,.95) 1s;", lBBG.style.top = "30.9vh", lBBG.style.filter = "opacity(1)"
    },100);

    //Add a scroll to the box if needed 

    textDesc.classList.remove("textDescScroll")

    //Change the innerHtml of textDesc to the desc

    paraIcon.style.display = null

    textDesc.innerHTML = null
}




/* HOURLY ANIMATION -----------------------------

EXPLANATION: WHEN THE USER CLICKS ON THE HOURLY SQUARE, A SERIES OF STEPS
WILL HAPPEN; 

1. THE BACKGROUND AND ALL OTHER ELEMENTS WILL BLUR

2. THE HOURLY SQUARE WILL HAVE AN EXPANSION ANIMATION (THIS) 

3. THE CSS GRID WITHIN #leftbottombodygrid WILL CHANGE TO ENCOMPASS MORE
ADVANCED WEATHER DATA FOR EACH HOUR

4. THE ELEMENTS WILL ALL BE ASSIGNED A GRID POSITION AND A MARGIN-AUTO IF POSSIBLE

5. ALL OF THESE PROPERTIES SHOULD BE REASSIGNED A NULL VALUE IF POSSIBLE WHEN CLOSING THE SQUARE */

document.getElementById("HourlyGrid").addEventListener("mouseenter", function() {

    return;

    var gray = document.getElementById("HourlyCurrentGray")
    var hG = document.getElementById("HourlyGrid") 




    if (window.innerWidth > 1200) {
        gray.style.filter = "opacity(0.1)"
        setTimeout(function() {
            //alert("dsds")
            var hGRect = hG.getBoundingClientRect()
            var hGActualWidthColumns = hGRect.width/16 

            var exactFromStart = (hGRect.width - hGActualWidthColumns)

            //console.log(hGActualWidthColumns)
        
            gray.style.filter = "opacity(1)"

            gray.style.width = exactFromStart + "px"
        }, 501)
    }
})

document.getElementById("HourlyGrid").addEventListener("mouseleave", function() {


    return;

    var gray = document.getElementById("HourlyCurrentGray")
    var hG = document.getElementById("HourlyGrid") 

    if (window.innerWidth > 1200) {
        gray.style.filter = "opacity(0.1)"

        setTimeout(function() {
            gray.style.width = null
            setTimeout(function() {
                gray.style.filter = "opacity(1)"
            },200)
        },401)
    }
})





function expandHourlyAdvanced() {

    if (localStorage.getItem("belowMediaMobile") == "no") {
        //Declare Vars:

        var hG = document.getElementById("HourlyGrid") 
        var lBBG = document.getElementById("leftbottombodygrid") 
        var gray = document.getElementById("HourlyCurrentGray")



        //Change the square to become bigger:

        lBBG.classList.remove("lBBGnormal");
        lBBG.classList.add("fullExpandlBBG");

        /*setTimeout(function() {
            hGExpandedWith ()
        }, 501)*/

        hG.classList.add("HourlyGridOverflowAuto");

        //hG.classList.remove("normalHourlyGrid");
        //hG.classList.add("fullExpandHourlyGrid");

        //Change the grid to encompass advanced data:

        //hG.style.gridTemplateColumns = "repeat(16, 1fr)"
        //hG.style.gridTemplateRows = "repeat(6, 1fr)"


        /*<img class="bruh16" id="wiconhour16"/>
        <div id="temphour16">test</div>
        <div id="hour16">10pm</div> */ 


        //Add the data from the call:

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

        TimeHourly();
    } else {
        //Declare Vars:

        var hG = document.getElementById("HourlyGrid") 
        var lBBG = document.getElementById("leftbottombodygrid") 

        //Change the square to become bigger:

        lBBG.classList.remove("lBBGnormal");
        lBBG.classList.add("fullExpandlBBG");

        hG.classList.remove("normalHourlyGrid");
        hG.classList.add("fullExpandHourlyGrid");

        //Add the data from the call:

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

        TimeHourly();
    }

    
};

function testHor() {
    var subject = document.getElementById("HourlyGrid")
    var gray = document.getElementById("HourlyCurrentGray")

    //console.log(subject.scrollLeft)

    if (subject.scrollLeft >= 30) {
        gray.classList.remove("mobileSlideNormal")
        gray.classList.add("mobileSlideLeft")
    } else {
        gray.classList.remove("mobileSlideLeft")
        gray.classList.add("mobileSlideNormal")
    }
}
if (localStorage.getItem("belowMediaMobile") == "yes") {
    mobileData()
}
function mobileData (){
        //Add the data from the call:

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

        TimeHourly();
}

function closeHourlyAdvanced () {

    //console.log("closing")

    var hG = document.getElementById("HourlyGrid")
    var lBBG = document.getElementById("leftbottombodygrid") 

    //Change the square to become bigger:

    lBBG.classList.add("lBBGnormal");
    lBBG.classList.remove("fullExpandlBBG");

    hG.style.gridTemplateColumns = null
    hG.style.gridTemplateRows = null

    hG.classList.add("normalHourlyGrid");
    hG.classList.remove("fullExpandHourlyGrid");
    hG.classList.remove("HourlyGridOverflowAuto");

    DefaultHours();
}



//declare vars 

/*When the user hovers over the current hourly box 
and scrolls they are able to scroll horizontally*/
var hourlyGrid = document.getElementById('HourlyGrid')

hourlyGrid.addEventListener("mouseenter", function()  {

    //console.warn("detected that mouse entered")

    function handler(e) {

        if (localStorage.getItem("isMouseOverHourlyGrid") == "yes") {
            var isTouchPad = e.wheelDeltaY ? e.wheelDeltaY === -3 * e.deltaY : e.deltaMode === 0
            // logs whether the user has a mouse or trackpad
            document.getElementById('innerHtmlLogs').innerHTML = (isTouchPad ? "isTouchPad" : "isMouse") 
        
            var IsMouse = document.getElementById('innerHtmlLogs').innerHTML    
        
            if (IsMouse == "isMouse") {
                if (e.deltaY > 0) hourlyGrid.scrollLeft += 20;
                else hourlyGrid.scrollLeft -= 20;
            } 
        } else {
            //console.warn("dss")
        }
    }
    //when the user scrolls, call the above function
    document.body.addEventListener("mousewheel", handler, false);
    document.body.addEventListener("DOMMouseScroll", handler, false);
});

hourlyGrid.onmouseenter = function () {
    localStorage.setItem("isMouseOverHourlyGrid", "yes")
}
hourlyGrid.onmouseleave = function () {
    localStorage.setItem("isMouseOverHourlyGrid", "no")
}


function isOverflown(element) {
    return element.scrollWidth > element.clientWidth;
}
/* Daily Box Hourly Grids scrolling functions */

setTimeout(function(){
    var hourlyDay1 = document.getElementById('HourlyGridDay1')

    hourlyDay1.addEventListener("mouseenter", function()  {

        //console.warn("detected that mouse entered")
    
        function handler(e) {
    
            if (localStorage.getItem("isMouseOverHourlyGridDay1") == "yes") {
                var isTouchPad = e.wheelDeltaY ? e.wheelDeltaY === -3 * e.deltaY : e.deltaMode === 0
                // logs whether the user has a mouse or trackpad
                var IsMouse = (isTouchPad ? "isTouchPad" : "isMouse") 
      
                if (IsMouse == "isMouse") {
                    if (e.deltaY > 0) hourlyDay1.scrollLeft += 15;
                    else hourlyDay1.scrollLeft -= 15;
                } 
            } else {
                //console.warn("dss")
            }
        }
        //when the user scrolls, call the above function
        document.body.addEventListener("mousewheel", handler, false);
        document.body.addEventListener("DOMMouseScroll", handler, false);
    });
    
    hourlyDay1.onmouseenter = function () {

        var el = hourlyDay1
        var checkOverflow = (isOverflown(el) ? 'yes' : 'no')
        if (checkOverflow == 'no') {
            return;
        } 

        localStorage.setItem("isMouseOverHourlyGridDay1", "yes")
        document.getElementById("dailyGrid").style.overflowY = "hidden"

        hourlyDay1.style.gridTemplateRows = "0.7fr 0.7fr 1fr"

    }
    hourlyDay1.onmouseleave = function () {
        localStorage.setItem("isMouseOverHourlyGridDay1", "no")
        document.getElementById("dailyGrid").style.overflowY = null
        hourlyDay1.style.gridTemplateRows = null
    }
}, 500);

setTimeout(function(){
    var hourlyDay2 = document.getElementById('HourlyGridDay2')

    hourlyDay2.addEventListener("mouseenter", function()  {
    
        //console.warn("detected that mouse entered")
    
        function handler(e) {
    
            if (localStorage.getItem("isMouseOverHourlyGridDay2") == "yes") {
                var isTouchPad = e.wheelDeltaY ? e.wheelDeltaY === -3 * e.deltaY : e.deltaMode === 0
                // logs whether the user has a mouse or trackpad
                var IsMouse = (isTouchPad ? "isTouchPad" : "isMouse") 
      
                if (IsMouse == "isMouse") {

                    if (e.deltaY > 0) hourlyDay2.scrollLeft += 15;
                    else hourlyDay2.scrollLeft -= 15;
                } 
            } else {
                //console.warn("dss")
            }
        }
        //when the user scrolls, call the above function
        document.body.addEventListener("mousewheel", handler, false);
        document.body.addEventListener("DOMMouseScroll", handler, false);
    });
    
    hourlyDay2.onmouseenter = function () {
        var el = hourlyDay2
        var checkOverflow = (isOverflown(el) ? 'yes' : 'no')
        if (checkOverflow == 'no') {
            return;
        } 

        localStorage.setItem("isMouseOverHourlyGridDay2", "yes")
        document.getElementById("dailyGrid").style.overflowY = "hidden"
        hourlyDay2.style.gridTemplateRows = "0.7fr 0.7fr 1fr"
    }
    hourlyDay2.onmouseleave = function () {
        localStorage.setItem("isMouseOverHourlyGridDay2", "no")
        document.getElementById("dailyGrid").style.overflowY = null
        hourlyDay2.style.gridTemplateRows = null
    }
}, 500);

setTimeout(function(){
    var hourlyDay3 = document.getElementById('HourlyGridDay3')

    hourlyDay3.addEventListener("mouseenter", function()  {
    
        //console.warn("detected that mouse entered")
    
        function handler(e) {
    
            if (localStorage.getItem("isMouseOverHourlyGridDay3") == "yes") {
                var isTouchPad = e.wheelDeltaY ? e.wheelDeltaY === -3 * e.deltaY : e.deltaMode === 0
                // logs whether the user has a mouse or trackpad
                var IsMouse = (isTouchPad ? "isTouchPad" : "isMouse") 
      
                if (IsMouse == "isMouse") {

                    if (e.deltaY > 0) hourlyDay3.scrollLeft += 15; 
                    else hourlyDay3.scrollLeft -= 15;
                } 
            } else {
                //console.warn("dss")
            }
        }
        //when the user scrolls, call the above function
        document.body.addEventListener("mousewheel", handler, false);
        document.body.addEventListener("DOMMouseScroll", handler, false);
    });
    
    hourlyDay3.onmouseenter = function () {
        var el = hourlyDay3
        var checkOverflow = (isOverflown(el) ? 'yes' : 'no')
        if (checkOverflow == 'no') {
            return;
        } 

        localStorage.setItem("isMouseOverHourlyGridDay3", "yes")
        document.getElementById("dailyGrid").style.overflowY = "hidden"
        hourlyDay3.style.gridTemplateRows = "0.7fr 0.7fr 1fr"
    }
    hourlyDay3.onmouseleave = function () {
        localStorage.setItem("isMouseOverHourlyGridDay3", "no")
        document.getElementById("dailyGrid").style.overflowY = null
        hourlyDay3.style.gridTemplateRows = null
    }
}, 500);

setTimeout(function(){
    var hourlyDay4 = document.getElementById('HourlyGridDay4')

    hourlyDay4.addEventListener("mouseenter", function()  {
    
        //console.warn("detected that mouse entered")
    
        function handler(e) {
    
            if (localStorage.getItem("isMouseOverHourlyGridDay4") == "yes") {
                var isTouchPad = e.wheelDeltaY ? e.wheelDeltaY === -3 * e.deltaY : e.deltaMode === 0
                // logs whether the user has a mouse or trackpad
                var IsMouse = (isTouchPad ? "isTouchPad" : "isMouse") 
      
                if (IsMouse == "isMouse") {

                    if (e.deltaY > 0) hourlyDay4.scrollLeft += 15; 
                    else hourlyDay4.scrollLeft -= 15;
                } 
            } else {
                //console.warn("dss")
            }
        }
        //when the user scrolls, call the above function
        document.body.addEventListener("mousewheel", handler, false);
        document.body.addEventListener("DOMMouseScroll", handler, false);
    });
    
    hourlyDay4.onmouseenter = function () {
        var el = hourlyDay4
        var checkOverflow = (isOverflown(el) ? 'yes' : 'no')
        if (checkOverflow == 'no') {
            return;
        } 

        localStorage.setItem("isMouseOverHourlyGridDay4", "yes")
        document.getElementById("dailyGrid").style.overflowY = "hidden"
        hourlyDay4.style.gridTemplateRows = "0.7fr 0.7fr 1fr"
    }
    hourlyDay4.onmouseleave = function () {
        localStorage.setItem("isMouseOverHourlyGridDay4", "no")
        document.getElementById("dailyGrid").style.overflowY = null
        hourlyDay4.style.gridTemplateRows = null
    }
}, 500);

/*
document.getElementById("dotsquare").addEventListener("mouseenter", function () {
    document.getElementById("circle").style.filter = "opacity(1)"
    document.getElementById("ring").style.filter = "opacity(1)"
    document.getElementById("ring").style.transform = "scale(0.9)"
})
document.getElementById("dotsquare").addEventListener("mouseleave", function () {
    document.getElementById("circle").style.filter = null
    document.getElementById("ring").style.filter = null
    document.getElementById("ring").style.transform = null
})
document.getElementById("dotsquare").addEventListener("click", function () {
    document.getElementById("ring").style.transform = "scale(1.4)"
    document.getElementById("ring").style.filter = "opacity(0)"
})

*/