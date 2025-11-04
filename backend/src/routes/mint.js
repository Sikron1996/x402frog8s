
import express from 'express';
import { facilitatePayment } from '../facilitator/base.js';

const router = express.Router();
router.get('/', (req, res) => {
  const receiver = process.env.B402_RECEIVER || '0x0000000000000000000000000000000000000000';
  const base = process.env.PUBLIC_BASE_URL || 'https://x402frog8s-one.vercel.app';
  res.status(402).json({
    x402Version: 1,
    payer: "base",
    accepts: [{
        scheme: "exact",
        network: "base",
        chainId: 8453,
        maxAmountRequired: "3000000",
        resource: "https://x402frog8s-one.vercel.app/api/mint",
        description: "Mint 1 x402Cats NFT (Gasless via PayAI)",
        mimeType: "application/json",
        payTo: "0xF97a410f2f0b64Cb5820baD63d878c3A967235AA",
        maxTimeoutSeconds: 300,
        asset: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        facilitator: "https://facilitator.payai.network",
    }]
  });
});
router.post('/', async (req, res) => {
  const { txHash } = req.body || {};
  if (!txHash) return res.status(400).json({ error: 'txHash required' });
  const check = await facilitatePayment({ txHash, resource: 'mint' });
  if (!check.ok) return res.status(402).json({ error: check.error || 'not paid' });
  res.json({ ok: true, message: 'Mint allowed', accessGranted: true });
});
export default router;
