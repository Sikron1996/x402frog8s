
import fetch from 'node-fetch';

export async function verifyPayAI({ txHash, resource }) {
  const url = process.env.FACILITATOR_URL;
  if (!url) return { ok: false, error: 'FACILITATOR_URL not configured' };
  try {
    const res = await fetch(url + 'api/pay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ txHash, resource })
    });
    const json = await res.json();
    if (!json.ok) {
      return { ok: false, error: json.error || 'facilitator rejected payment' };
    }
    return { ok: true, details: json };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}
