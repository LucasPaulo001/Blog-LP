import { validationResult } from "express-validator";
import { Response, Request, NextFunction } from "express";

export const validation = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors: object[] = [];

  errors.array().map((err) => extractedErrors.push(err));

  res.status(422).json({
    errors: extractedErrors,
  });
};
