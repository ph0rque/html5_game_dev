$(this).keydown(function(e) {
  key = e.keyCode;
  if (key == 37) {
    alert('You pressed the left arrow.');
  } else if (key == 38) {
    alert('You pressed the up arrow.');
  } else if (key == 39) {
    alert('You pressed the right arrow.');
  } else if (key == 40) {
    alert('You pressed the down arrow.');
  } else {
    //do nothing
  }
});
