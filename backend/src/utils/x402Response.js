export default function handler(req, res) {
  const base = "https://x402frog8s-one.vercel.app"; // 🔗 твій домен
  const receiver = "0xF97a410f2f0b64Cb5820baD63d878c3A967235AA"; // 💎 твій гаманець
  const facilitator = "https://facilitator.payai.network/"; // 🧠 офіційний PayAI фасилітатор

  const body = {
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
        facilitator, // ✅ обов’язковий ключ для PayAI
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
        asset: "USDC",
        facilitator
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
        asset: "USDC",
        facilitator
      }
    ]
  };

  res.status(402).json(body);
}
