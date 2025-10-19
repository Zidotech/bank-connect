import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Success() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black p-4">
      <Text className="text-2xl font-bold mb-4">Account Verified ✅</Text>
      <Text className="mb-6 text-center">The account details were verified successfully.</Text>
      <Pressable onPress={() => router.replace('/')} className="py-3 px-4 rounded bg-green-600">
        <Text className="text-white">Back</Text>
      </Pressable>
    </View>
  );
}
