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

  it('should return a password containing at least one of each requirement', () => {
    const config = {
      uppercase: true,
      lowercase: true,
      symbols: true,
      numbers: true,
      charLength: 10,
    };

    const password = GeneratePassword(config);

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*()\-=_+[\]{}|;:,.<>?\]]/.test(password);

    expect(hasUppercase).toBe(true);
    expect(hasLowercase).toBe(true);
    expect(hasNumber).toBe(true);
    expect(hasSymbol).toBe(true);

  });

  it('should return a password containing mixed requirements', () => {
    const config = {
      uppercase: false,
      lowercase: true,
      symbols: true,
      numbers: false,
      charLength: 10,
    };

    const password = GeneratePassword(config);

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*()\-=_+[\]{}|;:,.<>?\]]/.test(password);

    expect(hasUppercase).toBe(false);
    expect(hasLowercase).toBe(true);
    expect(hasNumber).toBe(false);
    expect(hasSymbol).toBe(true);

  });

  it('should return not return a passowrd', () => {
    const config = {
      uppercase: false,
      lowercase: false,
      symbols: false,
      numbers: false,
      charLength: 10,
    };

    expect(() => GeneratePassword(config)).toThrow("Please select at least one option!");

  });

});
