import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Button } from 'react-native';

import batteryState00 from '../../assets/images/batteryState00.png';
import movementstateRun from '../../assets/images/movementstate-run.png';
import heartbeatIcon from '../../assets/images/heartbeat-icon.png';
import temperatureIcon from '../../assets/images/temperature-icon.png';
import alertIcon from '../../assets/images/alert-icon.png';
import logoIconWhite from '../../assets/images/petiLogoW.png';
import menuIcon from '../../assets/images/menuIcon.png';


const styles = StyleSheet.create({

    container :{
        height : '100%',
        width : '100%'
    },

    sectionList: {
        margin: 20,
        height: '90%',
        flexDirection : 'column',
        backgroundColor : '#d2ea2d'
    },

    nameBatteryContainer:{
        height : '5%',
        width : '100%',
        flexDirection : 'row',
        backgroundColor : 'white'
    },

    petName :{
        width : '80%'
    },

    batteryState :{
        width : '20%',
        backgroundColor : 'black',
    },
    batteryImage :{
        width : '100%',
        height : '100%',
        resizeMode: 'contain',
    },

    petMoveState :{
        width : '100%',
        height : '10%',
        backgroundColor : '#2de8ea'
    },
    petMovemetImage : {
        width : '15%',
        height : '100%',
        resizeMode : 'contain'
    },

    petInformContainer : {
        width : '100%',
        height : '30%',
        alignItems : 'flex-end',
        backgroundColor : '#ea5a2d'
    },

    editProfileBtnContainer : {
        width : '20%',
        height : '20%',
        backgroundColor : 'black'
    },
    editProfileBtn :{
        color : 'white',
        textAlign : 'center'
    },

    petInformTextContaioner :{
        width : '100%',
        height : '60%',
        alignItems : 'center',
        backgroundColor : 'white'
    },

    vitalDataSection : {
        width : '100%',
        height : '10%',
        backgroundColor : '#2de8ea'
    },
    vitalDataContainer : {
        width : '100%',
        flexDirection : 'row',
        justifyContent: 'center'
    },
    vitalDataIcon : {
        width : '10%',
        height : '100%',
        resizeMode : 'contain'
    },
    graphSection :{
        width : '100%',
        height : '30%',
        backgroundColor : '#ea5a2d'
    },

    footerContainer : {
        width : '100%',
        height : '10%',
        backgroundColor : '#ea5a2d',
        flexDirection : 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'space-between'
    },
    footerIcon : {
        width : '20%',
        height : '100%'
    },
    footerIconImage : {
        width : '100%',
        height : '100%',
        resizeMode : 'contain'
    }

    

});

function Pet() {
    return(
    <View style = {styles.container}>    
        
        <View style = {styles.sectionList}>

            <View style = {styles.nameBatteryContainer}>
                <Text style = { styles.petName}>오늘의 히로</Text>
                <TouchableOpacity style = {styles.batteryState}>
                    <Image 
                        source={batteryState00}
                        style = {styles.batteryImage}
                    />
                </TouchableOpacity>
            </View>

            
            <View style = {styles.petMoveState}>
                <Image
                    style = {styles.petMovemetImage}
                    source={movementstateRun}
                />
            </View>


            <View style = {styles.petInformContainer}>
                <View style = {styles.editProfileBtnContainer}>
                <Text style = {styles.editProfileBtn}>편집</Text>
                </View>

                <View style = {styles.petInformTextContaioner}>
                    <Text>히로</Text>
                    <Text>2018.07.06</Text>
                    <Text>말티즈</Text>
                </View>
            </View>

            <View style = {styles.vitalDataSection}>
                <View style = {styles.vitalDataContainer}>
                    <Image
                        style = {styles.vitalDataIcon}
                        source={heartbeatIcon}
                    />
                    <Text>180 bpm</Text>

                    
                    <Image
                        style = {styles.vitalDataIcon}
                        source={temperatureIcon}
                    />
                    <Text>37C</Text>
                </View>

            </View>

            <View style ={styles.graphSection}>
                <Text>그래프 구역</Text>
            </View>

        </View>

    <View  style = {styles.footerContainer}>
        <TouchableOpacity style = {styles.footerIcon}>
            <Image
            source={alertIcon}
            style = {styles.footerIconImage}
            />
        </TouchableOpacity>

        <TouchableOpacity style = {styles.footerIcon}>
            <Image
            source={logoIconWhite}
            style = {styles.footerIconImage}
            />
        </TouchableOpacity>

        <TouchableOpacity style = {styles.footerIcon}>
            <Image
            source={menuIcon}
            style = {styles.footerIconImage}
            />
        </TouchableOpacity>
    
    </View>    

        

    </View>  

    );
}

export default Pet;