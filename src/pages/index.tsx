import React from "react";
import APage from "./APage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BPage from "./BPage";
import { NavigationContainer } from "@react-navigation/native";
import CPage from "./CPage";
import DPage from "./DPage";
import EPage from "./EPage";

interface PageConfig
{
    endPoint : string;
    component : React.ComponentType<any>;
}
/// 모든 페이지 라우터의 상수 (모든 페이지의 신)
const data : ReadonlyArray<PageConfig> = Object.freeze([
    {
        endPoint : "A",
        component : APage
    },
    {
        endPoint : "B",
        component : BPage
    },
    {
        endPoint : "C",
        component : CPage
    },
    {
        endPoint : "D",
        component : DPage
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
            <Stack.Navigator initialRouteName="A">
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