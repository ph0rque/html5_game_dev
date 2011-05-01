$(this).keydown(function(e) {
  key = e.keyCode;
  img = $('#the-img');
  
  if (key == 37) {
    img.animate(
      {left: '-=10' },
      100
    );
  } else if (key == 38) {
    img.animate(
      {top: '-=10' },
      100
    );
  } else if (key == 39) {
    img.animate(
      {left: '+=10' },
      100
    );
  } else if (key == 40) {
    img.animate(
      {top: '+=10' },
      100
    );
  } else {
    //do nothing
  }
});
