import React, { useCallback, act, useReducer, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Button, KeyboardAvoidingView, Platform } from 'react-native';
import Color from '../Constants/Color';
import { useUserContext } from '../hooks/useUserContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '.';

const styles = StyleSheet.create({

    container : {
        flex : 1,
        // width : '100%',
        // height : '100%',
        // flexDirection : 'column',
        // justifyContent : 'space-between',
        //alignItems : 'center',
        // backgroundColor : '#ddd'
    },
    userInformSection : {
        width : '100%',
        // height : '40%',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingVertical: 20
        // backgroundColor : '#6d1a00'
    },
    informTextSection : {
        width : '90%',
        // height : '20%',
        justifyContent : 'center',        
        // backgroundColor : '#3fea2d',
    },
    informText :{
        // backgroundColor : 'red'        
        fontWeight : '900',
        fontSize : 18
    },

    userIDSection : {
        width : '100%',
        // height : '30%',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingVertical: 20
        // backgroundColor : '#6d1a00'

    },
    userPWSection :{
        width : '100%',
        // height : '50%',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop: 60
        //backgroundColor : '#d2ea2d'
    },
    pwTextInput :{
        width : '90%',
        // height : '40%',
        borderBottomWidth: 2,
        borderBottomColor: Color.ORANGE,
        fontSize : 18,
        marginBottom: 10

    },
    footerBtnSection : {
        width : '100%',
        // height : '8%',
        alignItems : 'center',
        padding: 20
        //position: 'absolute',
        //bottom: 0,
        //left: 0,
        //right: 0,
        // backgroundColor : '#6d1a00'
    },
    textInput:{
        width : '90%',
        // height : '25%',
        textAlign : 'left',
        borderBottomWidth: 2,
        borderBottomColor: Color.ORANGE,
        //backgroundColor : '#d2ea2d',
        padding : 6,
        fontSize : 18,
        marginBottom: 10,
    },
    sendCodeBtn :{
        width : '80%',
        height : '14%',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : Color.ORANGE,
        borderRadius : 10,
        // marginVertical: 10,
    },
    signinBtn :{
        width : '80%',
        // height : '100%',        
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : Color.ORANGE,
        borderRadius : 50
    },
    btnText : {
        fontSize : 18,
        fontWeight : '900',
        color : "#fff",
        padding : 12
    }


});


function Signin() {
    const { alert } = useUserContext()
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const signinRequest = useCallback (async (
        name : string,
        phoneNumber : string,
        email : string,
        password : string
    ) => {
        try {
            const response = await fetch("http://10.0.2.2:5500/auth/register", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({name, phoneNumber, email, password})
            })
            const result = await response.json()
            console.log(result)
            if (!response.ok) {
                throw new Error(result.message)
            }
            alert("회원가입 성공", `${name}님 반갑습니다.`, () => {
                navigation.navigate("Login")
            })
        } catch (error) {
            if (error instanceof Error) {
                alert("회원가입 실패", error.message)
                console.log(error.message)
                return
            }
            alert("Error", "Error...")
            console.error(error)
        }

    }, [])

    const [inputName, setInputName] = useState<string>()
    const [inputPhoneNumber, setInputPhoneNumber] = useState<string>()
    const [inputEmail, setInputEmail] = useState<string>()
    const [inputPassword, setInputPassword] = useState<string>()
    const [inputPWcheck, setInputPWcheck] = useState<string>()
    const sigininAction = useCallback(async () => {
        if(!inputName) {
            alert("경고", "이름을 입력하여 주세요.")
            return
        }
        if(!inputPhoneNumber) {
            alert("경고", "전화번호를 입력하여 주세요.")
            return
        }
        if(!/^010[0-9]{3,4}[0-9]{4}$/.test(inputPhoneNumber)) {
            alert("경고", "유효하지 않은 전화번호입니다.")
        }
        if(!inputEmail) {
            alert("경고", "이메일을 입력하여 주세요.")
            return
        }
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail)) {
            alert("경고", "유효하지 않은 이메일입니다.")
            return
        }
        if(!inputPassword) {
            alert("경고", "비밀번호를 입력하여 주세요.")
            return
        }
        if(!/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%]{8,12}$/.test(inputPassword)) {
            alert("경고", "비밀번호 형식 불만족")
            return
        }
        if(inputPassword !== inputPWcheck) {
            alert("경고", "비밀번호 불일치")
            return
        }
        await signinRequest(inputName, inputPhoneNumber, inputEmail, inputPassword)
    }, [inputName, inputPhoneNumber, inputEmail, inputPassword, inputPWcheck])

    return(
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.select({ ios: 0, android: 60 })}

        >
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
            <View style ={styles.userInformSection}>
                <View style ={styles.informTextSection}>
                    <Text style = {styles.informText}>
                        가입을 진행하기 위해{"\n"}아래의 정보를 입력해 주세요
                    </Text>
                </View>

                <TextInput
                        style = {styles.textInput}
                        placeholder="이름을 입력해주세요"
                        placeholderTextColor='gray'
                        value={inputName}
                        onChangeText={setInputName}
                />
                <TextInput
                        style = {styles.textInput}
                        placeholder="전화번호를 입력해주세요"
                        placeholderTextColor='gray'
                        value={inputPhoneNumber}
                        onChangeText={setInputPhoneNumber}
                />

                <TouchableOpacity style ={styles.sendCodeBtn}>
                    <Text style={{
                        color : "#ffffff",
                        fontWeight : '900',
                        fontSize : 18,                        
                    }}>인증번호 전송</Text>
                </TouchableOpacity>


  


            </View>

                            
            <View style = {styles.userIDSection}>

                <TextInput
                    style = {styles.textInput}
                    placeholder="이메일 주소를 입력해주세요"
                    value={inputEmail}
                    onChangeText={setInputEmail}
                />
                <View style = {styles.userPWSection}>
                    <TextInput
                        style = {styles.pwTextInput}
                        placeholder="비밀 번호 입력"
                        value={inputPassword}
                        onChangeText={setInputPassword}
                    />
                    <TextInput
                        style = {styles.pwTextInput}
                        placeholder="비밀 번호 확인"
                        value={inputPWcheck}
                        onChangeText={setInputPWcheck}
                    />
                </View>


                    
            </View>
                    


            <View style = { styles.footerBtnSection}>
                <TouchableOpacity
                    style = {styles.signinBtn}
                    onPress={sigininAction}
                >
                    <Text style={styles.btnText}>시작</Text>
                </TouchableOpacity>
       

        </View>
        </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default Signin;