(function() {
  var ME = '[SM patch v0.3]',
      el, href,
      GAME_PATH = '/instant_win/play/',
      HOME_PATH = '/home',
      CLICK_DELAY_1 = 1000,
      CLICK_DELAY_2 = 7000,
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
    // horrible use of pauses and click events...
    setTimeout(function() {
      play = document.querySelectorAll('#SvgjsImage1011');
      play = play.length ? play[0] : null;
      console.log(ME, '['+GAME_PATH+'] [play] at', play);
      if (play) {
        setTimeout(function() {
          console.log(ME, '[play] click #1', play);
          simulatedClick(play);
          setTimeout(function() {
            nxt = document.querySelectorAll('#SvgjsImage1017');
            nxt = nxt.length ? nxt[0] : null;
            console.log(ME, '['+GAME_PATH+'] [next] at', nxt);
            if(nxt) {
              console.log(ME, '[next] click #2', nxt);
              simulatedClick(nxt);
            }
          }, CLICK_DELAY_2);
        }, CLICK_DELAY_1);
      }
    }, CLICK_DELAY_1);
  }
})();
