
import Header from "./header";
import Footer from "./footer";

class MainApp {
  constructor() {
    this.init();
  }

  init() {
    this.header = new Header();
    this.footer = new Footer();

    this.initBackToTop();
  }
}


jQuery(document).ready(function ($) {
  const app = new MainApp();
});
