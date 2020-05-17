// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ColorPalette from './screens/ColorPalette';
import Home from './screens/Home';
import { AddNewPaletteModal } from './screens/AddNewPaletteModal';

const RootStack = createStackNavigator();

const MainStack = createStackNavigator();

const MainScreens = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen
      name="ColorPalette"
      component={ColorPalette}
      options={({ route }) => ({ title: route.params.paletteName })}
    />
  </MainStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainScreens}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="AddNewPalette" component={AddNewPaletteModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
