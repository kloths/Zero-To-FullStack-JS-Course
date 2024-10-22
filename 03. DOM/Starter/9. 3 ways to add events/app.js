// ----------- BAD WAY-----------
const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function () {
  alert("bad");
};

// ----------- GREAT WAY-----------
const best = document.querySelector(".best");
best.addEventListener("click", () => alert("best"));

// ----------- Event (e) Object -----------
const para = document.querySelector(".para");
para.addEventListener("click", (e) => {
    console.log(e);
})