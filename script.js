// Typing Effect
document.addEventListener("DOMContentLoaded", function() {
    const typingText = ["Software Developer", "Freelancer", "Full Stack Developer"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
  
    (function type() {
      if (count === typingText.length) {
        count = 0;
      }
      currentText = typingText[count];
      letter = currentText.slice(0, ++index);
  
      document.querySelector(".typing").textContent = letter;
      if (letter.length === currentText.length) {
        count++;
        index = 0;
      }
      setTimeout(type, 300);
    })();
  
    // Loading Animation
    window.onload = function() {
      setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
      }, 2000); // Adjust the timeout to match your loading animation length
    };
  });
  