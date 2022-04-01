var minuteArm = document.querySelector('#minute');
var secondArm = document.querySelector('#second');

changeTime();

setInterval(() => {
    changeTime();
}, 1000);

function changeTime() {
    const d = new Date();
    let hours = (d.getHours() + d.getMinutes()*1.6/100)*30;
    let minutes = (d.getMinutes() + d.getSeconds()*1.6/100)*6;
    let seconds = d.getSeconds()*6;
    
    document.querySelector('#hour').style.transform = `rotate(${hours}deg)`
    minuteArm.style.transform = `rotate(${minutes}deg)`
    secondArm.style.transform = `rotate(${seconds}deg)`
}