
import express from 'express';
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
      maxAmountRequired: "10000",
      resource: "https://x402frog8s-one.vercel.app/api/totalMinted",
      description: "x402frog8s total minted",
      mimeType: "application/json",
      payTo: receiver,
      maxTimeoutSeconds: 300,
      asset: "USDC"
    }]
  });
});
export default router;
