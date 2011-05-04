var img = $('#the-img');
var notice = $('#notice');

//var x_y = img.position();
var y = 0 // y u no work? x_y.top;
var x = 0 //same here... x_y.left;

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

  if (x > max_x) {x = max_x}
  if (y > max_y) {y = max_y}
  if (x < 0) {x = 0}
  if (y < 0) {y = 0}
    
  img.css(
    {
      top: y,
      left: x
    }
  );
}

