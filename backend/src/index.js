
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import x402Router from './routes/x402.js';
import mintRouter from './routes/mint.js';
import auraRouter from './routes/aura.js';
import totalMintedRouter from './routes/totalMinted.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/x402', x402Router);
app.use('/api/mint', mintRouter);
app.use('/api/aura', auraRouter);
app.use('/api/totalMinted', totalMintedRouter);

const port = process.env.PORT || 4020;
app.listen(port, () => {
  console.log(`[x402frog8s] running on :${port}`);
});
