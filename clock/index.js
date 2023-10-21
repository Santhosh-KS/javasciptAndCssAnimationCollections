const hoursElement = document.getElementById("hour_hand");
const minuteElement = document.getElementById("minute_hand");
const secondElement = document.getElementById("second_hand");
const textElement = document.getElementById("text");

let showDate = true;

function animate() {
  const date = new Date();
  const day = date.getDate();
  
  const ampm = date.getHours() >= 12 ? "PM" : "AM";

  const hour = date.getHours() + date.getMinutes() / 60;
  const minute = date.getMinutes() + date.getSeconds() / 60;
  const second = date.getSeconds() + date.getMilliseconds()/1000;

  textElement.textContent = showDate ? day: ampm;
  hoursElement.setAttribute("transform", `rotate(${(360/12)* hour})`);
  minuteElement.setAttribute("transform", `rotate(${(360/60)* minute})`);
  secondElement.setAttribute("transform", `rotate(${(360/60)* second})`);
  
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

textElement.addEventListener("click", ()=> {
  showDate = !showDate;
})
