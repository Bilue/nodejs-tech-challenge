import express from 'express';
import * as controllers from '../controllers';
import { validateRequest } from '../middlewares/validateRequest';

const auctionRoute = express.Router();

// create new bid
auctionRoute.get(
  '/',
  validateRequest,
  controllers.listAllAuctions
);


export { auctionRoute }
