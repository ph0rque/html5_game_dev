var img = $('#the-img');
var notice = $('#notice');


var y = 0;
var x = 0;

var max_x = $('#the-div').width() - img.width();
var max_y = $('#the-div').height() - img.height();

var container_position = $('#the-div').position();
var container_position_x = container_position.left + img.width();
var container_position_y = container_position.top + img.height();

$('#the-div').mousemove(function(event) {
  notice.text('✩ ✩ ✩ ✩ ✩');
  
  move(event.pageX - container_position_x, event.pageY - container_position_y);
});

$('#the-div').mouseout(function(event) {
  notice.text('Good job! Now do it again!');
});

function move(x, y) {
  img.stop();

  if (x > max_x) {x = max_x}
  if (y > max_y) {y = max_y}
  if (x < 0) {x = 0}
  if (y < 0) {y = 0}
    
  img.animate(
    {
      top: y,
      left: x
    }, 100
  );
}
