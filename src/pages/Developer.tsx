import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import {Alert, Button, Text, View} from 'react-native';
import { useUserContext } from '../hooks/useUserContext';

function Developer({navigation}: {navigation: NavigationProp<ParamListBase>}) {
    const usercontext = useUserContext()    
    return (
        <View>

            <Button
            title = "UserMenu"
            onPress={()=> navigation.navigate('UserMenu')}
            />
            
            <Button
            title = "Login"
            onPress={()=> navigation.navigate('Login')}
            />

            <Button
            title = "Pet" 
            onPress={()=> navigation.navigate('PetPage')}           
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
            
            <Button
                title='Alert !'
                onPress={() => {usercontext.alert("끼예엑!", "응우옌으억루")}}
            />
        </View>
    );
    
}

export default Developer;