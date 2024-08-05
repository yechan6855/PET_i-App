import React, { useCallback, useEffect, useReducer } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Button } from 'react-native';

import testProfileImage from '../../assets/images/test-dogprofileimg.png';
import { Section } from '../components';
import RNPickerSelect from 'react-native-picker-select'
import { BirthDay, ImageFileProp, PetImage, PetProfileForm } from '../components/CreatePet';
import Color from '../Constants/Color';
import { Pet } from '../types/pet';
import { launchImageLibrary } from "react-native-image-picker"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "."


const styles = StyleSheet.create({

    container :{
        height : '100%',
        width : '100%',
        backgroundColor : '#ffffff',
        alignItems : 'center',
        justifyContent : 'center'
    },

    innerContainer : {
        height : '95%',
        width : '90%',
        alignItems : 'stretch',
        flexDirection : 'column',
        justifyContent: 'space-between',
        // backgroundColor : 'black'
    },

    guideTextContainer : {
        // width : '100%',
        // height : '10%',
        // backgroundColor : '#6d1a00'
        
    },
    guideText : {
        fontSize : 18,
        fontWeight : '900'
    },

    profileContainer : {
        flex : 1,
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems : "center",        
    },
    nameGenderSection : {
        width : '50%',
        height : '80%',
        backgroundColor : '#ff00de'
    },
    input:{
        width : '100%',
        height : '30%',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    genderBtnSection : {
        width : '100%',
        height : '70%',
        alignItems : 'center',
        justifyContent : 'space-between',
        flexDirection : 'row'
    },

    genderBtn : {
        width : '45%',
        height: '80%',
        backgroundColor : '#3fea2d'
    },

    birthdateSection : {
        width : '100%',
        height : '15%',
        backgroundColor : '#6d1a00'
    },

    sectionTitle :{
        width : '100%',
        height : '30%',
        backgroundColor : '#ff00de'
    },
    birthDateInputSection :{
        width : '100%',
        height : '70%',
        flexDirection : 'row',
        backgroundColor : '#3fea2d',
        justifyContent : 'center',
        alignItems : 'center'
    },

    birthYearInput : {
        width: '30%',
        height : '100%',
        fontSize : 25
    },
    birthDateInput : {
        width: '15%',
        height : '100%',
        fontSize : 25
    },
    birthSectionText :{
        width : '10%',
        fontSize: 15
    },

    
    breedSection :{
        width : '100%',
        height : '20%',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems:'center',
        backgroundColor : '#6d1a00'
    },

    breedContainerUpper :{
        width : '100%',
        height : '50%',
        flexDirection: 'row',
        justifyContent : 'space-between',
    },
    breedContainerLower :{
        width : '100%',
        height : '50%',
        flexDirection: 'row',
        justifyContent : 'space-between',
    },
    breedListItem:{
        width : '22%',
        height : '60%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3fea2d',

    },
    createBtn : {
        width : '100%',
        // height : '10%',
        backgroundColor : Color.ORANGE,
        borderRadius : 20
    },
});

/* 색상값 (화면 구성 포토샵 작업본 기준)

배경 (주홍) : #ea5a2d
마젠타 : #ff00de
형광초록 : #3fea2d
적색 : #6d1a00

*/

interface PetForm 
{
    name : string | undefined;
    gender : number | undefined;
    breed : string | undefined;
    birth : string | undefined;
    image : ImageFileProp | undefined;
}
type PetFormAction = 
{ key : "NAME", name : string } |
{ key : "BIRTH", birth : string } |
{ key : "BREED", breed : string } |
{ key : "GENDER", gender : number } |
{ key : "IMAGE", image : ImageFileProp }
function CreatePet()
{
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    function petReducer(state : PetForm, action : PetFormAction) : PetForm {
        switch (action.key) {
            case "NAME" :
                return {
                    ...state,
                    name : action.name
                }
            case 'BIRTH':
                return {
                    ...state,
                    birth : action.birth
                }
            case 'BREED':
                return {
                    ...state,
                    breed : action.breed
                }
            case 'GENDER': 
                return {
                    ...state,
                    gender : action.gender
                }
            case 'IMAGE':
                return {
                    ...state,
                    image : action.image
                }
            default :
                return state
        }
        
    }
    const [petForm, dispatch] = useReducer(petReducer, {
        name : undefined,
        gender : undefined,
        breed : undefined,
        birth : undefined,
        image : undefined
    })

    const createAction = useCallback( async () => {
        const {name, gender, breed, birth, image} = petForm
        if (!birth) {
            console.log("생년월일 null")
            return
        }
        if (!name) {
            console.log("이름 null")
            return
        }
        if (!breed) {
            console.log("품종 null")
            return
        }
        if (gender === undefined) {
            console.log("성별 null")
            return
        }        
        if (!image) {
            console.log("이미지 null")
            return
        }
        await createRequest(name, gender, breed, birth, image)
    }, [petForm])
    const createRequest = useCallback (async (
        name : string,
        gender : number,
        breed : string,
        birth : String,
        image : ImageFileProp
    ) => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("gender", gender)
        formData.append("breed", breed)
        formData.append("birth", birth)
        formData.append("image", {...image, name : image.fileName})
        // console.log(formData)
        const response = await fetch("http://10.0.2.2:5500/pet", {
            method : "POST",
            body : formData,
            headers : {
                "Content-Type" : "multipart/form-data"
            }
        })
        const result = await response.json()
        console.log(result)
    }, [])
    return(
        <View style = {styles.container}>
            <View style = {styles.innerContainer}>

                <View style = { styles.guideTextContainer}>
                    <Text style = { styles.guideText}>등록을 위해</Text>
                    <Text style = { styles.guideText}>아이의 정보를 입력해주세요!</Text>
                </View>
                <View style = {styles.profileContainer}>
                    <PetImage
                        onFileChange={(file) => {dispatch({key:"IMAGE", image : file})}}
                    />                    
                    <PetProfileForm
                        onNameChange={(name : string) => {dispatch({key:'NAME', name})}}
                        onGenderChange={(gender) => {dispatch({key : "GENDER", gender})}}
                    />
                </View>
                <Section
                    title='생년월일'
                    style={{
                        // flex :1
                    }}
                >
                    <BirthDay
                        onChangeDate={(birth) => { if (birth) dispatch({key:"BIRTH", birth}) }}
                    />
                </Section>
                <Section
                    title='품종'
                    style={{
                        flex :1,
                    }}
                >
                    <RNPickerSelect                        
                        onValueChange={(value) => dispatch({key:"BREED", breed : value})}
                        items={[
                            { label: '말티즈', value: '말티즈' },
                            { label: 'Baseball', value: 'baseball' },
                            { label: 'Hockey', value: 'hockey' },
                        ]}
                        />
                </Section>
                <TouchableOpacity style={styles.createBtn} onPress={() => {createAction(); navigation.navigate("PetList");}}>
                    <Text style={{
                        fontSize : 18,
                        color : "#ffffff",
                        fontWeight : "600",
                        textAlign : "center",
                        paddingVertical :18
                    }}>추가</Text>
                </TouchableOpacity>

            </View>
            
        </View>
    );
}

export default CreatePet;