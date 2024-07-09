import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import OrangeIconImage from "../../assets/images/peti_icon_orange.png"
import man from "../../assets/images/man.png"
import female from "../../assets/images/female.png"

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor:"white",
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width : 50,
        height : 40,
        marginBottom: 10
    },
    header:{
        flexDirection:'row',
        marginRight:180,
        marginBottom:30
    },
    headertext: {
        fontSize:25,
        fontWeight:'bold',
        color:'#EA5A2D',
        marginLeft:10,
        marginTop:3
    },
    title:{
        marginRight:250,
        fontSize:25,
        fontWeight:'bold',
        width:100,
        marginBottom:30
    },
    input:{
        height: 40,
        width: 350,
        paddingHorizontal: 10,
        fontSize:20
    },
    line:{
        borderColor:'#EA5A2D',
        borderWidth:2,
        marginBottom:50
    },
    date:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:30
    },
    gender:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    genderimage:{
        width:70,
        height:70,
        marginHorizontal:10,
        marginBottom:50
    },
    button:{
        width : 200,
        height : 45,
        backgroundColor : '#EA5A2D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText:{
        fontSize : 20,
        fontWeight: 'bold',
        color : 'white'
    }
});


function PetCreatePage01(){
    return(
        <View style={styles.container}>
            <View style = {styles.header}>
                <Image
                    style = {styles.icon}
                    source = {OrangeIconImage}
                />
                <Text style={styles.headertext}>프로필 등록</Text>
            </View>
            <View>
                <Text style = {styles.title}>이름</Text>
                <TextInput
                    style={styles.input}
                    placeholder='이름을 입력해주세요.'
                />
                <View style={styles.line}></View>
            </View>
            <View>
                <Text style = {styles.title}>생년월일</Text>
                <Text style={styles.date}>YYYY:MM:DD</Text>
            </View>
            <View>
                <Text style = {styles.title}>성별</Text>
                <View style={styles.gender}>
                    <Image
                        style = {styles.genderimage}
                        source={man}
                    />
                    <Image
                        style = {styles.genderimage}
                        source={female}
                    />
                </View>    
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>등록</Text>
            </TouchableOpacity> 
        </View>
    );
}

export default PetCreatePage01;