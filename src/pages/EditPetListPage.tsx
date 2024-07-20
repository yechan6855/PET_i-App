import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Button } from 'react-native';


import petProfileImg from '../../assets/images/test-dogprofileimg.png';

const styles = StyleSheet.create({

    container :{
        width :'100%',
        height : '100%',
        alignItems : 'center',
        backgroundColor : 'black'
    },
    userNameSection : {
        width : '100%',
        height : '10%',
        justifyContent : 'center',
        backgroundColor : '#2de8ea',
    },

    petListSection :{
        width : '90%',
        height : '100%',
        backgroundColor : 'white',
        //justifyContent : 'space-between',
        //margin : '2%',
        flexDirection : 'column'
    },
    PetListItemSection :{
        width : '100%',
        height : '35%',
        flexDirection : 'row',
        //margin : '2%',
        justifyContent : 'space-between',
    },
    petListItemContainer :{
        width : '48%',
        height : '100%',
        flexDirection : 'column',
        backgroundColor : '#ea5a2d',
        alignItems : 'center',
        justifyContent : 'center'
    },
    petListItemImg :{
        height : '60%',
        width : '80%',
        resizeMode: 'contain',

    },
    deletePetItemSection : {
        width : '100%',
        height : '10%',
        alignItems : 'flex-end',
        backgroundColor : '#ddd'
    },
    deletePetBtn : {
        width : '15%',
        height : '100%',
        backgroundColor : '#3fea2d'
    },
    petListItemTextContainer :{
        height : '25%',
        width : '100%',
        backgroundColor : '#2de8ea',
        justifyContent : 'center'
    },
    petListItemTest :{
        textAlign : 'center',
    },
    createPetItemBtn : {
        width : '30%',
        height : '25%',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#ddd'
    },
    modifyCompleteBtn : {
        width : '100%',
        height : '20%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor : '#3fea2d'
    }

});

interface PetListItemProp
{
    petID : string,
    petName : string,
    petBirthdate : string,
    petProfileUrl : string
}

function EditPetList()
{
    return(
        <View style = {styles.container}>
                <View style = {styles.userNameSection}>
                    <Text>정예림 님의 아이들</Text>
                </View>


            <View style = {styles.petListSection}>
                <View style = {styles.PetListItemSection}>

                <View style = {styles.petListItemContainer}>
                    <View style = {styles.deletePetItemSection}>
                        <TouchableOpacity
                        style = {styles.deletePetBtn}
                        />
                    </View>
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

                <View style = {styles.PetListItemSection}>
                    <View style = {styles.petListItemContainer}>
                        <TouchableOpacity
                        style = {styles.createPetItemBtn}
                        />
                    </View>
                </View>


                    <TouchableOpacity
                    style = {styles.modifyCompleteBtn}
                    />
    

            </View>
        
        </View>

    );
}

function PetListItem(prop : PetListItemProp)
{
    <View style = {styles.petListItemContainer}>
    <View style = {styles.deletePetItemSection}>
        <TouchableOpacity
        style = {styles.deletePetBtn}
        />
    </View>
    <Image
    source={{uri: prop.petProfileUrl}}
    style = {styles.petListItemImg}
    />
    <View style = {styles.petListItemTextContainer}>
        <Text style = {styles.petListItemTest}>{prop.petName}</Text>
        <Text style = {styles.petListItemTest}>{prop.petBirthdate}</Text>
    </View>
</View>
}

export default EditPetList;