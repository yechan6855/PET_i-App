import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import {Button, View} from 'react-native';


function APage({navigation}: {navigation: NavigationProp<ParamListBase>}) {
    return (
        <View>
            <Button 
            title ="Home Page"
            onPress={()=> navigation.navigate('BPage')}
            />
        </View>
    );
}

export default APage;