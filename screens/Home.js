import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  RefreshControl,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ColorsPreview from '../components/ColorsPreview';

const Home = ({ route, navigation }) => {
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

  const handleAddNewPaletteClick = () => {
    navigation.navigate('AddNewPalette');
  };

  React.useEffect(() => {
    fetchColorPalettes();
  }, []);

  React.useEffect(() => {
    if (route.params && route.params.colors && route.params.paletteName) {
      const { colors, paletteName } = route.params;
      setColorPalettes([{ colors, paletteName }, ...colorPalettes]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addColorBtn}
        onPress={handleAddNewPaletteClick}
      >
        <Text style={styles.addColorBtnText}>Add a color scheme</Text>
      </TouchableOpacity>
      <FlatList
        data={colorPalettes}
        keyExtractor={(item, index) => `${item.paletteName}-${index}`}
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
  addColorBtn: {
    marginBottom: 16,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  addColorBtnText: {
    fontSize: 24,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default Home;
