document.getElementById('leftopbodygrid').addEventListener("click", function(){
    localStorage.setItem("whichHardPress", "leftopbodygrid")
    localStorage.setItem("pressing", "yes")
    //alert("wdwd")
    hardPress();
    return;
})
document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
        if(localStorage.getItem("currentFocus") == "yes") {
            //alert("djshd")
            hardPress();
        }
    }
})
document.addEventListener("click", function() {
    setTimeout(function() {

        console.log(localStorage.getItem("currentFocus"))
        if(localStorage.getItem("currentFocus") == "yes") {
            if(localStorage.getItem("pressing") == "yes") {
                return;
            } else {
                alert("djshd")
                document.getElementById('clocksquare').classList.add('freeOffdetect')
                hardPress();
                localStorage.setItem("currentFocus", "no")
            }
        }
    }, 30);    


})
if (document.getElementById('clocksquare').classList.value == "freeOffdetect") {

    localStorage.setItem("currentFocus", "no")

    console.log(localStorage.getItem("currentFocus"))

} 

function hardPress () {

    var s = document.getElementById('flowers')

    var dB = document.getElementById('dailyBox');
    var rBG = document.getElementById('rightbodygrid');
    var cS = document.getElementById('clocksquare');
    var cC = document.getElementById('climacell');
    var lBBG = document.getElementById('leftbottombodygrid');

    setTimeout(function() {

        switch(localStorage.getItem("whichHardPress")) {
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
                    

                    //console.log(localStorage.getItem("currentFocus"))
            
                } else {
            
                    cS.classList.add('freeOffdetect')
                    s.classList.remove('freeUniversalBlurOn')
                
                    dB.classList.remove('freeUniversalBlurOn')
                    rBG.classList.remove('freeUniversalBlurOn')
                    cS.classList.remove('freeUniversalBlurOn')
                    cC.classList.remove('freeUniversalBlurOn')
                    lBBG.classList.remove('freeUniversalBlurOn')
                }
                break;
        }
    }, 10);

setTimeout(function() {
    localStorage.setItem("pressing", "no")
    console.log("set to no")
}, 500);



}

