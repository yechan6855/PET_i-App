import React, { ComponentType } from "react";
import { NativeStackNavigationOptions, NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Developer from "./Developer";
import Pet from "./PetPage";
import Color from "../constants/Color";
import { Pressable, Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import LogoImage from "../../assets/images/peti_logo.png"
import UserMenuList from "./UserMenu";
import LoginPage from "./LogInPage";
import PetList from "./PetListPage";
import CreatePet from "./CreatePetPage";
import EditPetList from "./EditPetListPage";
import Signin from "./SigninPage";
import backButtonImage from '../../assets/images/backbtn.png';
import { Authorization } from "../components/Authorization";

export type RootStackParamList = {
    Developer: undefined;
    Pet: undefined;
    UserMenu : undefined;
    Login : undefined;
    PetList : undefined;
    CreatePet : undefined;
    EditPetList : undefined;
    Signin : undefined;
}
interface PageConfig
{
    endPoint : keyof RootStackParamList;
    component : React.ComponentType<any>;
    option? : NativeStackNavigationOptions;
    isAuth : boolean;
}

/// 모든 페이지 라우터의 상수 (모든 페이지의 신)
const data : ReadonlyArray<PageConfig> = Object.freeze([
    {
        endPoint : "Developer",
        component : Developer,
        option : {},
        isAuth : false
    },
    {
        endPoint : "UserMenu" ,
        component : UserMenuList,
        isAuth : true
    },

    {
        endPoint : "Login",
        component : LoginPage,
        option : {
            headerShown : false
        },
        isAuth : false
    },
    {
        endPoint : "Pet",
        component : Pet,
        isAuth : false
    },
    {
        endPoint : "PetList",
        component : PetList,
        option : {
            headerShown : false
        },
        isAuth : true
    },
    {
        endPoint : "CreatePet",
        component : CreatePet,
        isAuth : false
    },
    {
        endPoint : "EditPetList",
        component : EditPetList,
        isAuth : false
    },
    {
        endPoint : "Signin",
        component : Signin,
        isAuth : false
    }
])
const Stack = createNativeStackNavigator<RootStackParamList>()
const withAuthorization = (Component : ComponentType<any>) => {
    return (prop : any) => (
        <Authorization>
            <Component {...prop}/>
        </Authorization>
    )
}
export const Pages = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Developer">
                {
                    data.map(({endPoint, component, option, isAuth}, index) => {
                        const ScreenComponent = isAuth ? withAuthorization(component) : component;
                        return (
                            <Stack.Screen
                                key={index}
                                name={endPoint}
                                component={ScreenComponent}
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