document.addEventListener("DOMContentLoaded", function () {
  const categoriesToggle = document.querySelector(".categories p");
  const categoryList = document.querySelector(".categories ul");
  const mobileMenu = document.querySelector(".mobileMenu");
  const navBar = document.querySelector(".navBar");

  if (categoriesToggle && categoryList) {
      categoriesToggle.addEventListener("click", function (event) {
          event.stopPropagation();
          categoryList.classList.toggle("active");
      });

      document.addEventListener("click", function (event) {
          if (!categoriesToggle.contains(event.target) && !categoryList.contains(event.target)) {
              categoryList.classList.remove("active");
          }
      });
  }

  // Garantir que o menu mobile mantém a funcionalidade
  mobileMenu.addEventListener("click", function () {
      if (!navBar.classList.contains("active")) {
          categoryList.classList.remove("active"); // Fecha a lista de categorias se o mobile menu for fechado
      }
  });
});
