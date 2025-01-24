const links = document.querySelectorAll(".nav-link");

for (const link of links) {
  link.addEventListener("click", scrollToSection);
}

function scrollToSection(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  const navbarHeight = document.querySelector(".sticky-nav").offsetHeight

  scroll({
    top: offsetTop - navbarHeight,
    behavior: "smooth"
  });
}