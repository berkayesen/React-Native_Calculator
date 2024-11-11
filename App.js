import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CalculatorScreen from './CalculatorScreen';
import HistoryScreen from './HistoryScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Calculator">
        <Drawer.Screen name="Calculator" component={CalculatorScreen} />
        <Drawer.Screen name="History" component={HistoryScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
