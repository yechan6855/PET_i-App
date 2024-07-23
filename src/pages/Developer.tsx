import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';


const menu = [
    {
        name : "콜라",
        price : 1500
    },
    {
        name : "커피",
        price : 1800
    },
    {
        name : "환타",
        price : 1700
    },

]
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

            {
                menu.map((item)=>{
                    return (
                        <Item name={item.name} price={item.price}/>
                    )
                })
            }
            
            
        </View>
    );

    function Item(prop : MenuProp) {
        return (
            <View>
                <Text>{prop.name}</Text>
                <Text>{prop.price}</Text>
            </View>
        )
    }
    
}
interface MenuProp {
    name : string
    price : number
}

export default Developer;