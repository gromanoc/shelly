const menu = document.querySelector(".nav");

function Menu(menu) {
  const navIcon = menu.querySelector(".nav-icon");
  const menuList = menu.querySelector(".menu");

  navIcon.addEventListener("click", toggleMenu);

  function toggleMenu(e) {
    e.preventDefault();
    menuList.classList.toggle("open");
  }
}

Menu(menu);
