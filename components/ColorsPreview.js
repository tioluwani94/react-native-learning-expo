import React from 'react';
import { Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import ColorSwatch from './ColorSwatch';

export default function ColorsPreview({ palette, handlePress }) {
  const { colors, paletteName } = palette;
  const colorsPreview = colors.filter((_, index) => index <= 4);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handlePress(palette)}
    >
      <Text style={styles.heading}>{paletteName}</Text>
      <FlatList
        horizontal={true}
        data={colorsPreview}
        keyExtractor={(item) => `${item.colorName}-${item.key}`}
        renderItem={({ item }) => <ColorSwatch hexCode={item.hexCode} />}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 18,
    paddingBottom: 8,
    fontWeight: 'bold',
  },
});
