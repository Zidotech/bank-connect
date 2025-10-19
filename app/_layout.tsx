import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { Colors } from '../constants/theme';
import './global.css';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <View className="flex-1 bg-black">
          <Stack
            screenOptions={{
              headerStyle: { backgroundColor: Colors.dark.tint },
              headerTintColor: Colors.dark.background,
              headerTitleStyle: { fontWeight: 'bold' },
            }}>
            <Stack.Screen name="index" options={{ title: 'Verify Account', headerShown: true }} />
            <Stack.Screen name="success" options={{ title: 'Success', headerShown: true }} />
            <Stack.Screen name="error" options={{ title: 'Error', headerShown: true }} />
          </Stack>
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
