import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function ColorBox({ colorName, hexCode }) {
  const boxColor = { backgroundColor: hexCode };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.text}>
        {colorName} {hexCode}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  box: {
    color: 'white',
    borderRadius: 3,
    marginBottom: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
