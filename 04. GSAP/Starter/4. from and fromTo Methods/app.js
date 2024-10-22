// from: In from method you don't have to specify the initial state
// it will fiture out by itself

// fromTo: In fromTo method you HAVE to specify the initial state
// and the new animation state

// gsap.from(".box1", {
//     y: -200,
//     duration: 3,
//     ease: "linear",
//     repeat: -1,
//     yoyo: true
// })

gsap.fromTo(
  ".box2",
  {
    y: 200,
    opacity: 0,
  },
  {
    y: -200,
    opacity: 1,
    duration: 3,
    ease: "linear",
    borderRadius: 0,
    repeat: -1,
    yoyo: true,
  }
);
