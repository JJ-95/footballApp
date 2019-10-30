function DrawPitch() {
  var canvas = document.getElementById("layer1");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var c = canvas.getContext("2d");
  c.fillStyle = "green";
  c.beginPath();
  c.moveTo(80, 10);
  c.lineTo(920, 10);
  c.lineTo(1000, 820);
  c.lineTo(0, 820);
  c.closePath();
  c.fill();
  c.stroke();

  c.beginPath();
  // outline
  c.moveTo(100, 50);
  c.lineTo(900, 50);
  c.lineTo(980, 800);
  c.moveTo(960, 600);
  c.lineTo(40, 600);
  c.moveTo(20, 800);
  c.lineTo(100, 50);
  // 5 yardbox
  c.moveTo(426, 50);
  c.lineTo(425, 85);
  c.lineTo(575, 85);
  c.lineTo(574, 50);
  //16 yardbox
  c.moveTo(377, 50);
  c.lineTo(375, 120);
  c.lineTo(625, 120);
  c.lineTo(623, 50);

  c.strokeStyle = "white";
  c.stroke();

  // center circle
  c.beginPath();
  c.arc(500, 600, 120, 0, 2 * Math.PI);
  c.strokeStyle = "white";
  c.stroke();

  // center dot
  c.beginPath();
  c.arc(500, 600, 5, 0, 2 * Math.PI);
  c.fillStyle = "white";
  c.fill();

  // corners
  c.beginPath();
  c.arc(100, 50, 20, 0, 0.53 * Math.PI);
  c.strokeStyle = "white";
  c.stroke();

  c.beginPath();
  c.arc(900, 50, 20, 1.5, 1 * Math.PI);
  c.strokeStyle = "white";
  c.stroke();
}

export default DrawPitch;
