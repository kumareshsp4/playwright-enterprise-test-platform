import { faker } from '@faker-js/faker';

export class RandomDataGenerator {
  static getFirstName() {
    return faker.person.firstName();
  }

  static getLastname() {
    return faker.person.lastName();
  }

  static getFullName() {
    return faker.person.fullName();
  }

  static getEmail() {
    return faker.internet.email();
  }

  static getRandomCity(): string {
    return faker.location.city();
  }
  static getRandomAddress(): string {
    return faker.location.streetAddress();
  }

  static getPhoneNumber() {
    return faker.phone.number();
  }

  static getRandomPassword(length: number = 10): string {
    return faker.internet.password({ length });
  }

  static getRandomNumberic(length: number): string {
    return faker.string.numeric({ length });
  }

  static getRandomAlphaNumberic(length: number): string {
    return faker.string.alphanumeric({ length });
  }

  static getRandomUUID(): string {
    return faker.string.uuid();
  }
}
