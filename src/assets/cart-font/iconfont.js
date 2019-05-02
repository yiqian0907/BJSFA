!(function(l) {
  var e,
    n =
      '<svg><symbol id="icon-web-icon-" viewBox="0 0 1024 1024"><path d="M706.912 858.816h-425.6a120.576 120.576 0 0 1-120.448-120.448V312.864a120.576 120.576 0 0 1 120.448-120.448h287.104v28.096H281.312a92.48 92.48 0 0 0-92.352 92.352v425.536a92.48 92.48 0 0 0 92.352 92.352h425.6a92.416 92.416 0 0 0 92.352-92.352v-246.528h28.096v246.528a120.576 120.576 0 0 1-120.448 120.416m140.352-614.848zM388.832 635.68l53.92-188.032 248.288-246.176 22.912-22.784c17.664-17.472 47.616-18.112 64.48-1.376l72.032 71.584c8.16 8.096 12.64 19.008 12.672 30.752 0 12.352-5.152 24.576-14.112 33.536l-43.936 43.552-0.032-0.032-227.2 225.792-189.024 53.184m78.88-173.248l-37.984 132.544 133.536-37.568 240.576-239.136 0.064 0.064 25.312-25.088a19.456 19.456 0 0 0 5.856-13.6 15.168 15.168 0 0 0-4.384-10.848l-72.032-71.584c-6.176-6.144-17.952-5.504-24.896 1.376l-42.688 42.464-0.032-0.032-223.328 221.408"  ></path></symbol></svg>',
    t = (e = document.getElementsByTagName("script"))[
      e.length - 1
    ].getAttribute("data-injectcss");
  if (t && !l.__iconfont__svg__cssinject__) {
    l.__iconfont__svg__cssinject__ = !0;
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
        (o = l.document),
        (i = !1),
        (c = function() {
          i || ((i = !0), n());
        }),
        (a = function() {
          try {
            o.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(a, 50);
          }
          c();
        })(),
        (o.onreadystatechange = function() {
          "complete" == o.readyState && ((o.onreadystatechange = null), c());
        }));
    var n, o, i, c, a;
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
