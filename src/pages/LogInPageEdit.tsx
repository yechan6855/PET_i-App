import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';

import textLogoWhite from '../../assets/images/peti-text-icon-w.png';

const backgroundImage = require('../../assets/images/background.jpg');

const styles = StyleSheet.create({

    BackgroundImage : {
        flex: 1,
        justifyContent: 'center'
    },

    Container: {
        //최상위 부모_상단 / 하단 공백, 수직정렬
        width : '100%',
        height: '80%',
        marginTop:40,
        marginBottom:20,
        flexDirection: 'column',
        //backgroundColor : '#d2ea2d'
    },
    TopTextLogo:{
        height: 50,
        width: '100%',
        resizeMode: 'contain',
        //backgroundColor : '#2de8ea'
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
    },




    LoginBtnContainer:{
        height:'25%',
        marginTop:'10%',
        flexDirection: 'column',
        padding : '6%',
        //backgroundColor: '#2de8ea',
    },

    LoginBtn:{
        height:'50%',
        borderRadius:20,
        padding : 6,
        backgroundColor:'orange',
        margin : 5
    },
    SigninBtn:{
        height:'50%',
        borderRadius:20,
        backgroundColor:'white',
        padding : 6,
        margin : 5
    },
    LoginBtnText : {
        fontSize:15,
        fontWeight: 'bold',
        color : 'white',
        textAlign: 'center',
    },
    SigninBtnText : {
        fontSize:15,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    TextFindingIDPw : {
        textAlign : 'center',
        color : 'white'
    },
    FindingIDPw : {
        position : 'absolute',
        bottom: 0,
        width: '100%'
    }


});

function LoginPageEdit() {
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
                        />
                    </View>
                <View style ={styles.TextInputItem}>
                    <Text style ={styles.TextInputLabel}>PW</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder="비밀번호를 입력해주세요"
                        placeholderTextColor='white'
                        />
                </View>
                
            </View>

            <View style = {styles.LoginBtnContainer}>
                <TouchableOpacity style = {styles.LoginBtn}>
                    <Text style = {styles.LoginBtnText}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.SigninBtn}>
                    <Text style = {styles.SigninBtnText}>회원가입</Text>
                </TouchableOpacity>
            </View>
            
            <View style = {styles.FindingIDPw}>
            <TouchableOpacity>
                <Text style = {styles.TextFindingIDPw}>ID / 비밀번호 찾기</Text>
            </TouchableOpacity>
            </View>



        </View>
        </ImageBackground>

    );
}

export default LoginPageEdit;