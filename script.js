function displayDate() {
  document.getElementById("demo").textContent = new Date().toLocaleString();
}

displayDate();
setInterval(displayDate, 1000); 
