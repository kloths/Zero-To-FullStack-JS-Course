const timeline = gsap
  .timeline({
    default: {
      duration: 1,
    },
  })
  .to("h1", {
    y: -100,
    color: "white",
  })
  .to(".box1", {
    x: -100,
    background: "pink",
  })
  .to(".box2", {
    y: 100,
    background: "purple",
  })
  .to(".box3", {
    x: 100,
    background: "crimson",
  });
