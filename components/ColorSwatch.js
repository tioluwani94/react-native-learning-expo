import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ColorSwatch({ hexCode }) {
  return <View style={[styles, { backgroundColor: hexCode }]} />;
}

const styles = StyleSheet.create({
  width: 40,
  height: 40,
  marginRight: 8,
});
