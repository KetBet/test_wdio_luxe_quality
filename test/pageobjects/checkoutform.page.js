const { $ } = require("@wdio/globals");
const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutformPage extends Page {
  /**
   * define selectors using getter methods
   */

  get inputFirstName() {
    return $("#first-name");
  }

  get inputLastName() {
    return $("#last-name");
  }

  get inputZipCode() {
    return $("#postal-code");
  }

  get continueButton() {
    return $("#continue");
  }

  async checkout(firstname, lastname, zipcode) {
    await this.inputFirstName.setValue(firstname);
    await this.inputLastName.setValue(lastname);
    await this.inputZipCode.setValue(zipcode);
    await this.continueButton.click();
  }
}

module.exports = new CheckoutformPage();
