import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { CrudController, errorResponse, successResponse } from '@/middleware/crud';
import { bankCreate } from '@/services/bank';

const securable = 'BANK';

const bodySchema = z.object({
  code: z
    .string()
    .length(3, 'bankCodeMustBe3Digits')
    .regex(/^\d{3}$/, 'bankCodeMustBeNumeric'),
  name: z.string().min(1, 'bankNameRequired').max(100, 'bankNameMaxLength'),
});

/**
 * @api {post} /internal/bank Create Bank
 * @apiName CreateBank
 * @apiGroup Bank
 * @apiVersion 1.0.0
 *
 * @apiDescription Creates a new bank with the specified code and name
 *
 * @apiParam {String} code Bank code (3 digits)
 * @apiParam {String} name Bank name (max 100 characters)
 *
 * @apiSuccess {Number} idBank Bank identifier
 *
 * @apiError {String} ValidationError Invalid parameters provided
 * @apiError {String} UnauthorizedError User lacks permission
 * @apiError {String} ServerError Internal server error
 */
export async function postHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  const operation = new CrudController([{ securable, permission: 'CREATE' }]);

  const [validated, error] = await operation.create(req, bodySchema);

  if (!validated) {
    return next(error);
  }

  try {
    const data = await bankCreate({
      ...validated.credential,
      ...validated.params,
    });

    res.json(successResponse(data));
  } catch (error: any) {
    if (error.number === 51000) {
      res.status(400).json(errorResponse(error.message));
    } else {
      next(error);
    }
  }
}
