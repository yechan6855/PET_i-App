import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import {Button, View} from 'react-native';


function BPage({navigation}: {navigation: NavigationProp<ParamListBase>}) {
    return (
        <View>
            <Button 
            title ="A Page"
            onPress={()=> navigation.navigate('A')}
            />
        </View>
    );
}

export default BPage;