
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const month = document.getElementById('month')
const date = document.getElementById('date');
const amPm = document.getElementById('am-pm');



function initializeClock(){

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

    
    date.textContent = currentDate;

    requestAnimationFrame(initializeClock)
}

//animationFrame more effective than timeOut

requestAnimationFrame(initializeClock)