function displayClock() {
    setInterval(() => {
      const now = new Date();
  
      // 24-hour format: HH:MM:SS
      const hours24 = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const time24 = `${hours24}:${minutes}:${seconds}`;
  
      // 12-hour format with AM/PM: HH:MM:SS AM/PM
      let hours12 = now.getHours();
      const amPm = hours12 >= 12 ? "PM" : "AM";
      hours12 = hours12 % 12 || 12; // Convert 24-hour time to 12-hour format
      const time12 = `${String(hours12).padStart(2, "0")}:${minutes}:${seconds} ${amPm}`;
  
      console.clear(); // Clear the console for cleaner output
      console.log("Current Machine Time:");
      console.log(`24-hour format: ${time24}`);
      console.log(`12-hour format: ${time12}`);
    }, 1000); // Update every 1 second
  }
  
  // Start the clock
  displayClock();
  