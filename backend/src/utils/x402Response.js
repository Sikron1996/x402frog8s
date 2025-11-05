
export function buildDiscovery() {
  const base = process.env.PUBLIC_BASE_URL || 'https://x402frog8s-one.vercel.app';
  const receiver = process.env.B402_RECEIVER || '0x0000000000000000000000000000000000000000';

  return {
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
        asset: "USDC",
        outputSchema: {
          input: {
            type: "object",
            properties: {
              txHash: { type: "string", description: "Base tx hash" }
            },
            required: ["txHash"]
          },
          output: {
            type: "object",
            properties: {
              ok: { type: "boolean" },
              message: { type: "string" },
              accessGranted: { type: "boolean" }
            }
          }
        }
      },
      {
        scheme: "exact",
        network: "base",
        maxAmountRequired: "3000000",
        resource: `${base}/api/aura`,
        description: "Mint 1 frog8s Aura",
        mimeType: "application/json",
        payTo: receiver,
        maxTimeoutSeconds: 300,
        asset: "USDC"
      },
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
  };
}
