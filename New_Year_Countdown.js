let day = document.getElementById("day");
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let newYearTime = new Date("Jan 1,2026 00:00:00").getTime();

function countDays() {
   let nowYearTime = new Date().getTime();

   let remTime = newYearTime - nowYearTime;

   let seconds = 1000;
   let minutes = seconds * 60;
   let hours = minutes * 60;
   let days = hours * 24;

   let d = Math.floor(remTime / days);
   let h = Math.floor((remTime % days) / hours);
   let m = Math.floor((remTime % hours) / minutes);
   let s = Math.floor((remTime % minutes) / seconds);

   day.innerText = d;
   hour.innerText = h;
   min.innerText = m;
   sec.innerText = s;
   setTimeout(countDays,1000);
}

countDays();