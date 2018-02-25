const secondHand = document.querySelector(".second-hand");
const mindHand = document.querySelector(".min-hand");
const hourdHand = document.querySelector(".hour-hand");

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    mindHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourdHand.style.transform = `rotate(${hoursDegrees}deg)`

    console.log(hours + 'h  ' + minutes + 'min  ' + seconds + 'sec  ');

}

setInterval(setDate, 1000);