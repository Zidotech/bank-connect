import React from 'react';
import { SectionList, Text, FlatList } from 'react-native';
import { groupBanksByLetter } from '../lib/utils/alphagroup';
import { Bank } from '../lib/types/bank';
import { BankItem } from './BankItem';

type Props = {
  banks: Bank[];
  onSelect: (bank: Bank) => void;
};

export const BankGrid = ({ banks, onSelect }: Props) => {
  const sections = groupBanksByLetter(banks);

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item) => item.id}
      renderSectionHeader={({ section: { title } }) => (
        <Text className="text-lg font-bold py-2">{title}</Text>
      )}
      renderItem={() => null}
      renderSectionFooter={({ section }) => (
        <FlatList
          data={section.data}
          renderItem={({ item }) => <BankItem bank={item} onPress={() => onSelect(item)} />}
          keyExtractor={(b) => b.id}
          horizontal={false}
          numColumns={4}
          scrollEnabled={false}
        />
      )}
      stickySectionHeadersEnabled
    />
  );
};
