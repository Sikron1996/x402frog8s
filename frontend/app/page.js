"use client";

import { useEffect } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://frog8s.vercel.app";

export default function Page() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://facilitator.payai.network/sdk.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  async function payMint() {
    if (!window.PayAI) return alert("PayAI SDK not loaded yet");
    await window.PayAI.pay({
      network: "base",
      asset: "USDC",
      amount: "3",
      payTo: "0xF97a410f2f0b64Cb5820baD63d878c3A967235AA",
      resource: API_BASE + "/api/mint"
    });
  }

  async function payAura() {
    if (!window.PayAI) return alert("PayAI SDK not loaded yet");
    await window.PayAI.pay({
      network: "base",
      asset: "USDC",
      amount: "3",
      payTo: "0xF97a410f2f0b64Cb5820baD63d878c3A967235AA",
      resource: API_BASE + "/api/aura"
    });
  }

  async function payTotal() {
    if (!window.PayAI) return alert("PayAI SDK not loaded yet");
    await window.PayAI.pay({
      network: "base",
      asset: "USDC",
      amount: "0.01",
      payTo: "0xF97a410f2f0b64Cb5820baD63d878c3A967235AA",
      resource: API_BASE + "/api/totalMinted"
    });
  }

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center", justifyContent: "center" }}>
      <h1>frog8s</h1>
      <p>Base • USDC • PayAI</p>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        <button onClick={payMint} style={btn}>Mint frog8s (3 USDC)</button>
        <button onClick={payAura} style={btn}>Mint Aura (3 USDC)</button>
        <button onClick={payTotal} style={btn}>Total Minted (0.01 USDC)</button>
      </div>
    </main>
  );
}

const btn = {
  background: "#fff",
  color: "#000",
  border: "none",
  padding: "12px 16px",
  borderRadius: "8px",
  cursor: "pointer"
};