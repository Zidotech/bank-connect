import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Landmark as BankIcon } from 'lucide-react-native';
import { Bank } from '../lib/types/bank';
import { Colors } from '../constants/theme';

type Props = {
  bank: Bank;
  onPress: () => void;
};

export const BankItem = ({ bank, onPress }: Props) => {
  return (
    <TouchableOpacity
      className="w-1/4 items-center mb-3"
      onPress={onPress}
      accessibilityLabel={`Select ${bank.name}`}>
      <View className="w-16 h-16 rounded-lg bg-gray-800 items-center justify-center mb-1.5">
        {bank.logoUrl ? (
          <Image source={{ uri: bank.logoUrl }} className="w-16 h-16 rounded-lg" />
        ) : (
          <View className="items-center justify-center">
            <BankIcon size={28} color={Colors.light.tint} />
          </View>
        )}
      </View>
      <Text className="text-xs text-center text-white" numberOfLines={1}>
        {bank.name}
      </Text>
    </TouchableOpacity>
  );
};
