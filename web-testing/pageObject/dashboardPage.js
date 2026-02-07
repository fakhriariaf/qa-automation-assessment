export class DashboardPage {

  constructor(page) {
    this.page = page;
    this.product = page.getByRole('link', { name: 'Samsung galaxy s6' });
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com');
  }

  async selectProduct() {
    await this.product.click();
  }
}
