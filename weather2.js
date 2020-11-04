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



        //Quick Weather ICONS ----------------------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------------------------------------------------


        //Explanation: Call this function when needing a path to the weather icon. Example: var icon = iconSelect(*INSERT WEATHER CODE HERE*)


        function iconSelect(string) {



            var weatherCode = string

            switch (weatherCode) {
                default:
                    iconPath = "color/clear_day.svg"
                    console.warn("iconSelect couldn't find: " + weatherCode)
                    break;
                case "clear": 
                //day/night
                iconPath = "color/clear_day.svg"
                    break;
        
                case "cloudy":   
                iconPath = "color/cloudy.svg" 
                    break;
        
                case "drizzle":   
                iconPath = "color/drizzle.svg" 
                    break;
        
                case "flurries":   
                iconPath = "color/flurries.svg" 
                    break;
        
                case "fog":   
                iconPath = "color/fog.svg" 
                    break;
        
                case "fog_light":  
                    iconPath = "color/fog_light.svg" 
                    break;
        
                case "freezing_drizzle":  
                    iconPath = "color/freezing_drizzle.svg" 
                    break;
        
                case "freezing_rain_light":  
                    iconPath = "color/freezing_rain_light.svg" 
                    break;    
        
                case "freezing_rain":   
                iconPath = "color/freezing_rain.svg" 
                    break;    
                    
                case "freezing_rain_heavy": 
                iconPath = "color/freezing_rain_heavy.svg" 
                    break;  
                    
                case "ice_pellets_light": 
                iconPath = "color/ice_pellets_light.svg" 
                    break;
        
                case "ice_pellets":   
                iconPath = "color/ice_pellets.svg" 
                    break;
        
                case "ice_pellets_heavy":   
                iconPath = "color/ice_pellets_heavy.svg" 
                    break;
        
                case "mostly_clear":
                    //day/night
                    iconPath = "color/mostly_clear_day.svg"
                    break;
        
                case "mostly_cloudy":
                    iconPath =  "color/mostly_cloudy.svg"
                    break;    
        
                case "partly_cloudy":
                    //day/night
                    iconPath =  "color/partly_cloudy_day.svg"
                    break; 
            
                case "rain_light":
                   iconPath =  "color/rain_light.svg"
                    break;
        
                case "rain":
                    iconPath =  "color/rain.svg"
                    break; 
        
                case "rain_heavy":
                   iconPath =  "color/rain_heavy.svg"
                    break;  
                    
                case "snow_light":
                    iconPath =  "color/snow_light.svg"
                    break;  
        
                case "snow":
                    iconPath =  "color/snow.svg"
                    break;  
                    
                case "snow_heavy":
                   iconPath =  "color/snow_heavy.svg"
                    break;   
        
                case "tstorm":
                   iconPath =  "color/tstorm.svg"
                    break;   
                }


                return  (iconPath) 

        }



/*CHARTS.JS*/

///////////////////////
console.log(localStorage.getItem("belowMediaMobile"))
setTimeout(function() {

    var hr1 = document.getElementById("temphour1").innerHTML.substring(0,2);
    var hr2 = document.getElementById("temphour2").innerHTML.substring(0,2);
    var hr3 = document.getElementById("temphour3").innerHTML.substring(0,2);
    var hr4 = document.getElementById("temphour4").innerHTML.substring(0,2);
    var hr5 = document.getElementById("temphour5").innerHTML.substring(0,2);
    var hr6 = document.getElementById("temphour6").innerHTML.substring(0,2);
    var hr7 = document.getElementById("temphour7").innerHTML.substring(0,2);
    var hr8 = document.getElementById("temphour8").innerHTML.substring(0,2);

    if (localStorage.getItem("belowMediaMobile") == "yes") {
    var hr9 = document.getElementById("temphour9").innerHTML.substring(0,2);
    var hr10 = document.getElementById("temphour10").innerHTML.substring(0,2);
    var hr11 = document.getElementById("temphour11").innerHTML.substring(0,2);
    var hr12 = document.getElementById("temphour12").innerHTML.substring(0,2);
    var hr13 = document.getElementById("temphour13").innerHTML.substring(0,2);
    var hr14 = document.getElementById("temphour14").innerHTML.substring(0,2);
    var hr15 = document.getElementById("temphour15").innerHTML.substring(0,2);
    }

    
    if (localStorage.getItem("belowMediaMobile") == "yes") {
        //alert("s")
        var ctx = document.getElementById('hourlyChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
          data: {
            labels: ['','','','','','','','','','','','','','',''],
            datasets: [{ 
                data: [hr1,hr2,hr3,hr4,hr5,hr6,hr7,hr8,hr9,hr10,hr11,hr12,hr13,hr14,hr15],
                label: "",
                borderColor: "#afded6",
                fill: false
              },
            ]
          },
          options: {
            tooltips: {enabled: false},
            hover: {mode: null},
            
            maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                scales: {
                  xAxes: [{
                    gridLines: {
                        display:false
                    }  
                  }],
                  yAxes: [{
                    gridLines: {
                        display:false
                    },
                    ticks: {
                       display: true,
                      fontColor: 'rgb(255, 255, 255, 0.001)'
                    }
                  }],
                }
          }
        });
    } else {
        var ctx = document.getElementById('hourlyChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
          data: {
            labels: ['','','','','',],
            datasets: [{ 
                data: [hr1,hr2,hr3,hr4,hr5,hr6,hr7,hr8],
                label: "",
                borderColor: "#eddd8a",
                fill: false
              },
            ]
          },
          options: {
            
            maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                scales: {
                  xAxes: [{
                    gridLines: {
                        display:false
                    }  
                  }],
                  yAxes: [{
                    gridLines: {
                        display:false
                    },
                    ticks: {
                       display: true,
                      fontColor: 'rgb(255, 255, 255, 0.001)'
                    }
                  }],
                }
          }
        });
    }

}, 1500);

