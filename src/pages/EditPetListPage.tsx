import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Button } from 'react-native';

import {PetList} from "../components/EditPetList"
import style from '../Constants/Style'

import petProfileImg from '../../assets/images/test-dogprofileimg.png';
import Color from '../Constants/Color';


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
    return(
    <View style = {styles.background}>
        
        <View style={styles.container}>
            <View style={styles.top}>
                <View>
                    <Text style={styles.topGuideText}>정예림 님의 아이들</Text>
                </View>
            </View>
            <View style={styles.section}>
                <PetList/>
            </View>
            <View>
                <TouchableOpacity style = {styles.footer}>
                    <Text style = { styles.btnText}>수정완료</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );

} export default EditPetList;


