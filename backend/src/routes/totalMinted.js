
import express from 'express';
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
        maxAmountRequired: "10000",
        resource: `${base}/api/totalMinted`,
        description: "Get frog8s total minted count",
        mimeType: "application/json",
        payTo: receiver,
        maxTimeoutSeconds: 300,
        asset: "USDC"
      }
    ]
  });
});

router.post('/', (req, res) => {
  res.json({ ok: true, total: 0 });
});

export default router;
