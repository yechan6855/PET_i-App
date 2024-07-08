import React from "react";
import { NativeStackNavigationOptions, createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import EPage from "./EPage";
import PetList from "./PetList";
import Developer from "./Developer";

interface PageConfig
{
    endPoint : string;
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
        endPoint : "E",
        component : EPage
    },
    
])
const Stack = createNativeStackNavigator()

export const Pages = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Developer">
                {
                    data.map(({endPoint, component}, index) => {
                        return <Stack.Screen key={index} name={endPoint} component={component}/>
                    })
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default {}