// Smooth scroll
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Active section highlight
  window.addEventListener("scroll", () => {
    let current = "";
    document.querySelectorAll("section").forEach(sec => {
      if (scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    document.querySelectorAll("nav ul li a").forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) link.classList.add("active");
    });
  });
  