import { GeneratePassword } from './GeneratePassword';

describe('GeneratePassword', () => {
  it('should return a password of the correct length', () => {
    const config = {
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
      charLength: 10,
    };

    const password = GeneratePassword(config);

    expect(password.length).toBe(config.charLength);
  });

  // Add more tests here...
});
