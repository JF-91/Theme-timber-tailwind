export default class Footer {
  constructor() {
    this.initFooter();
  }

  initFooter() {
    this.initBackToTop();
  }

  initBackToTop() {
    jQuery(document).ready(($) => {

      $("#back-to-top").click(() => {
        $("html, body").animate({ scrollTop: 0 }, "slow", () => {
        });
        return false; 
      });
    });
  }
}

