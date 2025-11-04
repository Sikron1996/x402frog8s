
import express from 'express';
import { buildX402Response } from '../utils/x402Response.js';

const router = express.Router();
router.get('/', (req, res) => {
  const resp = buildX402Response();
  res.status(402).json(resp);
});
export default router;
