const slideshow = document.querySelector(".slideshow");

setInterval(() => {
  const firstIcon = slideshow.firstElementChild;

  firstIcon.classList.add("faded-out");

  setTimeout(() => {
    slideshow.removeChild(firstIcon);
    slideshow.appendChild(firstIcon);
    setTimeout(() => {
      firstIcon.classList.remove("faded-out");
    }, 500);
  }, 500);
}, 3000);
