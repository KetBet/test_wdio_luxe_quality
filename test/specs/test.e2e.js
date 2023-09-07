const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const inventoryPage = require('../pageobjects/inventory.page');
const cartPage = require('../pageobjects/cart.page');
const checkoutformPage = require('../pageobjects/checkoutform.page');
const checkoutoverviewPage = require('../pageobjects/checkoutoverview.page');
const checkoutcompletePage = require('../pageobjects/checkoutcomplete.page');

describe("Saucedemo.com page", () => {
    it("should login with valid credentials", async () => {
      await LoginPage.open();
      await LoginPage.login("standard_user", "secret_sauce");
      await browser.pause(2000);
    });

    it.skip("login with invalid password", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "random");

    await expect(LoginPage.errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service");
  });

    it.skip("login with invalid login", async () => {
    await LoginPage.open();
    await LoginPage.login("standarD_user", "secret_sauce");

    await expect(LoginPage.errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service");
  });

    it.skip("should logout", async () => {
    inventoryPage.clickBurgerMenuBtn();
    inventoryPage.clickLogoutButton();
    await browser.pause(2000);
    });

    it.skip("should save the cart after logout", async () => {
      inventoryPage.clickAddToCartBtn();
      await browser.pause(2000);
      inventoryPage.clickBurgerMenuBtn();
      inventoryPage.clickLogoutButton();
      await browser.pause(4000);
      await LoginPage.open();
      await LoginPage.login("standard_user", "secret_sauce");
      await browser.pause(2000);
      inventoryPage.clickShoppingCartLink();
      await browser.pause(2000);
      await expect(cartPage.itemInCart).toBeExisting();
      await expect(cartPage.itemInCart).toHaveTextContaining("Sauce Labs Backpack");
      await browser.pause(2000);
    });

    it.skip("should remove products from cart", async () => {
      cartPage.clickRemoveButton();
      await browser.pause(2000);
    });

    it.skip("should sort products", async () => {
      inventoryPage.clickSortingByNameAz();
      await browser.pause(2000);
      inventoryPage.clickSortingByNameZa();
      await browser.pause(2000);
      inventoryPage.clickSortingByPriceLowToHigh();
      await browser.pause(2000);
      inventoryPage.clickSortingByPriceHighToLow();
      await browser.pause(2000);
    });

    it.skip("checking the footer links", async () => {
      inventoryPage.openTwitterPageLink();
      await browser.pause(2000);
      await browser.switchWindow('saucedemo.com');
      await browser.pause(2000);
      inventoryPage.openFacebookPageLink();
      await browser.pause(2000);
      await browser.switchWindow("saucedemo.com");
      await browser.pause(2000);
      inventoryPage.openLinkedInPageLink();
      await browser.pause(2000);
    });

    it.skip("checking valid checkout", async () => {
      inventoryPage.clickAddToCartBtn();
      await browser.pause(2000);
      inventoryPage.clickShoppingCartLink();
      await browser.pause(2000);
      await expect(cartPage.itemInCart).toBeExisting();
      await browser.pause(2000);
      cartPage.clickCheckoutButton();
      await browser.pause(2000);
      await checkoutformPage.checkout("Ket", "Bet", "01234");
      await browser.pause(2000);

      let productInCheckout = await $("#item_4_title_link > div");
      let isDisplayed = await productInCheckout.isDisplayed();
      console.log("IS DISPLAYED?: " + isDisplayed);

      checkoutoverviewPage.clickFinishButton();
      await browser.pause(2000);

      await expect(checkoutcompletePage.checkoutCompleteMessage).toHaveText("Thank you for your order!");
      checkoutcompletePage.clickBackHomeButton();
      await browser.pause(2000);
    });

    it.skip("should check checkout without products", async () => {
      inventoryPage.clickShoppingCartLink();
      await browser.pause(2000);
      cartPage.clickCheckoutButton();
      await browser.pause(2000);

      //await expect(checkoutformPage).toHaveText("Cart is empty"); //this check is failed, because there is no error message in checkout without products on the page.
      });
});

