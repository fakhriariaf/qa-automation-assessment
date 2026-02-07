export class CheckoutPage {

  constructor(page) {
    this.page = page;

    this.placeOrder = page.getByRole('button', { name: 'Place Order' });
    this.purchase = page.getByText('Purchase');

    this.name = page.locator('#name');
    this.country = page.locator('#country');
    this.city = page.locator('#city');
    this.card = page.locator('#card');
    this.month = page.locator('#month');
    this.year = page.locator('#year');

    this.confirmation = page.locator('.sweet-alert');
  }

  async checkout() {

    await this.placeOrder.click();

    await this.name.fill('Fakhri');
    await this.country.fill('Indonesia');
    await this.city.fill('Jakarta');
    await this.card.fill('4111111111111111');
    await this.month.fill('02');
    await this.year.fill('2026');

    await this.purchase.click();
  }

  async getOrderInfo() {
    return await this.confirmation.textContent();
  }
}
