import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import OrangeIconImage from "../../assets/images/peti_icon_orange.png"
import OrangeLogoImage from "../../assets/images/peti_logo_orange.png"

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'white'
    },
    icon: {
        width: 70,
        height: 60,
        marginBottom: 10
    },
    logoImage:{
        width: 200,
        height: 70,
        marginBottom: 55
    },
    input:{
        height: 45,
        width: 280,
        backgroundColor : '#f5e9b5', 
        borderColor: '#EA5A2D',
        borderWidth: 3,
        borderRadius: 5,
        textAlign: 'center',
        marginBottom: 30
    },
    button:{
        width : 200,
        height : 45,
        backgroundColor : '#EA5A2D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 50
    },
    buttonText:{
        fontSize : 20,
        fontWeight: 'bold',
        color : 'white'
    }
});

function PetCreatePage00(){
    return(
        <View style = {styles.container}>
            <Image
                style={styles.icon}
                source = {OrangeIconImage}
            />
            <Image
                style ={styles.logoImage}
                source = {OrangeLogoImage}
            />
            <TextInput
                style={styles.input}
                placeholder='기기의 ID를 입력해주세요.'
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>등록</Text>
            </TouchableOpacity>
                
        </View>
    );
}


export default PetCreatePage00;