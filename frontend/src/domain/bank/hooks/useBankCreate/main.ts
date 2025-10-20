import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bankService } from '../../services/bankService';
import type { UseBankCreateOptions, UseBankCreateReturn } from './types';

/**
 * @hook useBankCreate
 * @summary Hook for creating new banks with optimistic updates
 * @domain bank
 * @type domain-hook
 * @category data
 *
 * @dependencies
 * - bankService: Bank API service
 * - TanStack Query: For mutation management
 */
export const useBankCreate = (options: UseBankCreateOptions = {}): UseBankCreateReturn => {
  const { onSuccess, onError } = options;
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: bankService.create,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['banks'] });
      onSuccess?.(data);
    },
    onError: (error: Error) => {
      onError?.(error);
    },
  });

  return {
    createBank: mutation.mutateAsync,
    isCreating: mutation.isPending,
    error: mutation.error,
  };
};
