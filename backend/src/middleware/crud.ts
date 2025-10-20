import { Request } from 'express';
import { z } from 'zod';
import { ApiError } from './error';

export interface SecurityCheck {
  securable: string;
  permission: 'CREATE' | 'READ' | 'UPDATE' | 'DELETE';
}

export interface ValidatedRequest<T = any> {
  credential: {
    idAccount: number;
    idUser: number;
  };
  params: T;
}

export class CrudController {
  private securityChecks: SecurityCheck[];

  constructor(securityChecks: SecurityCheck[]) {
    this.securityChecks = securityChecks;
  }

  private async validateSecurity(req: Request): Promise<{ idAccount: number; idUser: number }> {
    const idAccount = 1;
    const idUser = 1;

    return { idAccount, idUser };
  }

  private async validateParams<T>(req: Request, schema: z.ZodSchema<T>): Promise<T> {
    try {
      const validated = await schema.parseAsync(req.body);
      return validated;
    } catch (error: any) {
      const validationError: ApiError = {
        name: 'ValidationError',
        message: 'Validation failed',
        statusCode: 422,
        code: 'VALIDATION_ERROR',
        details: error.errors,
      };
      throw validationError;
    }
  }

  async create<T>(
    req: Request,
    schema: z.ZodSchema<T>
  ): Promise<[ValidatedRequest<T> | null, ApiError | null]> {
    try {
      const credential = await this.validateSecurity(req);
      const params = await this.validateParams(req, schema);
      return [{ credential, params }, null];
    } catch (error: any) {
      return [null, error];
    }
  }

  async read<T>(
    req: Request,
    schema: z.ZodSchema<T>
  ): Promise<[ValidatedRequest<T> | null, ApiError | null]> {
    try {
      const credential = await this.validateSecurity(req);
      const paramsData = { ...req.params, ...req.query };
      const params = await schema.parseAsync(paramsData);
      return [{ credential, params }, null];
    } catch (error: any) {
      const validationError: ApiError = {
        name: 'ValidationError',
        message: 'Validation failed',
        statusCode: 422,
        code: 'VALIDATION_ERROR',
        details: error.errors,
      };
      return [null, validationError];
    }
  }

  async update<T>(
    req: Request,
    schema: z.ZodSchema<T>
  ): Promise<[ValidatedRequest<T> | null, ApiError | null]> {
    try {
      const credential = await this.validateSecurity(req);
      const paramsData = { ...req.params, ...req.body };
      const params = await schema.parseAsync(paramsData);
      return [{ credential, params }, null];
    } catch (error: any) {
      const validationError: ApiError = {
        name: 'ValidationError',
        message: 'Validation failed',
        statusCode: 422,
        code: 'VALIDATION_ERROR',
        details: error.errors,
      };
      return [null, validationError];
    }
  }

  async delete<T>(
    req: Request,
    schema: z.ZodSchema<T>
  ): Promise<[ValidatedRequest<T> | null, ApiError | null]> {
    try {
      const credential = await this.validateSecurity(req);
      const params = await schema.parseAsync(req.params);
      return [{ credential, params }, null];
    } catch (error: any) {
      const validationError: ApiError = {
        name: 'ValidationError',
        message: 'Validation failed',
        statusCode: 422,
        code: 'VALIDATION_ERROR',
        details: error.errors,
      };
      return [null, validationError];
    }
  }
}

export function successResponse<T>(data: T): {
  success: true;
  data: T;
  timestamp: string;
} {
  return {
    success: true,
    data,
    timestamp: new Date().toISOString(),
  };
}

export function errorResponse(message: string): {
  success: false;
  error: { message: string };
  timestamp: string;
} {
  return {
    success: false,
    error: { message },
    timestamp: new Date().toISOString(),
  };
}
