const { $ } = require("@wdio/globals");
const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutoverviewPage extends Page {
  /**
   * define selectors using getter methods
   */

  get finishButton() {
    return $("#finish");
  }

  clickFinishButton() {
    this.finishButton.click();
  }
}

module.exports = new CheckoutoverviewPage();
