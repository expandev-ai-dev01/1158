/**
 * @utility formatters
 * @summary Common formatting utilities for the application
 * @category utilities
 */

/**
 * @function formatDate
 * @summary Formats a date to Brazilian format (DD/MM/YYYY)
 */
export const formatDate = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('pt-BR');
};

/**
 * @function formatDateTime
 * @summary Formats a date and time to Brazilian format (DD/MM/YYYY HH:mm)
 */
export const formatDateTime = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleString('pt-BR');
};

/**
 * @function formatCurrency
 * @summary Formats a number to Brazilian currency format (R$ 1.234,56)
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
