import { Bank } from '../types/bank';
import { MOCK_BANKS } from '../mock/banks';
import { fetchJson } from './client';

export async function fetchBanks(apiUrl?: string): Promise<Bank[]> {
  if (!apiUrl) {
    // simulate network latency
    await new Promise((r) => setTimeout(r, 250));
    return MOCK_BANKS;
  }
  return fetchJson<Bank[]>(apiUrl);
}

// In real app, account verification should be server-side. For demo we check mock samples.
export async function verifyAccountWithBank(bankId: string, accountNumber: string, apiUrl?: string): Promise<boolean> {
  if (!apiUrl) {
    const bank = MOCK_BANKS.find((b) => b.id === bankId);
    return !!bank?.accountSamples?.includes(accountNumber);
  }
  // Example endpoint: POST /banks/{bankId}/verify { accountNumber }
  const res = await fetchJson<{ valid: boolean }>(`${apiUrl}/banks/${bankId}/verify`, { method: 'POST', body: JSON.stringify({ accountNumber }), headers: { 'Content-Type': 'application/json' }});
  return res.valid;
}
