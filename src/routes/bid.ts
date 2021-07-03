import express from 'express';
import * as controllers from '../controllers';
import { validateRequest } from '../middlewares/validateRequest';

const bidRoute = express.Router();


export { bidRoute }
