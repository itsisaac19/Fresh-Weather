
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