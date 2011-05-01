$(this).keydown(function(e) {
  key = e.keyCode;
  img = $('#the-img');
  notice = $('#notice');
  
  if (key == 37) {
    notice.text("←");
    img.animate(
      {left: '-=10' },
      100
    );
  } else if (key == 38) {
    notice.text("↑");
    img.animate(
      {top: '-=10' },
      100
    );
  } else if (key == 39) {
    notice.text("→");
    img.animate(
      {left: '+=10' },
      100
    );
  } else if (key == 40) {
    notice.text("↓");
    img.animate(
      {top: '+=10' },
      100
    );
  } else {
    notice.text("Sorry bub, that's not one of the arrow keys :~/");
  }
});
