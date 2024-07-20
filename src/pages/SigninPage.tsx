import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Button } from 'react-native';

const styles = StyleSheet.create({

    container : {
        width : '100%',
        height : '100%',
        flexDirection : 'column',
        justifyContent : 'space-between',
        //alignItems : 'center',
        backgroundColor : '#ddd'
    },

    userInformSection : {
        width : '100%',
        height : '40%',
        justifyContent : 'space-between',
        alignItems : 'center',
        backgroundColor : '#6d1a00'
    },
    informTextSection : {
        width : '90%',
        height : '20%',
        justifyContent : 'flex-start',
        backgroundColor : '#3fea2d'
    },
    informText :{
        textAlign : 'left'
    },

    userIDSection : {
        width : '100%',
        height : '35%',
        justifyContent : 'space-between',
        alignItems : 'center',
        backgroundColor : '#6d1a00'

    },
    userPWSection :{
        width : '100%',
        height : '60%',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        //backgroundColor : '#d2ea2d'
    },
    pwTextInput :{
        width : '90%',
        height : '40%',
        textAlign : 'left',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',

    },
    footerBtnSection : {
        width : '100%',
        height : '8%',
        alignItems : 'center',
        //position: 'absolute',
        //bottom: 0,
        //left: 0,
        //right: 0,
        backgroundColor : '#6d1a00'
    },
    textInput:{
        width : '90%',
        height : '25%',
        textAlign : 'left',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        //backgroundColor : '#d2ea2d'
    },
    sendCodeBtn :{
        width : '80%',
        height : '15%',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#3fea2d'
    },
    signinBtn :{
        width : '80%',
        height : '100%',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#3fea2d'
    }


});

function Signin() {
    return(
        <View style = {styles.container}>

            <View style ={styles.userInformSection}>
                
                <View style ={styles.informTextSection}>
                    <Text style = {styles.informText}>
                        가입을 진행하기 위해{"\n"}아래의 정보를 입력해 주세요
                    </Text>
                </View>

                <TextInput
                        style = {styles.textInput}
                        placeholder="이름을 입력해주세요"
                        placeholderTextColor='orange'
                />
                <TextInput
                        style = {styles.textInput}
                        placeholder="전화번호를 입력해주세요"
                        placeholderTextColor='orange'
                />

                <TouchableOpacity style ={styles.sendCodeBtn}>
                    <Text>인증번호 전송</Text>
                </TouchableOpacity>


  


            </View>

                            
            <View style = {styles.userIDSection}>

                <TextInput
                    style = {styles.textInput}
                    placeholder="이메일 주소를 입력해주세요"
                    placeholderTextColor='orange'
                />
                <View style = {styles.userPWSection}>
                    <TextInput
                        style = {styles.pwTextInput}
                        placeholder="비밀 번호 입력"
                        placeholderTextColor='orange'
                    />
                    <TextInput
                        style = {styles.pwTextInput}
                        placeholder="비밀 번호 확인"
                        placeholderTextColor='orange'
                    />
                </View>


                    
            </View>
                    


            <View style = { styles.footerBtnSection}>
                <TouchableOpacity
                    style = {styles.signinBtn} >
                    <Text>시작하기</Text>
                </TouchableOpacity>
       

        </View>
        
        </View>
    );
}

export default Signin;