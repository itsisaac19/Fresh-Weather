
localStorage.removeItem("whichHardPress")
localStorage.removeItem("animateFocus")

document.getElementById('flowers').addEventListener("click", function(){
    //console.log(localStorage.getItem("whichHardPress"))
})

//When each of the squares is clicked:

document.getElementById('leftopbodygrid').addEventListener("click", function(){
    
    //console.log(localStorage.getItem("whichHardPress"))


    //This switch case prevents users from clicking another square WHILE focused in on another square
    switch(localStorage.getItem("whichHardPress")) {
        default :

        break;
        case "leftopbodygrid" :
            localStorage.setItem("whichHardPress", "leftopbodygrid")
            localStorage.setItem("pressing", "yes")
            //alert("wdwd")
            hardPress();
            return;
        break
        case null :
            localStorage.setItem("whichHardPress", "leftopbodygrid")
            localStorage.setItem("pressing", "yes")
            //alert("wdwd")
            hardPress();
            return;
        break
    }
})



document.getElementById('leftbottombodygrid').addEventListener("click", function(){

    //console.log(localStorage.getItem("whichHardPress"))

     //This switch case prevents users from clicking another square WHILE focused in on another square
    switch(localStorage.getItem("whichHardPress")) {
        default :
            
        break;
        case "leftbottombodygrid" :
            localStorage.setItem("whichHardPress", "leftbottombodygrid")
            localStorage.setItem("pressing", "yes")
            //alert("wdwd")
            hardPress();
            return;
        break
        case null :
            localStorage.setItem("whichHardPress", "leftbottombodygrid")
            localStorage.setItem("pressing", "yes")
            //alert("wdwd")
            hardPress();
            return;
        break
    }
})



document.getElementById('rightbodygrid').addEventListener("click", function(){

    //console.log(localStorage.getItem("whichHardPress"))

     //This switch case prevents users from clicking another square WHILE focused in on another square
     switch(localStorage.getItem("whichHardPress")) {
        default :
            
        break;
        case "rightbodygrid" :
            localStorage.setItem("whichHardPress", "rightbodygrid")
            localStorage.setItem("pressing", "yes")
            //alert("wdwd")
            hardPress();
            return;
        break
        case null :
            localStorage.setItem("whichHardPress", "rightbodygrid")
            localStorage.setItem("pressing", "yes")
            //alert("wdwd")
            hardPress();
            return;
        break
    }
})




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

                    setTimeout(function() {
                        document.getElementById('leftopbodygrid').style.transform = "translateY(-10px)"
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
    
                        setTimeout(function() {
                            document.getElementById('leftbottombodygrid').style.transform = "translateY(-10px)"
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
        
                                localStorage.removeItem("whichHardPress")
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
        
                                localStorage.removeItem("whichHardPress")
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
                            document.getElementById('rightbodygrid').style.transform = "translateY(-10px)"
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

            cUS.style.backgroundColor = "rgb(64, 64, 64)"
            cUS.style.boxShadow = "3px 4px 15px black"
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

            cUS.style.backgroundColor = "rgb(64, 64, 64)"
            cUS.style.boxShadow = "3px 4px 15px black"
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

        cUS.style.backgroundColor = null
        cUS.style.boxShadow = null

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