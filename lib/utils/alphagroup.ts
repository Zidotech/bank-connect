import { Bank } from '../types/bank';

export type Section<T> = { title: string; data: T[] };

export function groupBanksByLetter(banks: Bank[]): Section<Bank>[] {
  const map = new Map<string, Bank[]>();
  for (const b of banks) {
    const ch = b.name[0]?.toUpperCase() ?? '#';
    const key = /[A-Z]/.test(ch) ? ch : '#';
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(b);
  }
  const sections = Array.from(map.entries()).map(([title, data]) => ({ title, data }));
  sections.sort((a, b) => {
    if (a.title === '#') return -1;
    if (b.title === '#') return 1;
    return a.title.localeCompare(b.title);
  });
  sections.forEach(s => s.data.sort((x,y)=> x.name.localeCompare(y.name)));
  return sections;
}
