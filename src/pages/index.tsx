import React from "react";
import { NativeStackNavigationOptions, NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Developer from "./Developer";
import Pet from "./PetPage";
import Color from "../constants/color.ts";
import { Pressable, Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import LogoImage from "../../assets/images/peti_logo.png"
import UserMenuList from "./UserMenu.tsx";
import LoginPageEdit from "./LogInPageEdit.tsx";
import PetList from "./PetListPage.tsx";
import CreatePet from "./CreatePetPage.tsx";


import backButtonImage from '../../assets/images/backbtn.png';

export type RootStackParamList = {
    Developer: undefined;
    Pet: undefined;
    UserMenu : undefined;
    LogInPageEdit : undefined;
    PetList : undefined;
    CreatePet : undefined;
}
interface PageConfig
{
    endPoint : keyof RootStackParamList;
    component : React.ComponentType<any>;
    option? : NativeStackNavigationOptions;
}

/// 모든 페이지 라우터의 상수 (모든 페이지의 신)
const data : ReadonlyArray<PageConfig> = Object.freeze([
    {
        endPoint : "Developer",
        component : Developer,
        option : {}
    },
    {
        endPoint : "UserMenu" ,
        component : UserMenuList
    },

    {
        endPoint : "LogInPageEdit",
        component : LoginPageEdit
    },
    {
        endPoint : "Pet",
        component : Pet
    },
    {
        endPoint : "PetList",
        component : PetList
    },
    {
        endPoint : "CreatePet",
        component : CreatePet
    }
])
const Stack = createNativeStackNavigator<RootStackParamList>()

export const Pages = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Developer">
                {
                    data.map(({endPoint, component, option}, index) => {
                        return (
                            <Stack.Screen
                                key={index}
                                name={endPoint}
                                component={component}
                                options={option || {
                                    headerStyle : {
                                        backgroundColor : 'transparent',  
                                    },
                                    headerTitle : "",
                                    headerLeft : BackButton
                                }}
                            />
                        )
                    })
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const style = StyleSheet.create({
    header : {
        // backgroundColor : 'red'
    },
    backButtonImage : {
        width : 30,
        height : 30
    }
})
const BackButton = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    return (
        <TouchableOpacity style={style.header} onPress={navigation.goBack}>
            <Image
                style={style.backButtonImage}
                source={backButtonImage}
            />
        </TouchableOpacity>
    )
}
export default {}