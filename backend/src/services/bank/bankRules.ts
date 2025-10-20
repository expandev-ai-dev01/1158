import { dbRequest, ExpectedReturn } from '@/utils/database';
import { BankCreateRequest, BankCreateResponse } from './bankTypes';

/**
 * @summary
 * Creates a new bank with the specified code and name.
 *
 * @function bankCreate
 * @module bank
 *
 * @param {BankCreateRequest} params - Bank creation parameters
 * @param {number} params.idAccount - Account identifier
 * @param {number} params.idUser - User identifier
 * @param {string} params.code - Bank code (3 digits)
 * @param {string} params.name - Bank name
 *
 * @returns {Promise<BankCreateResponse>} Created bank entity with ID
 *
 * @throws {ValidationError} When parameters fail validation
 * @throws {BusinessRuleError} When business rules are violated (duplicate code)
 * @throws {DatabaseError} When database operation fails
 *
 * @example
 * const bank = await bankCreate({
 *   idAccount: 1,
 *   idUser: 1,
 *   code: '001',
 *   name: 'Banco do Brasil'
 * });
 */
export async function bankCreate(params: BankCreateRequest): Promise<BankCreateResponse> {
  const result = await dbRequest(
    '[functional].[spBankCreate]',
    {
      idAccount: params.idAccount,
      idUser: params.idUser,
      code: params.code,
      name: params.name,
    },
    ExpectedReturn.Single
  );

  return result;
}
