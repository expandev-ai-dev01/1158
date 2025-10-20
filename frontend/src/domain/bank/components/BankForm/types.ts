import type { BankFormData } from '../../types';

export type BankFormProps = {
  onSubmit: (data: BankFormData) => void;
  onCancel?: () => void;
  isSubmitting?: boolean;
  initialData?: Partial<BankFormData>;
};
