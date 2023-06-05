function updateTime() {
    const now = new Date();
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    clockElement.textContent = now.toLocaleTimeString();
    dateElement.textContent = now.toLocaleDateString();
  }
  
  setInterval(updateTime, 1000);