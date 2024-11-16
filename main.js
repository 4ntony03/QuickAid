document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
  
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });
  });
  