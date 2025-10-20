import { Bank } from "../types/bank";

function makeBank(i: number): Bank {
  const names = [
    "Access Bank",
    "First Bank",
    "GTBank",
    "Zenith Bank",
    "UBA",
    "Ecobank",
    "Sterling Bank",
    "FCMB",
    "Keystone Bank",
    "Polaris Bank",
  ];
  const name = names[i % names.length] + (i > names.length ? ` ${i}` : "");
  const id = String(i + 1);
  // Generate a deterministic 10-digit account number per bank, e.g. 1000000000, 1000000001, ...
  const sample = String(1000000000 + i);
  return { id, name, code: `B${i + 1}`, logoUrl: "", accountSamples: [sample] };
}

export const MOCK_BANKS: Bank[] = Array.from({ length: 40 }).map((_, i) =>
  makeBank(i)
);