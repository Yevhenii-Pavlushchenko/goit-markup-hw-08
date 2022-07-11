(() => {
  const refs = {
    openMenuBtn: document.querySelector(".navigation-mobile__button"),
    closeMenuBtn: document.querySelector(".menu-mobile__btn-close"),
      menu: document.querySelector(".menu-mobile"),
      body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
  }
})();