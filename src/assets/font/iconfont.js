!(function(a) {
  var e,
    n =
      '<svg><symbol id="icon-fuxuankuang_xuanzhong" viewBox="0 0 1024 1024"><path d="M904 64c14.8 0 28.9 5.9 39.5 16.5C954.1 91.1 960 105.2 960 120v784c0 14.8-5.9 28.9-16.5 39.5-10.6 10.6-24.7 16.5-39.5 16.5H120c-14.8 0-28.9-5.9-39.5-16.5C69.9 932.9 64 918.8 64 904V120c0-14.8 5.9-28.9 16.5-39.5C91.1 69.9 105.2 64 120 64h784m0-64H120C54 0 0 54 0 120v784c0 66 54 120 120 120h784c66 0 120-54 120-120V120c0-66-54-120-120-120z" fill="" ></path><path d="M415.2 698L236.9 519.7c-12.4-12.4-12.4-32.7 0-45.1l0.1-0.1c12.4-12.4 32.7-12.4 45.1 0l178.3 178.3c12.4 12.4 12.4 32.7 0 45.1l-0.1 0.1c-12.4 12.4-32.7 12.4-45.1 0z" fill="" ></path><path d="M787.1 371.2L460.3 698c-12.4 12.4-32.7 12.4-45.1 0l-0.1-0.1c-12.4-12.4-12.4-32.7 0-45.1L741.9 326c12.4-12.4 32.7-12.4 45.1 0l0.1 0.1c12.4 12.4 12.4 32.7 0 45.1z" fill="" ></path></symbol><symbol id="icon-fuxuankuang_weixuanzhong" viewBox="0 0 1024 1024"><path d="M904 64c14.8 0 28.9 5.9 39.5 16.5C954.1 91.1 960 105.2 960 120v784c0 14.8-5.9 28.9-16.5 39.5-10.6 10.6-24.7 16.5-39.5 16.5H120c-14.8 0-28.9-5.9-39.5-16.5C69.9 932.9 64 918.8 64 904V120c0-14.8 5.9-28.9 16.5-39.5C91.1 69.9 105.2 64 120 64h784m0-64H120C54 0 0 54 0 120v784c0 66 54 120 120 120h784c66 0 120-54 120-120V120c0-66-54-120-120-120z" fill="" ></path></symbol></svg>',
    t = (e = document.getElementsByTagName("script"))[
      e.length - 1
    ].getAttribute("data-injectcss");
  if (t && !a.__iconfont__svg__cssinject__) {
    a.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  !(function(e) {
    if (document.addEventListener)
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState))
        setTimeout(e, 0);
      else {
        var t = function() {
          document.removeEventListener("DOMContentLoaded", t, !1), e();
        };
        document.addEventListener("DOMContentLoaded", t, !1);
      }
    else
      document.attachEvent &&
        ((n = e),
        (c = a.document),
        (o = !1),
        (i = function() {
          o || ((o = !0), n());
        }),
        (l = function() {
          try {
            c.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(l, 50);
          }
          i();
        })(),
        (c.onreadystatechange = function() {
          "complete" == c.readyState && ((c.onreadystatechange = null), i());
        }));
    var n, c, o, i, l;
  })(function() {
    var e, t;
    ((e = document.createElement("div")).innerHTML = n),
      (n = null),
      (t = e.getElementsByTagName("svg")[0]) &&
        (t.setAttribute("aria-hidden", "true"),
        (t.style.position = "absolute"),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = "hidden"),
        (function(e, t) {
          t.firstChild
            ? (function(e, t) {
                t.parentNode.insertBefore(e, t);
              })(e, t.firstChild)
            : t.appendChild(e);
        })(t, document.body));
  });
})(window);
