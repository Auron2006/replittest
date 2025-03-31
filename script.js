
document.addEventListener('DOMContentLoaded', function() {
  const counterButton = document.getElementById('counter-button');
  const clickCountDisplay = document.getElementById('click-count');
  let clickCount = 0;
  
  counterButton.addEventListener('click', function() {
    clickCount++;
    clickCountDisplay.textContent = clickCount;
  });
});
