import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Button } from 'react-native';

import testProfileImage from '../../assets/images/test-dogprofileimg.png';
import { Section } from '../components';
import RNPickerSelect from 'react-native-picker-select'


const styles = StyleSheet.create({

    container :{
        height : '100%',
        width : '100%',
        backgroundColor : '#ea5a2d',
        alignItems : 'center',
        justifyContent : 'center'
    },

    innerContainer : {
        height : '95%',
        width : '90%',
        alignItems : 'stretch',
        flexDirection : 'column',
        justifyContent: 'space-between',
        backgroundColor : 'black'
    },

    guideTextContainer : {
        width : '100%',
        height : '10%',
        backgroundColor : '#6d1a00'
    },

    profileContainer : {
        width : '100%',
        height : '30%',
        flexDirection : 'row',
        backgroundColor : '#6d1a00',
        justifyContent: 'space-between',

    },

    profileImgContainer : {
        width : '45%',
        height : '100%',
        backgroundColor : '#ff00de'
    },
    profileImageSection :{
        width : '100%',
        height : '80%',
        resizeMode : 'contain'
    },
    profileImgUploadBtn : {
        width : '100%',
        height : '20%',
        backgroundColor : '#3fea2d'
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
        height : '10%',
        backgroundColor : '#3fea2d'
    },

    birth : {
        flexDirection : "row",
        justifyContent : "center"
    },
    birthChild : {
        borderColor : "black",
        // borderWidth : 1,
    },
    birthChildInput : {
        padding : 0,
        fontSize : 36,
        fontWeight : '900',
        textAlign : "left",
        paddingHorizontal : 14
    },


});

/* 색상값 (화면 구성 포토샵 작업본 기준)

배경 (주홍) : #ea5a2d
마젠타 : #ff00de
형광초록 : #3fea2d
적색 : #6d1a00

*/


function CreatePet()
{
    return(
        <View style = {styles.container}>
            <View style = {styles.innerContainer}>

                <View style = { styles.guideTextContainer}>
                    <Text>등록을 위해</Text>
                        <Text>아이의 정보를 입력해주세요!</Text>
                </View>

                <View style = {styles.profileContainer}>
                    <View style = {styles.profileImgContainer}>
                        <Image
                        style = {styles.profileImageSection}
                        source={testProfileImage}
                        />
                        <TouchableOpacity style = {styles.profileImgUploadBtn}>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.nameGenderSection}>
                        <TextInput
                        style = {styles.input}
                        placeholder="이름을 입력해주세요"
                        placeholderTextColor='white'
                        />
                        <View style ={styles.genderBtnSection}>
                            <TouchableOpacity style = {styles.genderBtn}/>
                            <TouchableOpacity style = {styles.genderBtn}/>
                        </View>

                    </View>

                </View>
                <Section
                    title='생년월일'
                >
                    <View style={styles.birth}>
                        <View style={styles.birthChild}>
                            <TextInput style={styles.birthChildInput} defaultValue='YYYY' maxLength={4} keyboardType='numeric'/>
                        </View>
                        <View style={styles.birthChild}>
                            <Text style={styles.birthChildInput}>:</Text>
                        </View>
                        <View style={styles.birthChild}>
                            <TextInput style={styles.birthChildInput} defaultValue='MM' maxLength={2} keyboardType='numeric'/>
                        </View>
                        <View style={styles.birthChild}>
                            <Text style={styles.birthChildInput}>:</Text>
                        </View>
                        <View style={styles.birthChild}>
                            <TextInput style={styles.birthChildInput} defaultValue='DD' maxLength={2} keyboardType='numeric'/>
                        </View>
                    </View>
                </Section>
                <Section
                    title='품종'
                >
                    <RNPickerSelect                        
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: '말티즈', value: '말티즈' },
                            { label: 'Baseball', value: 'baseball' },
                            { label: 'Hockey', value: 'hockey' },
                        ]}
                        />
                </Section>
{/* 
                <View style = {styles.birthdateSection}>
                    <Text
                    style = {styles.sectionTitle}>
                        생년월일
                    </Text>
                    <View style ={styles.birthDateInputSection}>
                        <TextInput 
                        style={styles.birthYearInput}
                        keyboardType="numeric"
                        maxLength={4}
                        placeholder="YYYY"/>
                        <Text style = {styles.birthSectionText}>년</Text>
                        <TextInput
                        style = {styles.birthDateInput}
                        keyboardType="numeric"
                        maxLength={2}
                        placeholder="MM"/>
                        <Text>월</Text>
                        <TextInput
                        style = {styles.birthDateInput}
                        keyboardType="numeric"
                        maxLength={2}
                        placeholder="DD"/>
                        <Text>일</Text>
                    </View>

                </View> */}

                <TouchableOpacity style = {styles.createBtn} />

            </View>
            
        </View>
    );
}

export default CreatePet;