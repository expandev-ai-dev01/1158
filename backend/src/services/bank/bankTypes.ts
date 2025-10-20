/**
 * @interface BankEntity
 * @description Represents a bank entity in the system
 *
 * @property {number} idBank - Unique bank identifier
 * @property {number} idAccount - Associated account identifier
 * @property {string} code - Bank code (3 digits)
 * @property {string} name - Bank name
 * @property {Date} dateCreated - Creation timestamp
 * @property {Date} dateModified - Last modification timestamp
 * @property {boolean} deleted - Soft delete flag
 */
export interface BankEntity {
  idBank: number;
  idAccount: number;
  code: string;
  name: string;
  dateCreated: Date;
  dateModified: Date;
  deleted: boolean;
}

/**
 * @interface BankCreateRequest
 * @description Request parameters for creating a new bank
 *
 * @property {number} idAccount - Account identifier
 * @property {number} idUser - User identifier
 * @property {string} code - Bank code (3 digits)
 * @property {string} name - Bank name
 */
export interface BankCreateRequest {
  idAccount: number;
  idUser: number;
  code: string;
  name: string;
}

/**
 * @interface BankCreateResponse
 * @description Response from bank creation operation
 *
 * @property {number} idBank - Created bank identifier
 */
export interface BankCreateResponse {
  idBank: number;
}
