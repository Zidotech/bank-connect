import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Landmark as BankIcon } from 'lucide-react-native';
import { Bank } from '../lib/types/bank';

type Props = {
  bank: Bank;
  onPress: () => void;
};

export const BankItem = ({ bank, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={onPress}
      accessibilityLabel={`Select ${bank.name}`}
    >
      <View style={styles.iconWrap}>
        {bank.logoUrl ? (
          <Image source={{ uri: bank.logoUrl }} style={styles.icon} />
        ) : (
          <View style={styles.placeholder}>
            <BankIcon size={28} color="#555" />
          </View>
        )}
      </View>
      <Text style={styles.name} numberOfLines={1}>
        {bank.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: '25%',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconWrap: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  icon: {
    width: 64,
    height: 64,
    borderRadius: 12,
  },
  placeholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 12,
    textAlign: 'center',
  },
});
