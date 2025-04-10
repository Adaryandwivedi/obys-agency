function loadingAnimation() {
  var tl = gsap.timeline();

gsap.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
  opacity: 0,
  onStart: function () {
    var h5timer = document.querySelector("#line1-part1 h5");
    var grow = 0;
    setInterval(function () {
      if (grow < 100) {
        h5timer.innerHTML = grow++;
      } else {
        h5timer.innerHTML = grow;
      }
    }, 33);
  },
});

tl.from("#line1-part1, .line h2", {
  // Add properties for this animation if necessary
});

tl.to(".line h2", {
  animationName: "anime", // This should be a valid CSS animation
});

tl.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay: 4,
});

tl.from("#page1", {
  delay: 0.2,
  y: 1600,
  opacity: 0,
  duration: 0.5,
  ease: Power4.easeOut, // Ensure to specify ease method properly
});

tl.to("#loader", {
  display: "none",
});

tl.from("#nav", {
  opacity:0,
}); 

tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
  y:120,
  stagger: 0.2,
});

}
loadingAnimation();

function cursorAnimation() {
  document.addEventListener("mousemove", function(dets) {
  gsap.to("#crsr", {
    left:dets.x,
    top:dets.y,
  })
})

Shery.makeMagnet("#nav-part2 h4");
}
cursorAnimation();