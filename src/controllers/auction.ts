import { Request, Response, NextFunction } from 'express';
import { check, validationResult, body } from 'express-validator';
import { auctions } from '../data/auction'

export async function listAllAuctions(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      return res.json(auctions).status(200);
    } catch (err) {
      next(err);
    }
  }

  
/**
 * 
 * An endpoint to create a new auction.
 */
export async function createAuction(
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


export async function addProduct(
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
export async function closeAuction(
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

export async function joinAuction(
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

  export async function exitAuction(
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

  export async function getAuctionId(
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

