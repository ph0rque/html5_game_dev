var img = $('#the-img');
var notice = $('#notice');

//var x_y = img.position();
var y = img.position().top;
var x = img.position().left;

var max_x = $('the-div').width(); // - img.width();
var max_y = $('the-div').height(); // - img.height();

change_notice(notice, "initial:" + " x:" + x + " y:" + y, 'ok')

$(this).keydown(function(event) {
  var key = event.keyCode;
  
  if (key == 37) {
    change_notice(notice, "←" + " x:" + x + " y:" + y, 'ok')
    
    x - 10 < 0 ? x = 0 : x -= 10;
    move(event, img, x, y);
        
  } else if (key == 38) {
    change_notice(notice, "↑" + " x:" + x + " y:" + y, 'ok')
    
    y - 10 < 0 ? y = 0 : y -= 10;
    move(event, img, x, y);
  } else if (key == 39) {
    change_notice(notice, "→" + " x:" + x + " y:" + y, 'ok')
    
    x + 10 > max_x ? x = max_x : x += 10;
    move(event, img, x, y);
  } else if (key == 40) {
    change_notice(notice, "↓" + " x:" + x + " y:" + y, 'ok')
    
    y + 10 > max_y ? y = max_y : y += 10;
    move(event, img, x, y);

  } else {
    change_notice(notice, "that's not one of the arrow keys :~/", 'wrong')
  }
});

function change_notice(notice, content, status) {
  var color = '#eeeeff';
  
    if (status == 'wrong') { color = '#FF6448'; }
    notice.css("background-color", color);
    
    notice.text(content);
}

function move(event, img, x, y) {
  event.preventDefault();

  img.css(
    {
      top: y,
      left: x
    });
}
