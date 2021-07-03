import { Request, Response, NextFunction } from "express";

import { check, validationResult, body } from "express-validator";
export async function validateRequest(
    req: Request,
    res: Response,
    next: NextFunction
) {
  console.log('I am h')
  await body("id", "Id must not be empty")
    .escape()
    .trim()
    .run(req);

  const errors = validationResult(req);

  if (errors.isEmpty()) {
      return next();
  }
  res.status(422).json({ errors: errors.array() });
}