
import express from 'express';
import { buildDiscovery } from '../utils/x402Response.js';

const router = express.Router();

router.get('/', (req, res) => {
  const resp = buildDiscovery();
  res.status(402).json(resp);
});

router.post('/', (req, res) => {
  const resp = buildDiscovery();
  res.status(402).json(resp);
});

export default router;
