  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    console.log(header)
    header.classList.toggle("scroll-nav", window.scrollY > 600);
  });
