import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import {Button, View} from 'react-native';


function Main({navigation}: {navigation: NavigationProp<ParamListBase>}) {
    return (
        <View>
            <Button 
            title ="PetList"
            onPress={()=> navigation.navigate('PetList')}
            />
        </View>
    );
}

export default Main;