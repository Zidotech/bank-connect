import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function ErrorScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const bankName = params?.bankName ?? 'selected bank';

  return (
    <View className="flex-1 items-center justify-center bg-black p-4">
      <Text className="text-2xl font-bold mb-4 text-white">Invalid Account ✖️</Text>
      <Text className="mb-6 text-center text-white">
        We couldn&apos;t verify the account for {bankName}.
      </Text>
      <Pressable onPress={() => router.replace('/')} className="py-3 px-4 rounded bg-tint">
        <Text className="text-white">Try Again</Text>
      </Pressable>
    </View>
  );
}
