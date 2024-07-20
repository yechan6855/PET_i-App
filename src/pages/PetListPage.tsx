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
        height : '10%',
        flexDirection : 'row',
        backgroundColor : 'white',
    },
    tipText : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        // backgroundColor : 'red',
    },
    userNameSection : {
        width : '80%',
        // backgroundColor : '#2de8ea',
        fontSize : 22
    },
    editIconSection : {
        width : '20%',
        height : '100%',
        alignItems : 'center',
        justifyContent : 'center'
    },
    editIconImage :{
        width : '70%',
        height : '70%',
        resizeMode: 'contain',
    },
    petListSection :{
        backgroundColor : 'white',
        flex : 1,
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-between',
        padding : 16,
    },
    petListItemContainer :{
        width : '45%',
        height : 200,
        backgroundColor : '#FFF0E5',
        alignItems : 'center',
        justifyContent : 'center',
        marginBottom : 16,
        borderRadius : 16
    },
    petListItemImg :{
        width : 100,
        height : 100,
        marginBottom : 16,
        borderRadius : 50
    },
    petListItemTextContainer :{
    },
    petListItemTest :{
        textAlign : 'center',
        fontWeight : 600
    }

});

function PetList()
{
    return(
        <View style = {styles.container}>
            <View style = {styles.petListEditContainer}>
                <View style={styles.tipText}>
                    <Text style = {styles.userNameSection}>정예림 님의 아이들</Text>
                </View>
                <TouchableOpacity style = {styles.editIconSection}>
                    <Image
                        source={editIcon}
                        style = {styles.editIconImage}
                    />
                </TouchableOpacity>
            </View>
            <View style = {styles.petListSection}>
                <Item
                    name='살구'
                    birth='2014.09.04'
                    image='이미지임'
                    petId='1'
                />
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

interface PetItemProp {
    name : string;
    birth : string;
    petId : string;
    image : string;
}
function Item(prop : PetItemProp) {
    return (
        <View style = {styles.petListItemContainer}>
            <Image
                source={petProfileImg}
                style = {styles.petListItemImg}
            />
            <View style = {styles.petListItemTextContainer}>
                <Text style = {styles.petListItemTest}>{prop.name}</Text>
                <Text style = {styles.petListItemTest}>{prop.birth}</Text>
            </View>
        </View>
    )
}

export default PetList;