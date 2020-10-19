function iconDesc() {
    var currenticonstart = localStorage.getItem("currenticonstart")

    //console.log(currenticonstart)

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
            currenticonstart = "Light Freezing Rain"    
            currenticonend = "color/freezing_rain_light.svg" 
            break;    

        case "freezing_rain":   
        currenticonstart = "Freezing Rain"  
            currenticonend = "color/freezing_rain.svg" 
            break;    
            
        case "freezing_rain_heavy": 
        currenticonstart = "Heavy Freezing Rain"    
            currenticonend = "color/freezing_rain_heavy.svg" 
            break;  
            
        case "ice_pellets_light": 
        currenticonstart = "Light Ice Pellets"     
            currenticonend = "color/ice_pellets_light.svg" 
            break;

        case "ice_pellets":   
        currenticonstart = "Ice Pellets"  
            currenticonend = "color/ice_pellets.svg" 
            break;

        case "ice_pellets_heavy":   
        currenticonstart = "Heavy Ice Pellets"  
            currenticonend = "color/ice_pellets_heavy.svg" 
            break;

        case "mostly_clear":
            currenticonstart = "Mostly Clear"  
            //day/night
            currenticonend = "color/mostly_clear_day.svg"
            break;

        case "mostly_cloudy":
            currenticonstart = "Mostly Cloudy"
            currenticonend =  "color/mostly_cloudy.svg"
            break;    

        case "partly_cloudy":
            currenticonstart = "Partly Cloudy"
            //day/night
            currenticonend =  "color/partly_cloudy_day.svg"
            break; 
    
        case "rain_light":
           currenticonstart = "Light Rain"
            currenticonend =  "color/rain_light.svg"
            break;

        case "rain":
            currenticonend =  "color/rain.svg"
            break; 

        case "rain_heavy":
           currenticonstart = "Heavy Rain"
            currenticonend =  "color/rain_heavy.svg"
            break;  
            
        case "snow_light":
            currenticonstart = "Light Snow"
            currenticonend =  "color/snow_light.svg"
            break;  

        case "snow":
            currenticonend =  "color/snow.svg"
            break;  
            
        case "snow_heavy":
           currenticonstart = "Heavy Snow"
            currenticonend =  "color/snow_heavy.svg"
            break;   

        case "tstorm":
           currenticonstart = "Thunderstorm"
            currenticonend =  "color/tstorm.svg"
            break;   
        }   



        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }


        document.getElementById("desc").innerHTML = (capitalizeFirstLetter(currenticonstart));
}    