import dotenv from 'dotenv';

dotenv.config();

export class TestConfig {
  readonly appUrl: string;
  readonly email: string;
  readonly password: string;

  constructor() {
    this.appUrl = process.env.APP_URL ?? '';
    this.email = process.env.APP_EMAIL ?? '';
    this.password = process.env.APP_PASSWORD ?? '';

    if (!this.appUrl || !this.email || !this.password) {
      throw new Error(
        'Missing required environment variables. Please check .env file: APP_URL, APP_EMAIL, APP_PASSWORD',
      );
    }
  }

  //product details
  productName = 'MacBook';
  productQuantity = '2';
  totalPrice = '$1,204.00';
}
