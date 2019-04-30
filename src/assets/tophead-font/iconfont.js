!(function(s) {
  var e,
    n =
      '<svg><symbol id="icon-back" viewBox="0 0 1024 1024"><path d="M156.608 487.8592c1.156267-1.137067 2.648533-1.6224 3.918933-2.558933l306.666667-301.569067c13.195733-12.970667 34.586667-12.970667 47.781333 0 13.194667 12.978133 13.194667 34.013867 0 46.987733L263.3024 478.210133l579.2032 0c18.978133 0 34.362667 15.128533 34.362667 33.789867 0 18.6624-15.384533 33.793067-34.362667 33.793067L263.3024 545.793067l251.671467 247.486933c13.194667 12.971733 13.194667 34.010667 0 46.984533-13.194667 12.974933-34.586667 12.974933-47.781333 0l-306.666667-301.5616c-1.269333-0.939733-2.762667-1.421867-3.918933-2.562133-6.334933-6.2304-9.240533-14.340267-9.477333-22.5024C147.367467 502.200533 150.273067 494.090667 156.608 487.8592L156.608 487.8592zM156.608 487.8592"  ></path></symbol><symbol id="icon-user" viewBox="0 0 1024 1024"><path d="M907.788 819.637c-21.631-51.141-52.593-97.064-92.025-136.498-39.434-39.433-85.358-70.394-136.498-92.024a427.22 427.22 0 0 0-55.298-19.058c27.979-12.982 53.754-30.915 76.214-53.375 50.238-50.238 77.906-117.033 77.906-188.081s-27.668-137.843-77.906-188.082S583.147 64.613 512.1 64.613 374.257 92.28 324.018 142.519s-77.906 117.034-77.906 188.082 27.667 137.843 77.906 188.081c22.46 22.46 48.236 40.393 76.215 53.375a427.22 427.22 0 0 0-55.298 19.058c-51.14 21.631-97.064 52.592-136.497 92.025-39.433 39.433-70.395 85.356-92.025 136.497-18.872 44.619-29.905 91.571-32.911 139.921h40.106c14.031-202.079 182.91-362.2 388.492-362.2 205.582 0 374.462 160.121 388.494 362.199h40.105c-3.007-48.349-14.039-95.301-32.911-139.92zM286.112 330.601c0-124.61 101.377-225.987 225.987-225.987s225.987 101.377 225.987 225.987S636.71 556.588 512.1 556.588c-124.61 0-225.988-101.378-225.988-225.987z"  ></path></symbol><symbol id="icon-youjiantou" viewBox="0 0 1024 1024"><path d="M385.174312 788.414961c-6.503881 0-13.007763-2.16796-18.066337-7.226535-10.117149-10.117149-10.117149-26.015526 0-35.410021l231.249117-231.249118c1.445307-1.445307 1.445307-4.335921 0-5.781228l-231.249117-232.694425c-10.117149-10.117149-10.117149-26.015526 0-36.132674s26.015526-10.117149 36.132674 0l231.971772 231.971771c21.679605 21.679605 21.679605 56.366972 0 77.323924l-231.249118 231.249118c-5.781228 5.781228-12.285109 7.949188-18.788991 7.949188z"  ></path></symbol></svg>',
    t = (e = document.getElementsByTagName("script"))[
      e.length - 1
    ].getAttribute("data-injectcss");
  if (t && !s.__iconfont__svg__cssinject__) {
    s.__iconfont__svg__cssinject__ = !0;
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
        (o = s.document),
        (c = !1),
        (i = function() {
          c || ((c = !0), n());
        }),
        (l = function() {
          try {
            o.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(l, 50);
          }
          i();
        })(),
        (o.onreadystatechange = function() {
          "complete" == o.readyState && ((o.onreadystatechange = null), i());
        }));
    var n, o, c, i, l;
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
