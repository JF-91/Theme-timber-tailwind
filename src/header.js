export default class Header {
  constructor() {
    // Seleccionar los elementos del menú y el botón con jQuery
    this.menuToggle = jQuery("#menu-toggle"); // Botón del menú
    this.navbarMenu = jQuery("#navbar-solid-bg"); // Menú desplegable

    // Inicializar el header
    this.initHeader();
  }

  initHeader() {
    console.log("Header initialized");

    // Asegurarnos de que los elementos existen antes de agregar el evento
    if (this.menuToggle.length && this.navbarMenu.length) {
      console.log("Menu toggle and navbar menu found");

      // Agregar el evento de clic con jQuery
      this.menuToggle.on("click", () => this.toggleMenu());
    } else {
      console.warn("Menu toggle or navbar menu not found");
    }
  }

  toggleMenu() {
    console.log("Toggle menu clicked");

    // Alterna la clase 'hidden' en el menú desplegable usando jQuery
    this.navbarMenu.toggleClass("hidden");

    // Para confirmar, imprime el estado actual del menú
    console.log(
      "Navbar menu hidden state:",
      this.navbarMenu.hasClass("hidden")
    );
  }
}
