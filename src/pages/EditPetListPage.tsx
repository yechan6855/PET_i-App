import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Button } from 'react-native';

import {PetList} from "../components/EditPetList"
import style from '../constants/Style'
import usePet from '../hooks/usePet';
import { useUserContext } from '../hooks/useUserContext';

import petProfileImg from '../../assets/images/test-dogprofileimg.png';
import Color from '../constants/Color';


const styles = StyleSheet.create({
    background : {
        width : '100%',
        height : '100%',
        backgroundColor : Color.BASIG
    },

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
    footer :{
        width : '100%',
        height : 50,
        backgroundColor : Color.DEEP_ORANGE,
        borderRadius : 12,
        justifyContent : 'center',
        alignItems : 'center'
    },
    btnText :{
        fontSize : 16,
        color :'white'
    },
    

})


function EditPetList()
{
    const { list, refetch } = usePet();
    const { user, alert } = useUserContext()
    const [deletedPetIds, setDeletedPetIds] = useState<number[]>([])

    const handleDelete = (petId: number) => {
        setDeletedPetIds(prev => [...prev, petId])
    }

    const handleSave = async () => {
        try {
            const response = await fetch('http://10.0.2.2:5500/pet/edit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ petIds: deletedPetIds })
            })
            const result = await response.json()
            console.log(result)
            if (!response.ok) {
                throw new Error(result.message)
            }
            setDeletedPetIds([])
            refetch()
            alert("수정 완료", "수정이 완료되었습니다.")
        } catch (error) {
            if (error instanceof Error) {
                alert("수정 실패", error.message)
                console.log(error.message)
                return
            }
            alert("Error", "Error...")
            console.error(error)
        }
    }

    const filteredPets = list.filter(pet => !deletedPetIds.includes(pet.petId));

    return(
    <View style = {styles.background}>
        
        <View style={styles.container}>
            <View style={styles.top}>
                <View>
                    <Text style={styles.topGuideText}>{user?.name} 님의 아이들</Text>
                </View>
            </View>
            <View style={styles.section}>
                <PetList item={filteredPets} onDelete={handleDelete} deletedPets={deletedPetIds}/>
            </View>
            <View>
                <TouchableOpacity style = {styles.footer} onPress={handleSave}>
                    <Text style = { styles.btnText}>수정완료</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );

} export default EditPetList;


