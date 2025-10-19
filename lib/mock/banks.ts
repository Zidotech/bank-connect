import { Bank } from '../types/bank';

function makeBank(i: number): Bank {
  const names = ['Access Bank','First Bank','GTBank','Zenith Bank','UBA','Ecobank','Sterling Bank','FCMB','Keystone Bank','Polaris Bank'];
  const name = names[i % names.length] + (i > names.length ? ` ${i}` : '');
  const id = String(i + 1);
  const sample = '9' + String(100000000 + i).slice(1);
  return { id, name, code: `B${i+1}`, logoUrl: '', accountSamples: [sample] };
}

export const MOCK_BANKS: Bank[] = Array.from({ length: 100 }).map((_, i) => makeBank(i));
