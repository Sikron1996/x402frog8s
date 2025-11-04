
"use client";
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://x402frog8s-one.vercel.app";
async function call(path){const r=await fetch(`${API_BASE}${path}`);alert(`Status: ${r.status}\n${await r.text()}`)}
export default function Page(){
return(<main style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'100vh',gap:'16px'}}>
<h1>x402frog8s</h1><p>Base • USDC • PayAI</p>
<div style={{display:'flex',gap:'12px',flexWrap:'wrap',justifyContent:'center'}}>
<button onClick={()=>call('/api/mint')} style={btn}>Mint Punk (3 USDC)</button>
<button onClick={()=>call('/api/aura')} style={btn}>Mint Aura (3 USDC)</button>
<button onClick={()=>call('/api/totalMinted')} style={btn}>TotalMinted (0.01)</button>
</div></main>);}
const btn={background:'#fff',color:'#000',border:'none',padding:'12px 16px',borderRadius:'8px',cursor:'pointer'};
