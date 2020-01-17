// eye move with mouse
var balls = document.getElementsByClassName("ball");
document.onmousemove = function() {
  var x = (event.clientX * 100) / window.innerWidth + "%";
  var y = (event.clientY * 100) / window.innerHeight + "%";

  balls[0].style.left = x;
  balls[0].style.top = y;
  balls[0].style.transform = "translate(-" + x + ",-" + y + ")";
};

// scroll to section
function goToByScroll(id) {
  $("html,body").animate({ scrollTop: $("#" + id).offset().top }, "slow");
}
