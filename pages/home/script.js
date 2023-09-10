let moon = document.getElementById("moon");
let subTitle = document.getElementById("sub-title");
let train = document.getElementById("train");

let moonDesert = document.getElementById("desert-moon");
let man = document.getElementById("man");

window.addEventListener("scroll", () => {
  let heightScroll = window.scrollY;
  moon.style.top = heightScroll * 0.9 + "px";
  subTitle.style.top = 80 + heightScroll * -0.2 + "%";
  train.style.left = heightScroll * 1.5 + "px";

  moonDesert.style.top = heightScroll * 0.3 + "px";
  man.style.left = heightScroll * 0.5 + "px";
});

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;

  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  let scrollValue = Math.round((pos * 100)/calcHeight)

  if(pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%, #67ccff ${scrollValue}%)`
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
