import type { ErrorMessageProps } from './types';

/**
 * @component ErrorMessage
 * @summary Error message component for displaying error states
 * @domain core
 * @type ui-component
 * @category feedback
 */
export const ErrorMessage = ({ title, message, onRetry, onBack }: ErrorMessageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-500 mb-6">{message}</p>
          <div className="flex gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded hover:bg-gray-200 transition-colors"
              >
                Voltar
              </button>
            )}
            {onRetry && (
              <button
                onClick={onRetry}
                className="flex-1 bg-primary-600 text-white py-2 px-4 rounded hover:bg-primary-700 transition-colors"
              >
                Tentar novamente
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
