"use client";

import { useEffect, useState } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://x402frog8s-one.vercel.app";

export default function Page() {
  const [sdkReady, setSdkReady] = useState(false);

  // Завантаження SDK PayAI після рендеру
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://facilitator.payai.network/sdk.js";
    script.async = true;
    script.onload = () => setSdkReady(true);
    document.body.appendChild(script);
  }, []);

  async function call(path) {
    const resp = await fetch(`${API_BASE}${path}`);
    if (resp.status === 402) {
      const data = await resp.json();

      if (!sdkReady || typeof window.x402 === "undefined") {
        alert("⚠️ PayAI SDK not loaded yet — зачекай 2 секунди і спробуй ще раз");
        return;
      }

      try {
        const payResult = await window.x402.pay(data);
        alert("✅ Оплата завершена!\\n" + JSON.stringify(payResult, null, 2));
      } catch (err) {
        alert("❌ Помилка оплати:\\n" + err.message);
      }
    } else {
      alert("Status: " + resp.status + "\\n" + (await resp.text()));
    }
  }

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#000', color: '#fff', gap: '16px' }}>
      <h1>frog8s</h1>
      <p>Base • USDC • PayAI</p>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button onClick={() => call('/api/mint')} style={btn}>Mint frog8s (3 USDC)</button>
        <button onClick={() => call('/api/aura')} style={btn}>Mint Aura (3 USDC)</button>
        <button onClick={() => call('/api/totalMinted')} style={btn}>Total Minted (0.01 USDC)</button>
      </div>
    </main>
  );
}

const btn = {
  background: '#222',
  color: '#fff',
  border: '1px solid #555',
  padding: '12px 16px',
  borderRadius: '8px',
  cursor: 'pointer'
};
