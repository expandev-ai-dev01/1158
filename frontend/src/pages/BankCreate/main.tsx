import { useNavigate } from 'react-router-dom';
import { BankForm } from '@/domain/bank/components/BankForm';
import { useBankCreate } from '@/domain/bank/hooks/useBankCreate';
import type { BankFormData } from '@/domain/bank/types';

/**
 * @page BankCreatePage
 * @summary Page for creating new banks in the system
 * @domain bank
 * @type form-page
 * @category management
 *
 * @routing
 * - Path: /banks/new
 * - Guards: Authentication required
 *
 * @layout
 * - Layout: RootLayout
 * - Sections: Header, Form
 *
 * @data
 * - Sources: Bank API
 * - Loading: Form submission state
 *
 * @userFlows
 * - Primary: Fill form and submit to create bank
 * - Secondary: Cancel and return to list
 * - Error: Display validation or API errors
 */
export const BankCreatePage = () => {
  const navigate = useNavigate();
  const { createBank, isCreating } = useBankCreate({
    onSuccess: () => {
      navigate('/banks');
    },
    onError: (error) => {
      console.error('Error creating bank:', error);
    },
  });

  const handleSubmit = async (data: BankFormData) => {
    try {
      await createBank(data);
    } catch (error) {
      // Error is handled by the hook
    }
  };

  const handleCancel = () => {
    navigate('/banks');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Cadastrar Novo Banco</h2>
        <p className="text-gray-600 mt-2">
          Preencha as informações abaixo para cadastrar um novo banco no sistema
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <BankForm onSubmit={handleSubmit} onCancel={handleCancel} isSubmitting={isCreating} />
      </div>
    </div>
  );
};

export default BankCreatePage;
