import { validateEmail } from '../src/validateEmail';

describe('validateEmail', () => {
  test('valid email should return true', () => {
    expect(validateEmail('john.doe@example.com')).toBe(true);
  });

  test('missing @ should return false', () => {
    expect(validateEmail('johndoeexample.com')).toBe(false);
  });

  test('missing domain should return false', () => {
    expect(validateEmail('john@')).toBe(false);
  });

  test('missing user should return false', () => {
    expect(validateEmail('@example.com')).toBe(false);
  });

  test('domain without dot should return false', () => {
    expect(validateEmail('john@examplecom')).toBe(false);
  });

  test('dot at end of domain should return false', () => {
    expect(validateEmail('john@example.com.')).toBe(false);
  });

  test('email with spaces should return false', () => {
    expect(validateEmail('john doe@example.com')).toBe(false);
  });
});
