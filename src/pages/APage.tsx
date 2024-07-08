import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import {Button, View} from 'react-native';


function APage({navigation}: {navigation: NavigationProp<ParamListBase>}) {
    return (
        <View>
            <Button 
            title ="B Page"
            onPress={()=> navigation.navigate('B')}
            />
        </View>
    );
}

export default APage;