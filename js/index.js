// eye move with mouse
var balls = document.getElementsByClassName("ball");
document.onmousemove = function() {
  var x = (event.clientX * 100) / window.innerWidth + "%";
  var y = (event.clientY * 100) / window.innerHeight + "%";

  balls[0].style.left = x;
  balls[0].style.top = y;
  balls[0].style.transform = "translate(-" + x + ",-" + y + ")";
};

// events animation
const animateBadge = () => {
  TweenMax.to("#side1", 1, {
    left: "-30px",
    opacity: 1,
    ease: Power2.easeInOut
  });
  TweenMax.to("#side2", 1, {
    left: "-30px",
    opacity: 1,
    ease: Power2.easeInOut
  });
  TweenMax.to("#side3", 1, {
    left: "-30px",
    opacity: 1,
    ease: Power2.easeInOut
  });
  TweenMax.to("#side4", 1, {
    left: "-30px",
    opacity: 1,
    ease: Power2.easeInOut
  });
  TweenMax.to("#side5", 1, {
    left: "-30px",
    opacity: 1,
    ease: Power2.easeInOut
  });
  TweenMax.to("#side6", 1, {
    left: "-30px",
    opacity: 1,
    ease: Power2.easeInOut
  });
  console.log("anim1 done");
};

const rotateBadge = () => {
  console.log("anim2 start");
  TweenLite.defaultEase = Linear.easeNone;

  var tl = new TimelineMax({ repeat: -1 });

  //   tl.to(".rad", 5, { rotation: 360, transformOrigin: "right" });
  //   tl.to(".sides", 5, { rotation: -360 }, 0);
};


// // hover animation
// const onHover = (id) =>{
//   console.log("mouse hover");
//   var iid = "#"+id;
//   console.log(iid);
//   TweenMax.to("#side_txt2",1,{
//     opacity: 1,
//     transform: "translateY(10%)",
//     ease: Power2.easeInOut
//   })
// }

// // var side = document.getElementsByClassName("sides");
// document.getElementById("side2").addEventListener("mouseover", onHover("side_txt2"));

