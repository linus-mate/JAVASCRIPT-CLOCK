

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const month = document.getElementById('month')
const date = document.getElementById('date');
const amPm = document.getElementById('am-pm');
const selection = document.getElementById('slt');
document.getElementById('slt').addEventListener('change', function() {

    userSelection(this.value);
  });
  
  const now = new Date();

  const ui = {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds()
  }
  


function initializeClock(){
    //console.log(dateTime);

    const now = new Date();

   // const currentMonth = now.getMonth();
   // console.log(currentMonth); 
   // month.textContent = currentMonth;

    const currentDate = now.getDate();
    const hours = (now.getHours() + now.getMinutes() / 60) / 12 * 360;
    const minutes = (now.getMinutes() + now.getSeconds() / 60) / 60 * 360;

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutes}deg)`;
    hourHand.style.transform = `rotate(${hours}deg)`;


    amPm.textContent = now.getHours() > 12 ? 'PM' : 'AM';
    date.textContent = currentDate;

    document.getElementById('world-time').innerHTML = `${ui.hours}:${ui.minutes}:${ui.seconds}`;




    requestAnimationFrame(initializeClock)
}

function getTimeZones(){
    fetch('http://worldtimeapi.org/api/timezone')
    .then(function (response) {

        return response.json();
      })
      .then(data =>{

        for (let i = 0; i < data.length; i++){


            const opt = document.createElement('option');
            opt.value = data[i];
            opt.innerHTML = data[i];
            selection.appendChild(opt);
            
        }


        console.log(data);
      })
}



function userSelection(location){
    fetch(`http://worldtimeapi.org/api/timezone/${location}`)
    .then(function (response) {

        return response.json();
      })
      .then(data =>{
        ui.minutes = data.datetime.substr(14, 2)
        ui.hours = data.datetime.substr(11, 2)
        ui.seconds = data.datetime.substr(17, 2)
       
      })
     
}


 function initialize(){
    getTimeZones();
}
initialize();





//animationFrame more effective than timeOut

requestAnimationFrame(initializeClock)


