const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

//animation for the play button on hover on video
const videoConAnimation = () => {
  var videoCon = document.querySelector("#video-container");
  var playbtn = document.querySelector("#play");
  videoCon.addEventListener("mouseenter", () => {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });
  videoCon.addEventListener("mouseleave", () => {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });
  videoCon.addEventListener("mousemove", (dets) => {
    gsap.to(playbtn, {
      left: dets.x - 70,
      top: dets.y - 150,
    });
  });
};

videoConAnimation();

//animation for the h1:-"CHANGE THE COURSE"
const loadingAnimation = () => {
  const tl = gsap.timeline();
  tl.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.3,
    duration: 0.7,
    stagger: 0.3,
  });
  tl.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: -0.25,
    duration: 0.3,
  });
};

loadingAnimation();
