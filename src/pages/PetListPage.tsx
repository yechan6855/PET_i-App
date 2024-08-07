import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { PetList } from "../components/PetList"

import editIconImage from '../../assets/images/edit-icon.png'
import style from '../Constants/Style';
import usePet from "../hooks/usePet"
import { useNavigation, useFocusEffect } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "."
import { useUserContext } from "../hooks/useUserContext";
import { useCallback } from "react";
import { Pet, PetDetail } from "../types/pet";
const styles = StyleSheet.create({
    container : {
        //backgroundColor : "red",
        flex : 1,
        margin : style.MARGIN,
        marginBottom : style.MARGIN + 20,
        marginTop : style.MARGIN + 20,
    },
    top : {
        // backgroundColor : "blue",
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : 8
    },
    topGuideText :  {
        fontSize : 17,
        fontWeight : '600'
    },
    section : {
        // backgroundColor : "green",
        flex : 1,
        marginTop : 20
    },
})
export default function PetListPage() {
    const  { list, refetch } = usePet()    
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const { user } = useUserContext()
    
    const clickItemAction = useCallback((pet : Pet) => {
        navigation.navigate("PetPage", { pet })
    }, [navigation])

    useFocusEffect(
        useCallback(() => {
            refetch()
        }, [refetch])
    )

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View>
                    <Text style={styles.topGuideText}>{user?.name} 님의 아이들</Text>
                </View>
                <TouchableOpacity onPress={() => {navigation.navigate("CreatePet")}}>
                    <Image
                        source={editIconImage}
                        style={{
                            width : 30,
                            height : 30
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.section}>
                <PetList item={list} onItemPress={clickItemAction} />
            </View>
        </View>
    )
}