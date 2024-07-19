import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Button } from 'react-native';

import editIcon from '../../assets/images/edit-icon.png';
import petProfileImg from '../../assets/images/test-dogprofileimg.png';

const styles = StyleSheet.create({

    container :{
        width :'100%',
        height : '100%',
        backgroundColor : 'black'
    },
    petListEditContainer :{
        width : '100%',
        height : '10%',
        flexDirection : 'row',
        backgroundColor : 'white',
    },
    userNameSection : {
        width : '80%',
        backgroundColor : '#2de8ea',
    },
    editIconSection : {
        width : '20%',
        height : '100%',
        alignItems : 'center'
    },
    editIconImage :{
        width : '70%',
        height : '70%',
        resizeMode: 'contain',
    },
    petListSection :{
       margin : '5%',
        width : '90%',
        height : '100%',
        backgroundColor : 'white'
    },
    petListItemContainer :{
        width : '45%',
        height : '35%',
        margin : '2%',
        flexDirection : 'column',
        backgroundColor : '#ea5a2d',
        alignItems : 'center'
    },
    petListItemImg :{
        height : '70%',
        width : '80%',
        resizeMode: 'contain',

    },
    petListItemTextContainer :{
        height : '25%',
        width : '100%',
        backgroundColor : '#2de8ea',
        justifyContent : 'center'
    },
    petListItemTest :{
        textAlign : 'center',
    }

});

function PetList()
{
    return(
        <View style = {styles.container}>
            <View style = {styles.petListEditContainer}>
                <Text style = {styles.userNameSection}>정예림 님의 아이들</Text>
                <TouchableOpacity style = {styles.editIconSection}>
                    <Image
                    source={editIcon}
                    style = {styles.editIconImage}
                    />
                </TouchableOpacity>
            </View>

            <View style = {styles.petListSection}>

                <View style = {styles.petListItemContainer}>
                    <Image
                    source={petProfileImg}
                    style = {styles.petListItemImg}
                    />
                    <View style = {styles.petListItemTextContainer}>
                        <Text style = {styles.petListItemTest}>살구</Text>
                        <Text style = {styles.petListItemTest}>2014.09.03</Text>
                    </View>

                    
                </View>


            </View>
        
        </View>

    );
}

export default PetList;