var ME = '[SM patch]',
    target,
    GAME_PATH = '/instant_win/play/',
    path = window.location.pathname;

// from http://stackoverflow.com/a/6158160/203790 because DOM element .click() won't work
function simulatedClick(target, options) {
  var event = target.ownerDocument.createEvent('MouseEvents');
  event.initMouseEvent('click', true, true, target.ownerDocument.defaultView);
  console.log(ME, 'FIRE', target);
  target.dispatchEvent(event);
}

if (path == '/home') {
  target = $('a[href^="'+GAME_PATH+'"').attr('href');
  console.log(ME, '[home]', 'game at ', target);
  if (target) {
    window.location.href = target;
  }
} else if (path.indexOf(GAME_PATH) == 0) {
  console.log(ME, '[game]');
  // hacky use of pauses and click events but seems to work...
  target = $('#myCanvas')[0];
  if (target) {
    setTimeout(function() { console.log(ME, 'first click', target); simulatedClick(target); }, 1000);
    setTimeout(function() { console.log(ME, 'second click', target); simulatedClick(target); }, 8000);
  }
}
