const bar = document.querySelector(".bar");
const closeBtn = document.querySelector(".close-btn");
const aside = document.querySelector("aside");

bar.addEventListener("click", () => {
  if (aside.style.marginLeft === "-400px") {
    aside.style.transition = "0.5s";
    aside.style.marginLeft = "0";
  } else {
    aside.style.transition = "0.5s";

    aside.style.marginLeft = "-400px";
  }
});

closeBtn.addEventListener("click", () => {
  aside.style.transition = "0.5s";
  aside.style.marginLeft = "-400px";
});
