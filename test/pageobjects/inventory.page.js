const { $ } = require("@wdio/globals");
const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
  /**
   * define selectors using getter methods
   */
  get burgerMenuBtn() {
    return $("#react-burger-menu-btn");
  }

  clickBurgerMenuBtn() {
    this.burgerMenuBtn.click();
  }

  get logoutButton() {
    return $("#logout_sidebar_link");
  }

  clickLogoutButton() {
    this.logoutButton.click();
  }

  get addToCartBtn() {
    return $("#add-to-cart-sauce-labs-backpack  ");
  }

  clickAddToCartBtn() {
    this.addToCartBtn.click();
  }

  get shoppingCartLink() {
    return $("[class='shopping_cart_link']");
  }

  clickShoppingCartLink() {
    this.shoppingCartLink.click();
  }

  get sortingByNameAz() {
    return $("[value='az']");
  }

  clickSortingByNameAz() {
    this.sortingByNameAz.click();
  }

  get sortingByNameZa() {
    return $("[value='za']");
  }

  clickSortingByNameZa() {
    this.sortingByNameZa.click();
  }

  get sortingByPriceLowToHigh() {
    return $("[value='lohi']");
  }

  clickSortingByPriceLowToHigh() {
    this.sortingByPriceLowToHigh.click();
  }

  get sortingByPriceHighToLow() {
    return $("[value='hilo']");
  }

  clickSortingByPriceHighToLow() {
    this.sortingByPriceHighToLow.click();
  }

  get twitterPageLink() {
    return $("//a[text()='Twitter']");
  }

  openTwitterPageLink() {
    this.twitterPageLink.click();
  }

  get facebookPageLink() {
    return $("//a[text()='Facebook']");
  }

  openFacebookPageLink() {
    this.facebookPageLink.click();
  }

  get linkedInPageLink() {
    return $("//a[text()='LinkedIn']");
  }

  openLinkedInPageLink() {
    this.linkedInPageLink.click();
  }




}

module.exports = new InventoryPage();
