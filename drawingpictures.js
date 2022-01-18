function initializeAnimation() {
  window.requestAnimationFrame(draw);
}

function drawArt(ctx) {
  ctx.beginPath();
  ctx.fillRectangle(-50,50,50,50);
  ctx.lineWidth = 6;
  ctx.translate(450, 250);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // Call draw when the website is ready
  window.requestAnimationFrame(draw);
}

initializeAnimation();
