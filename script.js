function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const dayname = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let month = months[today.getMonth()];
  let day = dayname[today.getDay()];
  let year = today.getFullYear();
  let date = today.getDate();
  m = checkTime(m);
  s = checkTime(s);
  if (h>12){
    h = h-12;
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s + "  PM";
  }
  else{
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s + "  AM";
  }
  document.getElementById('txt2').innerHTML = day + ", " + date + "-" + month + "-" + year;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
