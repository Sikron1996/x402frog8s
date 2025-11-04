
export function buildX402Response() {
  const receiver = process.env.B402_RECEIVER || '0x0000000000000000000000000000000000000000';
  const base = process.env.PUBLIC_BASE_URL || 'https://x402frog8s-one.vercel.app';
  return {
    x402Version: 1,
    payer: "base",
    accepts: [
      {
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
      },
      {
        scheme: "exact",
        network: "base",
        maxAmountRequired: "3000000",
        resource: base + "/api/aura",
        description: "Mint 1 x402frog8s Aura",
        mimeType: "application/json",
        payTo: receiver,
        maxTimeoutSeconds: 300,
        asset: "USDC"
      },
      {
        scheme: "exact",
        network: "base",
        maxAmountRequired: "10000",
        resource: base + "/api/totalMinted",
        description: "x402frog8s total minted",
        mimeType: "application/json",
        payTo: receiver,
        maxTimeoutSeconds: 300,
        asset: "USDC"
      }
    ]
  };
}
