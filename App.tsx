import React from "react";
import {View, Text, Button} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import APage from './src/pages/APage';
import BPage from './src/pages/BPage';
import CPage from './src/pages/CPage';
import DPage from './src/pages/DPage';
import EPage from './src/pages/EPage';


const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="APage">
        <Stack.Screen name="BPage" component={BPage} />
        <Stack.Screen name="CPage" component={CPage} />
        <Stack.Screen name="DPage" component={DPage} />
        <Stack.Screen name="EPage" component={EPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;