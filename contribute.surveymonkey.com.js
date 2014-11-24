(function() {
  var ME = '[SM patch v0.2]',
      el, href,
      GAME_PATH = '/instant_win/play/',
      HOME_PATH = '/home',
      GAME_CLICK_DELAY_1 = 2000,
      GAME_CLICK_DELAY_2 = 9000,
      path = window.location.pathname;

  // from http://stackoverflow.com/a/6158160/203790 because DOM element .click() won't work
  var simulatedClick = function(el) {
    var event = el.ownerDocument.createEvent('MouseEvents');
    event.initMouseEvent('click', true, true, el.ownerDocument.defaultView);
    el.dispatchEvent(event);
  };

  if (path == HOME_PATH) {
    el = document.querySelectorAll('a[href^="'+GAME_PATH+'"');
    href = el.length ? el[0].getAttribute('href') : null;
    console.log(ME, '['+HOME_PATH+'] at', href);
    if (href) {
      window.location.href = href;
    }
  } else if (path.indexOf(GAME_PATH) == 0) {
    // hacky use of pauses and click events but seems to work...
    el = document.querySelectorAll('#myCanvas');
    el = el.length ? el[0] : null;
    console.log(ME, '['+GAME_PATH+'] at', el);
    if (el) {
      setTimeout(function() { console.log(ME, 'click #1', el); simulatedClick(el); }, GAME_CLICK_DELAY_1);
      setTimeout(function() { console.log(ME, 'click #2', el); simulatedClick(el); }, GAME_CLICK_DELAY_2);
    }
  }
})();
