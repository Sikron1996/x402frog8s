import express from 'express';
import { facilitatePayment } from '../facilitator/base.js';

const router = express.Router();

router.get('/', (req, res) => {
  const receiver = process.env.B402_RECEIVER || '0x0000000000000000000000000000000000000000';
  const base = process.env.PUBLIC_BASE_URL || 'https://frog8s.vercel.app';
  res.status(402).json({
    x402Version: 1,
    payer: "base",
    accepts: [{
      scheme: "exact",
      network: "base",
      maxAmountRequired: "3000000",
      resource: base + "/api/aura",
      description: "Mint 1 frog8s Aura",
      mimeType: "application/json",
      payTo: receiver,
      maxTimeoutSeconds: 300,
      asset: "USDC"
    }]
  });
});

router.post('/', async (req, res) => {
  const { txHash } = req.body || {};
  if (!txHash) return res.status(400).json({ error: 'txHash required' });
  const check = await facilitatePayment({ txHash, resource: 'aura' });
  if (!check.ok) return res.status(402).json({ error: check.error || 'not paid' });
  res.json({ ok: true, message: 'Aura mint allowed', accessGranted: true });
});

export default router;