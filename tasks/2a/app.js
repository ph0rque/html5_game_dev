$(document).ready(function() {

  var context = $('#game-canvas')[0].getContext('2d');
  context.fillStyle = "#eeeeff";
  context.fillRect(0, 0, 1000, 600);

  context.beginPath();
  context.moveTo(1000,0);
  context.bezierCurveTo(rand_x(), rand_y(), rand_x(), rand_y(), rand_x(), rand_y());
  context.bezierCurveTo(rand_x(), rand_y(), rand_x(), rand_y(), rand_x(), rand_y());
  context.bezierCurveTo(rand_x(), rand_y(), rand_x(), rand_y(), rand_x(), rand_y());
  context.lineTo(1000,600);
  context.lineTo(1000,0);
  context.fillStyle = randColor();
  context.fill();
  
  context.beginPath();
  context.moveTo(0,600);
  context.bezierCurveTo(rand_x(), rand_y(), rand_x(), rand_y(), rand_x(), rand_y());
  context.bezierCurveTo(rand_x(), rand_y(), rand_x(), rand_y(), rand_x(), rand_y());
  context.bezierCurveTo(rand_x(), rand_y(), rand_x(), rand_y(), rand_x(), rand_y());
  context.lineTo(1000,600);
  context.lineTo(0,600);
  context.fillStyle = randColor();
  context.fill();
  
  context.beginPath();
  context.moveTo(0,0);
  context.bezierCurveTo(rand_x(), rand_y(), rand_x(), rand_y(), rand_x(), rand_y());
  context.bezierCurveTo(rand_x(), rand_y(), rand_x(), rand_y(), rand_x(), rand_y());
  context.bezierCurveTo(rand_x(), rand_y(), rand_x(), rand_y(), rand_x(), rand_y());
  context.lineTo(0,600);
  context.lineTo(0,0);
  context.fillStyle = randColor();
  context.fill();
  
  context.beginPath();
  context.moveTo(1000,0);
  context.bezierCurveTo(rand_x(), rand_y(), rand_x(), rand_y(), rand_x(), rand_y());
  context.bezierCurveTo(rand_x(), rand_y(), rand_x(), rand_y(), rand_x(), rand_y());
  context.bezierCurveTo(rand_x(), rand_y(), rand_x(), rand_y(), rand_x(), rand_y());
  context.lineTo(0,0);
  context.lineTo(1000,0);
  context.fillStyle = randColor();
  context.fill();
});

function rand_x() {return Math.floor (Math.random() * 1000 + 1);}
function rand_y() {return Math.floor (Math.random() * 600 + 1);}
function rand(maximum) {return Math.floor (Math.random() * maximum + 1);}

function randColor() {
  return "rgba(" + rand(255) + "," + rand(255) + "," + rand(255) + "," + rand(100)/100 + ")";
}
