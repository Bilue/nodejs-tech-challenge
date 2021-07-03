import { Request, Response, NextFunction } from 'express';
import { check, validationResult, body } from 'express-validator';


export async function placeBid(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.json({ status: true });
  } catch (err) {
    next(err);
  }
}

export async function acceptBid(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.json({ status: true });
  } catch (err) {
    next(err);
  }
}

export async function listAllBidsByAuctionId(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        return res.json({ status: true });
    } catch (err) {
        next(err);
    }
}

export async function declineBid(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.json({ status: true });
  } catch (err) {
    next(err);
  }
}
