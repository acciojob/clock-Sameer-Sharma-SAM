//your JS code here. If required.
    function updateTimer() {
      const now = new Date();
      const formatted = now.toLocaleString(); 
      document.getElementById("timer").textContent = formatted;
    }
    updateTimer();
    setInterval(updateTimer, 1000);