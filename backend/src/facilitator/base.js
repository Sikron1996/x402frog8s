import fetch from 'node-fetch';

export async function facilitatePayment({ txHash, resource }) {
  const url = process.env.FACILITATOR_URL;
  if (!url) return { ok: false, error: 'FACILITATOR_URL not configured' };
  try {
    const res = await fetch(url + 'api/pay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ txHash, resource })
    });
    const json = await res.json();
    if (!json.ok) return { ok: false, error: json.error || 'payment rejected' };
    return { ok: true, details: json };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}