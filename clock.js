
const colors = ["aqua", "yellow", "pink"];


function updateClock() {
  const now = new Date();

  
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[now.getDay()];

  
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = months[now.getMonth()];

  const date = now.getDate();
  const year = now.getFullYear();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';


  const displayHours = hours % 12 || 12;


  const clockDisplay = document.getElementById('clock');
  clockDisplay.innerHTML = `${day}, ${month} ${date}, ${year}<br>${addZero(displayHours)}:${addZero(minutes)}:${addZero(seconds)} ${ampm}`;

  
  const gradientColor = `linear-gradient(to right, ${colors.join(', ')})`;
  clockDisplay.style.background = gradientColor;
}


function addZero(num) {
  return (num < 10 ? '0' : '') + num;
}


setInterval(updateClock, 1000);


updateClock();
