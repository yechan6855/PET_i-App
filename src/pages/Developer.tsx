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
                title ="PetToday"
                onPress={()=> navigation.navigate('PetToday')}
            />
            <Button 
                title ="PetCalender"
                onPress={()=> navigation.navigate('PetCalender')}
            />
            <Button 
                title ="Notification"
                onPress={()=> navigation.navigate('Notification')}
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
            <Button
                title ="Login"
                onPress={()=> navigation.navigate('Login')}
            />
            <Button
            title = "UserMenu"
            onPress={()=> navigation.navigate('UserMenu')}
            />
            
            <Button
            title = "Login_edit"
            onPress={()=> navigation.navigate('LogInPageEdit')}
            />

            
        </View>
    );
}

export default Developer;