(function() {
  var ME = '[SM patch v0.4]',
      el, href, img,
      GAME_PATH = '/instant_win/play/',
      PROF_PATH = '/selfprofiler',
      SURV_CLASS = 'take-a-survey',
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

  console.log(ME);
  if (path == HOME_PATH) {
    // look for an instant win game link
    el = document.querySelectorAll('a[href^="'+GAME_PATH+'"');
    href = el.length ? el[0].getAttribute('href') : null;
    if (href) {
      console.log(ME, '['+HOME_PATH+'] game link at', href);
      window.location.href = href;
    }
    // look for a fill profile link
    el = document.querySelector('#homepage-hero a[href^="'+PROF_PATH+'"');
    if (!!el) {
      console.log(ME, '['+HOME_PATH+'] profile link at', href);
      window.location.href = PROF_PATH;
    }
    // look for take a survey
    el = document.querySelectorAll('a.'+SURV_CLASS+'');
    if (el.length) {
      console.log(ME, '['+HOME_PATH+'] survey link at', el[0]);
      setTimeout(function() { simulatedClick(el[0]); }, CLICK_DELAY_1);
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
