class MobileNavBar {
  constructor(mobileMenu, navList) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = this.navList.querySelectorAll(".fade");
    this.activeClass = "active";
    
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation = link.style.animation 
        ? "" 
        : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
  }

  handleClick() {
    const isActive = this.navList.classList.contains(this.activeClass);
    
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.mobileMenu.setAttribute("aria-expanded", !isActive);
    this.animateLinks();

    if (!isActive) {
      document.addEventListener("click", this.handleOutsideClick);
    } else {
      document.removeEventListener("click", this.handleOutsideClick);
    }
  }

  handleOutsideClick(event) {
    if (!this.mobileMenu.contains(event.target) && !this.navList.contains(event.target)) {
      this.handleClick();
    }
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavBar = new MobileNavBar(".mobileMenu", ".navBar");
mobileNavBar.init();
