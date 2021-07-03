import express from 'express';
import bodyParser from 'body-parser';
import { auctionRoute, bidRoute } from './routes';
import path from 'path'

// Create Express server
const app = express();

// Express configuration
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Routes
app.use(express.static("public"));
// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.use('/auctions', auctionRoute);
app.use('/bids', bidRoute);

export default app;
