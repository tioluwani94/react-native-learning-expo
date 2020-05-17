import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export const ColorSwitch = ({ colorName, hexCode, onSwitch }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);

  const toggleSwitch = (value) => {
    setIsEnabled(value);
    onSwitch({ colorName, hexCode, isEnabled: value });
  };

  return (
    <View style={styles.container}>
      <Text>{colorName}</Text>
      <Switch value={isEnabled} onValueChange={toggleSwitch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#e8e8e8',
    justifyContent: 'space-between',
  },
});
