$(document).ready(function () {
  // set the text stuff to the bottom
  $("#home-body").css({ top: $('#bg').height() - 50 });
  $("#bg1").css({ top: "0em" });
  $("#title-box").css({ top: ($('#bg').height() / 5) });
  parallax(0);

  $(document).scroll(function () {
    parallax($(window).scrollTop());
  });

  $(window).resize(function () {
    parallax($(window).scrollTop());
  })
});

function parallax(scrollTop) {
  $("#bg1").css({ top: -(scrollTop / 30) });
  $("#bg2").css({ top: scrollTop / 4 });
  $("#bg3").css({ top: scrollTop / 3.3 });
  $("#bg4").css({ top: scrollTop / 3 });
  $("#bg5").css({ top: scrollTop / 2.8 });
  $("#bg6").css({ top: scrollTop / 2.6 });
  $("#bg7").css({ top: scrollTop / 2.4 });
  $("#bg8").css({ top: scrollTop / 2.2 });
  $("#bg9").css({ top: scrollTop / 2 });

  $("#home-body").css({ top: $('#bg1').height() - 50 });

  $("#menu").css({ top: 30 + scrollTop / 2.2 });
  $("#title-box").css({ top: ($('#bg').height() / 5) + scrollTop / 2.2 });
}
