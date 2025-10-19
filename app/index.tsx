import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useBankStore } from '../store/bankStore';
import { BottomSheet } from '../components/BottomSheet';
import { BankGrid } from '../components/BankGrid';
import { Bank } from '../lib/types/bank';

export default function Home() {
  const { banks, fetchBanks, isLoading, error } = useBankStore();
  const [account, setAccount] = useState('');
  const [sheetVisible, setSheetVisible] = useState(false);
  const [selected, setSelected] = useState<Bank | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchBanks();
  }, []);

  function onSelectBank(bank: Bank) {
    setSelected(bank);
    setSheetVisible(false);
    // perform mock verification: check if account exists in bank.accountSamples
    const ok = bank.accountSamples?.includes(account);
    if (ok) {
      router.push('/success');
    } else {
      router.push({ pathname: '/error', params: { bankName: bank.name } });
    }
  }

  return (
    <View className="flex-1 p-4 bg-white dark:bg-black">
      <Text className="text-xl font-bold mb-3">Verify Account</Text>
      <Text className="text-sm text-gray-600 mb-2">Enter account number</Text>
      <TextInput
        value={account}
        onChangeText={setAccount}
        keyboardType="number-pad"
        placeholder="e.g. 1234567890"
        className="border border-gray-200 p-3 rounded-md mb-4 bg-white dark:bg-gray-900"
      />
      <Pressable
        onPress={() => setSheetVisible(true)}
        className="py-3 px-4 rounded-md bg-blue-600"
      >
        <Text className="text-white text-center">{selected ? `Bank: ${selected.name}` : 'Select bank'}</Text>
      </Pressable>

      {result ? <Text className="mt-4">{result}</Text> : null}

      <BottomSheet visible={sheetVisible} onClose={() => setSheetVisible(false)}>
        <View className="p-2">
          <Text className="text-lg font-semibold mb-2">Select Bank</Text>
          {isLoading ? <Text>Loading banks...</Text> : error ? <Text className="text-red-500">{error}</Text> : <BankGrid banks={banks} onSelect={onSelectBank} />}
        </View>
      </BottomSheet>
    </View>
  );
}
