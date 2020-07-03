(function () {
  $(function () {
    var n, e, t;
    return n = function () {
      return $("h1").append("<span>"), $("h1 span").css({
        display: "block",
        width: "0px",
        height: "26px",
        background: "#fff",
        "margin-top": "21px"
      }).animate({width: t + "px"}, 800), setTimeout(function () {
        return $("body").removeClass("loading")
      }, 1e3)
    }, -1 !== navigator.appVersion.indexOf("Windows") && $("body").addClass("pcuser"), e = $("html").attr("lang"), "zh" === e ? (t = 439, "en" === navigator.language.substring(0, 2)) : t = 264, $(".subjects_top li, .courses li > a:first-of-type").on("mouseenter mouseleave", function (n) {
      return "mouseenter" === n.type ? $("body").addClass("hover") : $("body").removeClass("hover")
    }), $(window).on("load", function () {
      return window.innerWidth > 620 ? n() : $("body").removeClass("loading")
    })
  }), $(window).resize(function () {
    return $(window).width() <= 620
      ?
      ($("h2").hide(), $("h1 span").hide(), $(".courses li:first-child, .subjects, #anim").hide())
      :
      ($("h2").show(), $("h1 span").show(), $(".courses li:first-child, .subjects, #anim").show())
  })
}).call(this);