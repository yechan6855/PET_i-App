import React, { useCallback, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import textLogoWhite from '../../assets/images/peti-text-icon-w.png';
import backgroundImage from '../../assets/images/background.jpg';
import { useUserContext } from '../hooks/useUserContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '.';
import { getServerURL } from '../constants/Config';

const styles = StyleSheet.create({

    BackgroundImage : {
        flex: 1,
        justifyContent: 'center'
    },

    Container: {
        //최상위 부모_상단 / 하단 공백, 수직정렬
        width : '100%',
        height: '100%',
        paddingTop : 100,
        flexDirection: 'column',
        justifyContent : 'flex-start',
        // backgroundColor : '#d2ea2d'
    },
    TopTextLogo:{
        height: 50,
        width: '100%',
        resizeMode: 'contain',
        // backgroundColor : '#2de8ea'
    },
    TextInputContainer: {
        height: '30%',
        //backgroundColor: '#2de8ea', //아쿠아색
        marginTop: '10%',
        padding : '4%',
        alignItems: 'center',
        flexDirection: 'column',
    },
    TextInputItem: {
        width:'100%',
        height:'40%',
        marginBottom: '2%',
        //backgroundColor: 'black',
        alignItems: 'center',
        flexDirection: 'row',
        //padding : '1%'
    },
    TextInputLabel:{ 
        width : 60,
        fontSize:20,
        fontWeight:'bold',
        //backgroundColor:'white',
        color : 'white',
        textAlign : 'center',
        //justifyContent : 'center'
    },
    input:{
        width : '80%',
        textAlign : 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        //backgroundColor : '#d2ea2d'
        color : "#fff",
        fontWeight : '600',
        fontSize : 22
    },




    LoginBtnContainer:{
        flexDirection: 'column',
        width : '80%',
        alignSelf : 'center',
        // backgroundColor : 'red'
    },

    LoginBtn:{
        borderRadius:20,
        backgroundColor:'#EA5A2D',
        paddingTop : 12,
        paddingBottom : 12,
        marginBottom : 16
    },
    SigninBtn:{
        borderRadius:20,
        backgroundColor:'white',
        paddingTop : 12,
        paddingBottom : 12,
    },
    LoginBtnText : {
        fontSize: 22 ,
        fontWeight: 'bold',
        color : 'white',
        textAlign : 'center',
        
    },
    SigninBtnText : {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    TextFindingIDPw : {
        textAlign : 'center',
        color : 'white',
        fontSize : 18
    },
    FindingIDPw : {
        marginTop : 50,
    }


});

function LoginPage() {
    const { alert } = useUserContext()
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const loginRequest = useCallback( async (email : string, password : string) => {        
        
        try {
            const response = await fetch(`${getServerURL()}/auth/login`, {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({ email, password })
            })
            const result = await response.json()
            if (!response.ok) {
                throw new Error(result.message)
            }
                alert("로그인 성공", `${result.user.username}님 반갑습니다.`, () => {
                navigation.navigate("PetList")
            })
        } catch (error) {
            if (error instanceof Error) {
                alert("로그인 실패", error.message)
                console.log(error.message)
                return
            }
            alert("Error", "Error...")
            console.error(error)
        }
        
    }, [])
    
    const [inputEmail, setInputEmail] = useState<string>()
    const [inputPassword, setInputPassword] = useState<string>()
    const loginAction = useCallback(async () => {
        if (!inputEmail) {
            alert("경고", "이메일을 입력 하여 주세요")
            return
        }
        if (!inputPassword) {
            alert("경고", "비밀번호를 입력 하여 주세요")
            return
        }
        await loginRequest(inputEmail, inputPassword)
    }, [inputEmail, inputPassword])

    const signUpHandle = useCallback(() => {
        // console.log("회원가입 페이지 이동")
        navigation.navigate("Signin")
    }, [])
    return (
        <ImageBackground source={backgroundImage} style={styles.BackgroundImage} resizeMode="cover">
        <View style={styles.Container}>
            <View>
                <Image
                    style={styles.TopTextLogo}
                    source={textLogoWhite}
                />
            </View>
            <View style={styles.TextInputContainer}>
                <View style ={styles.TextInputItem}>
                    <Text style ={styles.TextInputLabel}>ID</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder="ID를 입력해주세요"
                        placeholderTextColor='white'
                        value={inputEmail}
                        onChangeText={setInputEmail}
                    />
                </View>
                <View style ={styles.TextInputItem}>
                    <Text style ={styles.TextInputLabel}>PW</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder="비밀번호를 입력해주세요"
                        placeholderTextColor='white'
                        value={inputPassword}
                        secureTextEntry={true}
                        onChangeText={setInputPassword}
                    />
                </View>
                
            </View>

            <View style = {styles.LoginBtnContainer}>
                <TouchableOpacity
                    style={styles.LoginBtn}
                    onPress={loginAction}
                >
                    <Text style = {styles.LoginBtnText}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.SigninBtn}
                    onPress={signUpHandle}
                >
                    <Text style = {styles.SigninBtnText}>회원가입</Text>
                </TouchableOpacity>
            </View>
            
            <View style = {styles.FindingIDPw}>
                <TouchableOpacity>
                    <Text style = {styles.TextFindingIDPw}>ID / 비밀번호 찾기 &gt;</Text>
                </TouchableOpacity>
            </View>

        </View>
        </ImageBackground>

    );
}

export default LoginPage;