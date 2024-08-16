import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Button, AccessibilityInfo } from 'react-native';

import batteryState00 from '../../assets/images/batteryState00.png';
import movementstateRun from '../../assets/images/movementstate-run.png';
import heartbeatIcon from '../../assets/images/heartbeat-icon.png';
import temperatureIcon from '../../assets/images/temperature-icon.png';
import alertIcon from '../../assets/images/alert-icon.png';
import logoIconWhite from '../../assets/images/petiLogoW.png';
import menuIcon from '../../assets/images/menuIcon.png';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getDateString } from '../Utils';
import { DeviceStatus,PetProfile, PetVital, VitalGraph } from '../components/Pet';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '.';
import { petTestData } from '../data/petData';
import Color from '../Constants/Color';
//import { petVital } from '../components/Pet';


const styles = StyleSheet.create({
    background : {
        width : '100%',
        height : '100%',
        backgroundColor : 'white'
    },
    container :{
        height : '100%',
        width : '100%',
        alignItems : 'center',
        justifyContent : 'center',
    },
    innerContainer: {
        height: '90%',
        width : '90%',
        flexDirection : 'column',
        //backgroundColor : 'blue',
        justifyContent : 'space-between'
    },
    bottom :{
        height : '10%',
        width : '100%',
        backgroundColor : Color.DEEP_ORANGE,
        justifyContent : 'space-between',
        alignItems : 'center',
        flexDirection : 'row',
    },
    bottomIcon :{
        resizeMode : 'contain',
        height : 50,
        width : 60,
        marginHorizontal : 25
    },
    nameSection :{
        width :'100%',
        height : '5%',
    },
    statusSection : {
        width : '100%',
        height : '30%',
       // backgroundColor : 'yellow',
        position: 'absolute',
        top: 0,
    },
    statusIcon : {
        width : 60,
        height : 30,
        position : 'absolute',
        bottom : 0,
        //backgroundColor : 'green'
    },
    profileSection :{
        width : '100%',
        height : '33%',
        justifyContent : 'center',
        alignItems : 'center',
        //backgroundColor : 'black'
    },
    vitalDataSection : {
        width : '100%',
        height : '15%',
    },
    graphSection :{
        width : '100%',
        height : '40%'
    }


});

function PetPage() {
    const route = useRoute<RouteProp<RootStackParamList, 'PetPage'>>()
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const { pet } = route.params

    const vitalData = {
        bpm: 180,
        temperature: 39
    };

    return(
    <View style={styles.background}>
    <View style = {styles.container}>    
        
        <View style = {styles.innerContainer}>
            <View style = {styles.nameSection}>
                <DeviceStatus
                    petName={pet.name}
                    batteryStatus={'batteryState02.png'}
                    petId={pet.petId.toString()}
                />
            </View>

            <View style = {styles.profileSection}>
                <View style = {styles.statusSection}>
                    <Image
                        style = {styles.statusIcon}
                        source={movementstateRun}
                    />
                </View>
                <PetProfile
                    profilePictureUrl={pet.profilePictureURL}
                    petName={pet.name}
                    gender={pet.gender}
                    breed={pet.breed}
                    birthdate={getDateString(new Date(pet.birth))}
                />

            </View>

            <View style = {styles.vitalDataSection}>
                <PetVital
                    bpm={vitalData.bpm}
                    temperature={vitalData.temperature}
                />
            </View>
            
            <View style = {styles.graphSection}>
                <VitalGraph
                    bpm={180}
                    temperature={39}
                />
            </View>

        </View>

        <View style = {styles.bottom}>
            <TouchableOpacity>
                <Image
                    source={alertIcon}
                    style = {styles.bottomIcon}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={logoIconWhite}
                    style = {styles.bottomIcon}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('UserMenu')}}>
                <Image
                    source={menuIcon}
                    style ={styles.bottomIcon}
                />
            </TouchableOpacity>

        </View>
    </View>
    </View>

    );
}

export default PetPage;