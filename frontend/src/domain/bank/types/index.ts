/**
 * @types Bank Domain Types
 * @summary Type definitions for bank domain
 * @domain bank
 * @category types
 */

export type Bank = {
  idBank: number;
  code: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
};

export type CreateBankDto = {
  code: string;
  name: string;
};

export type UpdateBankDto = Partial<CreateBankDto>;

export type BankListParams = {
  search?: string;
  page?: number;
  limit?: number;
};

export type BankFormData = {
  code: string;
  name: string;
};
