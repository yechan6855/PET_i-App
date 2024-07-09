import React from "react";
import { NativeStackNavigationOptions, NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import PetList from "./PetList";
import Developer from "./Developer";
import PetPage from "./PetPage";
import Color from "../Constants/Color";
import { Pressable, Text, View, Image, StyleSheet } from "react-native";
import LogoImage from "../../assets/images/peti_logo.png"
type RootStackParamList = {
    Developer: undefined;
    PetList: undefined;
    Pet: undefined;
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
        component : Developer
    },
    {
        endPoint : "PetList",
        component : PetList
    },
    {
        endPoint : "Pet",
        component : PetPage
    },
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
                                        backgroundColor : Color.ORANGE,
                                        
                                    },
                                    headerTitle : LogoTitle,
                                    headerBackVisible : false,
                                }}
                            />
                        )
                    })
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const LogoTitle = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    return (
        <View>
            <Pressable onPress={()=>{navigation.navigate("Developer")}}>
                <Image style={{
                    width : 80,
                    height :29,
                }} source={LogoImage}/>
            </Pressable>
        </View>
    )
}
export default {}