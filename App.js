import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colors
        </Text>
        <ColorBox colorName="Cyan" hexCode="#2aa198" />
        <ColorBox colorName="Blue" hexCode="#268bd2" />
        <ColorBox colorName="Magenta" hexCode="#d33682" />
        <ColorBox colorName="Orange" hexCode="#cb4b16" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginVertical: 32,
    marginHorizontal: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 16,
  },
});

export default App;
