import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input, Button } from '@/core/components';
import type { BankFormProps } from './types';
import type { BankFormData } from '../../types';

const bankFormSchema = z.object({
  code: z
    .string()
    .length(3, 'O código do banco deve ter exatamente 3 dígitos')
    .regex(/^\d{3}$/, 'O código do banco deve conter apenas números'),
  name: z
    .string()
    .min(1, 'O nome do banco é obrigatório')
    .max(100, 'O nome do banco deve ter no máximo 100 caracteres'),
});

/**
 * @component BankForm
 * @summary Form component for creating/editing banks
 * @domain bank
 * @type domain-component
 * @category form
 *
 * @props
 * @param {Function} onSubmit - Callback when form is submitted
 * @param {Function} onCancel - Callback when form is cancelled
 * @param {boolean} isSubmitting - Loading state during submission
 * @param {Partial<BankFormData>} initialData - Initial form values
 */
export const BankForm = ({
  onSubmit,
  onCancel,
  isSubmitting = false,
  initialData,
}: BankFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BankFormData>({
    resolver: zodResolver(bankFormSchema),
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Código do Banco"
        placeholder="Ex: 001"
        maxLength={3}
        error={errors.code?.message}
        disabled={isSubmitting}
        required
        {...register('code')}
      />

      <Input
        label="Nome do Banco"
        placeholder="Ex: Banco do Brasil"
        maxLength={100}
        error={errors.name?.message}
        disabled={isSubmitting}
        required
        {...register('name')}
      />

      <div className="flex gap-3 justify-end">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
            Cancelar
          </Button>
        )}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Salvando...' : 'Salvar'}
        </Button>
      </div>
    </form>
  );
};
