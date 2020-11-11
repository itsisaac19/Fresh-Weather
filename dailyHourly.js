
function assignPlaceHourlyGrids () {
    placeHourlyGrids(1)
    placeHourlyGrids(2)
    placeHourlyGrids(3)
    placeHourlyGrids(4)
}

function placeHourlyGrids (string) {

    //console.log("adding grids")

    document.getElementById('hourlyDay' + string).innerHTML = 
        `
        <div id="HourlyGridDay`+string+`" class="normalHourlyGridDay">

            <em id="HourlyChartContainerDay`+string+`" class="HourlyChartDays">
                <canvas id="hourlyChartDay`+string+`"></canvas>
            </em>
    
            <div id="temphour`+string+`Day`+string+`" class="temphour1Days">60°</div>
            <img alt="img" id="wiconHour1Day`+string+`" class="wicon1Days"/>  
            <div id="hour1Day`+string+`" class="hour1days">9 AM</div>  

            <div id="temphour`+(string + 1)+`Day`+string+`" class="temphour2Days">60°</div>
            <img alt="img" id="wiconHour2Day`+string+`" class="wicon2Days"/>  
            <div id="hour2Day`+string+`" class="hour2days">10 AM</div> 

            <div id="temphour`+(string + 2)+`Day`+string+`" class="temphour3Days">60°</div>
            <img alt="img" id="wiconHour3Day`+string+`" class="wicon3Days"/>  
            <div id="hour3Day`+string+`" class="hour3days">11 AM</div> 

            <div id="temphour`+(string + 3)+`Day`+(string)+`" class="temphour4Days">60°</div>
            <img alt="img" id="wiconHour4Day`+string+`" class="wicon4Days"/>  
            <div id="hour4Day`+string+`" class="hour4days">12 PM</div> 

            <div id="temphour`+(string + 4)+`Day`+(string)+`" class="temphour5Days">60°</div>
            <img alt="img" id="wiconHour5Day`+string+`" class="wicon5Days"/>  
            <div id="hour5Day`+string+`" class="hour5days">1 PM</div>  

            <div id="temphour`+(string + 5)+`Day`+(string)+`" class="temphour6Days">60°</div>
            <img alt="img" id="wiconHour6Day`+string+`" class="wicon6Days"/>  
            <div id="hour6Day`+string+`" class="hour6days">2 PM</div> 

            <div id="temphour`+(string + 6)+`Day`+(string)+`" class="temphour7Days">60°</div>
            <img alt="img" id="wiconHour7Day`+string+`" class="wicon7Days"/>  
            <div id="hour7Day`+string+`" class="hour7days">3 PM</div> 

            <div id="temphour`+(string + 7)+`Day`+(string)+`" class="temphour8Days">60°</div>
            <img alt="img" id="wiconHour8Day`+string+`" class="wicon8Days"/>  
            <div id="hour8Day`+string+`" class="hour8days">4 PM</div> 

            <div id="temphour`+(string + 8)+`Day`+(string)+`" class="temphour9Days">60°</div>
            <img alt="img" id="wiconHour9Day`+string+`" class="wicon9Days"/>  
            <div id="hour9Day`+string+`" class="hour9days">5 PM</div>  

            <div id="temphour`+(string + 9)+`Day`+(string)+`" class="temphour10Days">60°</div>
            <img alt="img" id="wiconHour10Day`+string+`" class="wicon10Days"/>  
            <div id="hour10Day`+string+`" class="hour10days">6 PM</div> 

            <div id="temphour`+(string + 10)+`Day`+(string)+`" class="temphour11Days">60°</div>
            <img alt="img" id="wiconHour11Day`+string+`" class="wicon11Days"/>  
            <div id="hour11Day`+string+`" class="hour11days">7 PM</div> 

            <div id="temphour`+(string + 11)+`Day`+(string)+`" class="temphour12Days">60°</div>
            <img alt="img" id="wiconHour12Day`+string+`" class="wicon12Days"/>  
            <div id="hour12Day`+string+`" class="hour12days">8 PM</div> 
    
        </div>
    
        `
}

function assignHideHourlyGrids () {
    hideHourlyGrids("1")
    hideHourlyGrids("2")
    hideHourlyGrids("3")
    hideHourlyGrids("4")
    hideHourlyGrids("5")
    hideHourlyGrids("6")
    hideHourlyGrids("7")
}

function hideHourlyGrids (string) {
    document.getElementById('hourlyDay' + string).style.display = "none"
}

function assignShowHourlyGrids () {
    showHourlyGrids("1")
    showHourlyGrids("2")
    showHourlyGrids("3")
    showHourlyGrids("4")
    showHourlyGrids("5")
    showHourlyGrids("6")
    showHourlyGrids("7")

    setTimeout(day1chart, 1000)
    setTimeout(day2chart, 1000)
    setTimeout(day3chart, 1000)
    setTimeout(day4chart, 1000)
}

function showHourlyGrids (string) {
    document.getElementById('hourlyDay' + string).style.display = "block"
}


assignPlaceHourlyGrids();
assignHideHourlyGrids();


var comingSoon = "This weather data is under construction."
var unNow = "This weather data is unavalible with a free plan."

document.getElementById("hourlyDay5").innerHTML = comingSoon
document.getElementById("hourlyDay6").innerHTML = comingSoon
document.getElementById("hourlyDay7").innerHTML = comingSoon


/*CHARTS.JS*/

///////////////////////

function day1chart () {
    //console.log(document.getElementById("temphourDay5").innerHTML.substring(0,2))

    var hr1day1 = document.getElementById("temphour1Day1").innerHTML.substring(0,2);
    var hr2day1 = document.getElementById("temphour2Day1").innerHTML.substring(0,2);
    var hr3day1 = document.getElementById("temphour3Day1").innerHTML.substring(0,2);
    var hr4day1 = document.getElementById("temphour4Day1").innerHTML.substring(0,2);
    var hr5day1 = document.getElementById("temphour5Day1").innerHTML.substring(0,2);
    var hr6day1 = document.getElementById("temphour6Day1").innerHTML.substring(0,2);
    var hr7day1 = document.getElementById("temphour7Day1").innerHTML.substring(0,2);
    var hr8day1 = document.getElementById("temphour8Day1").innerHTML.substring(0,2);
    var hr9day1 = document.getElementById("temphour9Day1").innerHTML.substring(0,2);
    var hr10day1 = document.getElementById("temphour10Day1").innerHTML.substring(0,2);
    var hr11day1 = document.getElementById("temphour11Day1").innerHTML.substring(0,2);
    var hr12day1 = document.getElementById("temphour12Day1").innerHTML.substring(0,2);

        var ctx = document.getElementById('hourlyChartDay1').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
          data: {
            labels: ['','','','','','','','','','','',''],
            datasets: [{ 
                data: [hr1day1,hr2day1,hr3day1,hr4day1,hr5day1,hr6day1,hr7day1,hr8day1,hr9day1,hr10day1,hr11day1,hr12day1],
                label: "",
                borderColor: "#afded6",
                fill: false
              },
            ]
          },
          options: {
            elements: {
                point:{
                    radius: 0
                },
            },
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
            },

        });
}
function day2chart () {
    //console.log(document.getElementById("temphourDay5").innerHTML.substring(0,2))
    
    var hr1day2 = document.getElementById("temphour2Day2").innerHTML.substring(0,2);
    var hr2day2 = document.getElementById("temphour3Day2").innerHTML.substring(0,2);
    var hr3day2 = document.getElementById("temphour4Day2").innerHTML.substring(0,2);
    var hr4day2 = document.getElementById("temphour5Day2").innerHTML.substring(0,2);
    var hr5day2 = document.getElementById("temphour6Day2").innerHTML.substring(0,2);
    var hr6day2 = document.getElementById("temphour7Day2").innerHTML.substring(0,2);
    var hr7day2 = document.getElementById("temphour8Day2").innerHTML.substring(0,2);
    var hr8day2 = document.getElementById("temphour9Day2").innerHTML.substring(0,2);
    var hr9day2 = document.getElementById("temphour10Day2").innerHTML.substring(0,2);
    var hr10day2 = document.getElementById("temphour11Day2").innerHTML.substring(0,2);
    var hr11day2 = document.getElementById("temphour12Day2").innerHTML.substring(0,2);
    var hr12day2 = document.getElementById("temphour13Day2").innerHTML.substring(0,2);

        var ctx = document.getElementById('hourlyChartDay2').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
          data: {
            labels: ['','','','','','','','','','','',''],
            datasets: [{ 
                data: [hr1day2,hr2day2,hr3day2,hr4day2,hr5day2,hr6day2,hr7day2,hr8day2,hr9day2,hr10day2,hr11day2,hr12day2],
                label: "",
                borderColor: "#afded6",
                fill: false
              },
            ]
          },
          options: {
            elements: {
                point:{
                    radius: 0
                },
            },
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
            },

        });
}
function day3chart () {
  //console.log(document.getElementById("temphourDay5").innerHTML.substring(0,2))
  
  var hr1day2 = document.getElementById("temphour3Day3").innerHTML.substring(0,2);
  var hr2day2 = document.getElementById("temphour4Day3").innerHTML.substring(0,2);
  var hr3day2 = document.getElementById("temphour5Day3").innerHTML.substring(0,2);
  var hr4day2 = document.getElementById("temphour6Day3").innerHTML.substring(0,2);
  var hr5day2 = document.getElementById("temphour7Day3").innerHTML.substring(0,2);
  var hr6day2 = document.getElementById("temphour8Day3").innerHTML.substring(0,2);
  var hr7day2 = document.getElementById("temphour9Day3").innerHTML.substring(0,2);
  var hr8day2 = document.getElementById("temphour10Day3").innerHTML.substring(0,2);
  var hr9day2 = document.getElementById("temphour11Day3").innerHTML.substring(0,2);
  var hr10day2 = document.getElementById("temphour12Day3").innerHTML.substring(0,2);
  var hr11day2 = document.getElementById("temphour13Day3").innerHTML.substring(0,2);
  var hr12day2 = document.getElementById("temphour14Day3").innerHTML.substring(0,2);

      var ctx = document.getElementById('hourlyChartDay3').getContext('2d');
      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',
        data: {
          labels: ['','','','','','','','','','','',''],
          datasets: [{ 
              data: [hr1day2,hr2day2,hr3day2,hr4day2,hr5day2,hr6day2,hr7day2,hr8day2,hr9day2,hr10day2,hr11day2,hr12day2],
              label: "",
              borderColor: "#afded6",
              fill: false
            },
          ]
        },
        options: {
          elements: {
              point:{
                  radius: 0
              },
          },
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
          },

      });
}
function day4chart () {
  //console.log(document.getElementById("temphourDay5").innerHTML.substring(0,2))
  
  var hr1day2 = document.getElementById("temphour4Day4").innerHTML.substring(0,2);
  var hr2day2 = document.getElementById("temphour4Day4").innerHTML.substring(0,2);
  var hr3day2 = document.getElementById("temphour5Day4").innerHTML.substring(0,2);
  var hr4day2 = document.getElementById("temphour6Day4").innerHTML.substring(0,2);
  var hr5day2 = document.getElementById("temphour7Day4").innerHTML.substring(0,2);
  var hr6day2 = document.getElementById("temphour8Day4").innerHTML.substring(0,2);
  var hr7day2 = document.getElementById("temphour9Day4").innerHTML.substring(0,2);
  var hr8day2 = document.getElementById("temphour10Day4").innerHTML.substring(0,2);
  var hr9day2 = document.getElementById("temphour11Day4").innerHTML.substring(0,2);
  var hr10day2 = document.getElementById("temphour12Day4").innerHTML.substring(0,2);
  var hr11day2 = document.getElementById("temphour13Day4").innerHTML.substring(0,2);
  var hr12day2 = document.getElementById("temphour14Day4").innerHTML.substring(0,2);

      var ctx = document.getElementById('hourlyChartDay4').getContext('2d');
      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',
        data: {
          labels: ['','','','','','','','','','','',''],
          datasets: [{ 
              data: [hr1day2,hr2day2,hr3day2,hr4day2,hr5day2,hr6day2,hr7day2,hr8day2,hr9day2,hr10day2,hr11day2,hr12day2],
              label: "",
              borderColor: "#afded6",
              fill: false
            },
          ]
        },
        options: {
          elements: {
              point:{
                  radius: 0
              },
          },
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
          },

      });
}