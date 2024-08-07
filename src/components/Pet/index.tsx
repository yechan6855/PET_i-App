import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Color from "../../Constants/Color";

import { petListTestData } from "../../data/petListData";

import defaultProfilePicture from '../../../assets/images/default-profile.png'
import bpmIcon from '../../../assets/images/heartbeat-icon.png'
import temperatureIcon from '../../../assets/images/temperature-icon.png'

const styles = StyleSheet.create({

    batterySection : {
        width : '100%',
        height : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    batteryIcon : {
        width : 50,
        height : 25,
        resizeMode : 'contain'
    },

    statusSection :{
        width : '100%',
        height : '30%',
        backgroundColor : 'yellow',
    },

    profileSection : { 
        width: '100%',
        height : '70%',
        backgroundColor : Color.BASIG,
        alignItems : 'center',
        borderRadius : 10,
        position: 'absolute',
        bottom: 0
    },
    editIcon :{
        width : 40,
        height : 25,
        position : 'absolute',
        justifyContent : 'center',
        alignItems : 'center',
        right : 10,
        top : 10,
        backgroundColor : Color.DEEP_ORANGE,
        borderRadius : 10
    },
    profileData :{
        width : '30%',
        height : '130%',
        justifyContent : 'space-between',
        alignItems : 'center',
        position: 'absolute',
        bottom: 0,
        //backgroundColor : 'green'
    },

    vitalDataSection :{
        width : '100%',
        height : '100%',
        backgroundColor : Color.BASIG,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 10,
        flexDirection : 'row'
        
    },
    vitalDataIcon : {
        width : 30,
        height : 30,
        resizeMode : 'contain'
    },
    graphSection : {
        width : '100%',
        height : '100%',
        backgroundColor : Color.BASIG,
        borderRadius : 10
    }
})

export function DeviceStatus(prop : deviceStatusProp)
{
    return(
        <View style = { styles.batterySection}>
            <Text>오늘의 {prop.petName}</Text>
            <Image
                source={{uri : prop.batteryStatus}}
                style = {styles.batteryIcon}
            />
        </View>
    )
}


export function PetProfile(prop : PetProfileDataProp) // 프사 - 이름/종 - 생년월일 - 품종 
{
    return(
            <View style = {styles.profileSection}>
                <TouchableOpacity style = {styles.editIcon}>
                    <Text style = {{color : 'white' , fontSize : 10}}>편집</Text>
                </TouchableOpacity>
                <View style = {styles.profileData}>
                    <Image
                        source={prop.profilePictureUrl ? {uri : prop.profilePictureUrl} : defaultProfilePicture}
                        style = {{width : 110,
                            height : 110,
                            borderRadius : 100
                        }}
                    />

                    <Text style = 
                    {{
                        textAlign : 'center',
                        height : '30%'
                    }}>
                        
                            {prop.petName} {prop.gender}
                            {"\n"}
                            {prop.birthdate}
                            {"\n"}
                            {prop.breed}
                        
                    </Text>
                </View>

            </View>

        

    )
}

export function PetVital(prop : VitalDataProp) //심박 / 체온데이터
{
    return(
        <View style = {styles.vitalDataSection}>
        <Image
            style = {styles.vitalDataIcon}
            source={bpmIcon}
        />
        <Text>{prop.bpm}</Text>
        <Image
            style = {styles.vitalDataIcon}
            source={temperatureIcon}
        />
        <Text>{prop.temperature}</Text>
    </View>
    )
}

export function VitalGraph(prop : VitalDataProp)
{
    return(
        <View style = {styles.graphSection}>

        </View>
    )
}

interface deviceStatusProp {
    batteryStatus : string;
    petId : string,
    petName : string
}

interface PetProfileDataProp {
    petName : string,
    gender : number,
    birthdate : string,
    profilePictureUrl? : string,
    breed : string


}

interface VitalDataProp{
    bpm : number;
    temperature : number;
}