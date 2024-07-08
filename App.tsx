import React from "react";
import {View, Text, Button} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from './src/pages/Main';
import BPage from './src/pages/BPage';
import PetList from "./src/pages/PetList";
import DPage from './src/pages/DPage';
import EPage from './src/pages/EPage';



const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="BPage" component={BPage} />
        <Stack.Screen name="PetList" component={PetList} />
        <Stack.Screen name="DPage" component={DPage} />
        <Stack.Screen name="EPage" component={EPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;