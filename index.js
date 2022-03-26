// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    const element = document.getElementById("text")
    console.log(`original text: ${element.textContent}`);
    const newText = element.textContent = "This is really cool!"
    console.log(`event listenter changed text to: ${newText}`);    
    }
);

console.log(
    "This fires when index.js loads - before DOMContentLoaded is triggered"
  );