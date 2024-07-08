import React from "react";
import { NativeStackNavigationOptions, createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import PetList from "./PetList";
import Developer from "./Developer";
import PetPage from "./PetPage";

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
        endPoint : "Pet",
        component : PetPage
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