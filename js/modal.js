(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("body")
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();


// (() => {
//   const menuBtnRef = document.querySelector("[data-modal-button]");
  
//   menuBtnRef.addEventListener("click", () => {
//     const expanded = 
//       menuBtnRef.getAttribute("aria-expended") === "true" || false;
//       menuBtnRef.classList.toggle("is-open");
//     menuBtnRef.setAttribute("aria-expanded", !expanded);
//   });
  
 
  
// })();