import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import HomePage from './components/HomePage';
import NewScreen from './components/NewScreen';
import Description from './components/Description';
import TourneeScreen from './components/TourneeScreen';
import Niveaux from './components/Niveaux'
import ReleveScreen from './components/ReleveScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Menu" component={NewScreen} />
        <Stack.Screen name="Description" component={Description} />
        <Stack.Screen name="Tournee" component={TourneeScreen} />
        <Stack.Screen name="Niveaux" component={Niveaux} />
        <Stack.Screen name="Releve" component={ReleveScreen} />





      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
