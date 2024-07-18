import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import textLogoWhite from '../../assets/images/peti-text-icon-w.png';



const styles = StyleSheet.create({
    Container: {
        height : '100%',
        margin:40,
        flexDirection: 'column',
        backgroundColor : '#d2ea2d'
    },
    TopTextLogo:{
        height: 50,
        width: '100%',
        resizeMode: 'contain',
        backgroundColor : '#2de8ea'
    },
    TextInputContainer: {
        flex: 0.3,
        backgroundColor: '#2de8ea',
        marginTop: '20%',
        flexDirection: 'column',
    },
    TextInputItem: {
        width:'100%',
        height:'30%',
        backgroundColor: 'black',
        flexDirection: 'row',
    },
    TextInputLabel:{
        fontSize:20,
        fontWeight:'bold',
        marginEnd:'80%',
        backgroundColor:'white',
        paddingTop:'3%',
        paddingEnd:'3%'
    }


});

function LoginPageEdit() {
    return (
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

                </View>
                <View style ={styles.TextInputItem}>
                    <Text style ={styles.TextInputLabel}>PW</Text>

                </View>
                
            </View>
            




        </View>

    );
}

export default LoginPageEdit;