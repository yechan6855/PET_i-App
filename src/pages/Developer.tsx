import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import {Button, View} from 'react-native';


function Developer({navigation}: {navigation: NavigationProp<ParamListBase>}) {
    return (
        <View>
            <Button 
                title ="Pet"
                onPress={()=> navigation.navigate('Pet')}
            />
            <Button 
                title ="PetList"
                onPress={()=> navigation.navigate('PetList')}
            />
            <Button
                title ="PetCreate00"
                onPress={()=> navigation.navigate('PetCreate00')}
            />
            <Button
                title ="PetCreate01"
                onPress={()=> navigation.navigate('PetCreate01')}
            />
            <Button
                title ="PetCreateResult"
                onPress={()=> navigation.navigate('PetCreateResult')}
            />
        </View>
    );
}

export default Developer;