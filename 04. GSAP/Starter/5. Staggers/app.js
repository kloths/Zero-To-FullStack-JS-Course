gsap.set(".box", {
  borderRadius: 0,
});

gsap.to(".box", {
  borderRadius: 100,
  duration: 1,
  y: -100,
  repeat: -1,
  yoyo: true,
  ease: "power1",
  stagger: {
    amount: 0.75,
    each: 0.5,
    from: 0,
  },
});
