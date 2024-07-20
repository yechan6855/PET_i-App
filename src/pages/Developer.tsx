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
            onPress={()=> navigation.navigate('Pet')}           
            />

            <Button
            title="PetList"
            onPress={()=> navigation.navigate('PetList')}
            />

            <Button
            title="CreatePet"
            onPress={()=> navigation.navigate('CreatePet')}/>

            <Button
            title="EditPetList"
            onPress={()=> navigation.navigate('EditPetList')}/>

            <Button
            title="Signin"
            onPress={()=> navigation.navigate('Signin')}/>

            
        </View>
    );
}

export default Developer;