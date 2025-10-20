import { authenticatedClient } from '@/core/lib/api';
import type { Bank, CreateBankDto } from '../types';

/**
 * @service bankService
 * @summary Bank management service for authenticated endpoints
 * @domain bank
 * @type rest-service
 * @apiContext internal
 *
 * @description
 * All methods in this service use authenticatedClient which targets:
 * /api/v1/internal/bank/...
 */
export const bankService = {
  /**
   * @endpoint POST /api/v1/internal/bank
   * @summary Creates new bank
   */
  async create(data: CreateBankDto): Promise<Bank> {
    const response = await authenticatedClient.post('/bank', data);
    return response.data.data;
  },
};
