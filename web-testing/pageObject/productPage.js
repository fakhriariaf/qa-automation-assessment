export class ProductPage {

  constructor(page) {
    this.page = page;
    this.addToCartBtn = page.getByText('Add to cart');
    this.cartMenu = page.locator('#cartur');
  }

  async addToCart() {
    this.page.once('dialog', dialog => dialog.accept());
    await this.addToCartBtn.click();
  }

  async goToCart() {
    await this.cartMenu.click();
  }
}
