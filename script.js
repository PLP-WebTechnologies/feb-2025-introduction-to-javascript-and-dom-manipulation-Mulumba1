// Change text content
document.getElementById('change-text-btn').addEventListener('click', function () {
  const intro = document.getElementById('intro-text');
  intro.textContent = 'The text has been changed dynamically!';
  intro.style.color = 'blue';
  intro.style.fontWeight = 'bold';
});

// Add or remove a box element
document.getElementById('toggle-box-btn').addEventListener('click', function () {
  const container = document.getElementById('box-container');
  const existingBox = document.getElementById('box');

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const box = document.createElement('div');
    box.id = 'box';
    container.appendChild(box);
  }
});