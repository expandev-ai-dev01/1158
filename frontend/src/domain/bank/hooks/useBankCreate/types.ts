import type { CreateBankDto, Bank } from '../../types';

export type UseBankCreateOptions = {
  onSuccess?: (bank: Bank) => void;
  onError?: (error: Error) => void;
};

export type UseBankCreateReturn = {
  createBank: (data: CreateBankDto) => Promise<Bank>;
  isCreating: boolean;
  error: Error | null;
};
