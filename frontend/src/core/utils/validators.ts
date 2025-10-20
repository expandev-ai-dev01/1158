/**
 * @utility validators
 * @summary Common validation utilities for the application
 * @category utilities
 */

/**
 * @function isValidEmail
 * @summary Validates if a string is a valid email address
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * @function isValidBankCode
 * @summary Validates if a string is a valid Brazilian bank code (3 digits)
 */
export const isValidBankCode = (code: string): boolean => {
  const codeRegex = /^\d{3}$/;
  return codeRegex.test(code);
};
