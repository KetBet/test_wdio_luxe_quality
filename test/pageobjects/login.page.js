const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get clickLogin() {
    return $("#login-button");
  }

  get errorMessage() {
    return $(
      '//*[text()="Epic sadface: Username and password do not match any user in this service"]'
    );
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.clickLogin.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

module.exports = new LoginPage();
