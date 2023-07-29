const slideshow = document.querySelector(".slideshow");

setInterval(() => {
  const firstIcon = slideshow.firstElementChild;
  slideshow.removeChild(firstIcon);
  slideshow.appendChild(firstIcon);
}, 3000);
