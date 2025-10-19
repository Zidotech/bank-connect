import { create } from 'zustand';
import { Bank } from '../lib/types/bank';
import { fetchBanks } from '../lib/api/bank';

type State = {
  banks: Bank[];
  isLoading: boolean;
  error?: string;
  fetchBanks: (apiUrl?: string) => Promise<void>;
  findBankById: (id: string) => Bank | undefined;
};

export const useBankStore = create<State>((set, get) => ({
  banks: [],
  isLoading: false,
  error: undefined,
  fetchBanks: async (apiUrl?: string) => {
    set({ isLoading: true, error: undefined });
    try {
      const banks = await fetchBanks(apiUrl);
      banks.sort((a,b)=> a.name.localeCompare(b.name));
      set({ banks, isLoading: false });
    } catch (err: any) {
      set({ error: err.message ?? 'Failed to fetch banks', isLoading: false });
    }
  },
  findBankById: (id: string) => get().banks.find(b => b.id === id),
}));
