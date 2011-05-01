$(this).keydown(function(e) {
  key = e.keyCode;
  img = $('#the-img');
  notice = $('#notice');
  
  if (key == 37) {
    notice.css("background-color", '#eeeeff');
    notice.text("←");
    
    img.stop();
    img.animate(
      {left: '-=10' },
      100
    );
  } else if (key == 38) {
    notice.css("background-color", '#eeeeff');
    notice.text("↑");
    
    img.stop();
    img.animate(
      {top: '-=10' },
      100
    );
  } else if (key == 39) {
    notice.css("background-color", '#eeeeff');
    notice.text("→");
    
    img.stop();
    img.animate(
      {left: '+=10' },
      100
    );
  } else if (key == 40) {
    notice.css("background-color", '#eeeeff');
    notice.text("↓");
    
    img.stop();
    img.animate(
      {top: '+=10' },
      100
    );
  } else {
    notice.text("Sorry bub, that's not one of the arrow keys :~/");
    notice.css("background-color", '#FF6448');
  }
});
