const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const restart = document.querySelector(".restart");

const tween = gsap.to(".box", {
  duration: 5,
  x: 200,
  ease: "elastic.out(1, 0.3)",
});

play.addEventListener("click", () => tween.play());
pause.addEventListener("click", () => tween.pause());
restart.addEventListener("click", () => tween.restart());
