import React from 'react';
import { StyleSheet, View, RefreshControl } from 'react-native';
import ColorsPreview from '../components/ColorsPreview';
import { FlatList } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = React.useState([]);
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const handlePress = ({ colors, paletteName }) => {
    navigation.navigate('ColorPalette', {
      colors,
      paletteName,
    });
  };

  const fetchColorPalettes = React.useCallback(async () => {
    try {
      const response = await fetch(
        'https://color-palette-api.kadikraman.now.sh/palettes'
      );
      if (response.ok) {
        const data = await response.json();
        setColorPalettes(data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleRefresh = React.useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  });

  React.useEffect(() => {
    fetchColorPalettes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={colorPalettes}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <ColorsPreview palette={item} handlePress={handlePress} />
        )}
        refreshControl={
          <RefreshControl onRefresh={handleRefresh} refreshing={isRefreshing} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: 'white',
  },
});

export default Home;
