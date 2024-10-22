// gsap.method(element vars obj)

gsap.to(".box", {
  duration: 2,
  x: 200,
  y: 200,
  scale: 1.5,
  ease: "elastic.inOut(1.5)",
  rotation: 360,
  repeat: -1,
  yoyo: true,
  transformOrigin: "center", // center the rotation point around the center of the element
});
