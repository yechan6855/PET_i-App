import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import {Button, View} from 'react-native';


function Developer({navigation}: {navigation: NavigationProp<ParamListBase>}) {
    return (
        <View>

            <Button
            title = "UserMenu"
            onPress={()=> navigation.navigate('UserMenu')}
            />
            
            <Button
            title = "Login"
            onPress={()=> navigation.navigate('LogInPageEdit')}
            />

            <Button
            title = "Pet" 
            onPress={()=> navigation.navigate('PetPage')}           
            />

            <Button
            title="PetList"
            onPress={()=> navigation.navigate('PetListPage')}
            />

            
        </View>
    );
}

export default Developer;