const { $ } = require("@wdio/globals");
const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutcompletePage extends Page {
  /**
   * define selectors using getter methods
   */

  get checkoutCompleteMessage() {
    return $("//*[text()='Thank you for your order!']");
  }
  
  get backHomeButton() {
    return $("#back-to-products");
  }

  clickBackHomeButton() {
    this.backHomeButton.click();
  }
}

module.exports = new CheckoutcompletePage();
