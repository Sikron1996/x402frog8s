
import express from 'express';
import { verifyPayAI } from '../facilitator/payai.js';

const router = express.Router();

router.get('/', (req, res) => {
  const base = process.env.PUBLIC_BASE_URL;
  const receiver = process.env.B402_RECEIVER;
  res.status(402).json({
    x402Version: 1,
    payer: "base",
    accepts: [
      {
        scheme: "exact",
        network: "base",
        maxAmountRequired: "3000000",
        resource: `${base}/api/mint`,
        description: "Mint 1 frog8s NFT",
        mimeType: "application/json",
        payTo: receiver,
        maxTimeoutSeconds: 300,
        asset: "USDC"
      }
    ]
  });
});

router.post('/', async (req, res) => {
  const { txHash } = req.body || {};
  if (!txHash) return res.status(400).json({ error: "txHash required" });
  const verify = await verifyPayAI({ txHash, resource: 'mint' });
  if (!verify.ok) return res.status(402).json({ error: verify.error });
  res.json({ ok: true, message: "mint granted", accessGranted: true });
});

export default router;
