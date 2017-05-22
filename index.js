(function(){

  'use strict';

  var image = document.getElementById('js-image'),
      canvas = document.getElementById('js-canvas');

  var context = canvas.getContext('2d');

  var angle = 0;

  function animate() {
    requestAnimationFrame(animate);

    // erase
    context.clearRect(0, 0, canvas.width, canvas.height);

    // draw image
    context.globalCompositeOperation = 'source-over';
    context.drawImage(image, 0, 0);

    // clip image
    context.globalCompositeOperation = 'destination-in';

    // move to center of canvas
    context.moveTo(
      Math.floor(canvas.width / 2),
      Math.floor(canvas.height / 2)
    );

    context.beginPath();
    context.lineTo(
      Math.floor(canvas.width / 2),
      0
    );
    context.arc(
      Math.floor(canvas.width / 2),
      Math.floor(canvas.height / 2),
      Math.floor(canvas.height / 2),
      270 * Math.PI / 180,
      (270 + angle) * Math.PI / 180,
      false
    );
    context.lineTo(
      Math.floor(canvas.width / 2),
      Math.floor(canvas.height / 2)
    );

    // clip
    context.fill();

    angle += 2;

    if (angle >= 360) {
      angle = 0;
    }
  }
  animate();

}());
