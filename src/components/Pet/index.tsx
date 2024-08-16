import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Color from "../../Constants/Color";

import { petListTestData } from "../../data/petListData";

import defaultProfilePicture from '../../../assets/images/default-profile.png'
import bpmIcon from '../../../assets/images/heartbeat-icon.png'
import temperatureIcon from '../../../assets/images/temperature-icon.png'
import batteryState00 from '../../../assets/images/batteryState00.png'
import maleIcon from '../../../assets/images/man.png'
import femaleIcon from '../../../assets/images/female.png'

const styles = StyleSheet.create({

    batterySection : {
        width : '100%',
        height : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    batteryIcon : {
        width : 70,
        height : 35,
        resizeMode : 'contain'
    },
    batterySectionText : {
        color : 'black', 
        fontSize : 22, 
        fontWeight : 'bold', 
        marginTop : 0,
        marginLeft : 10
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
        right : 15,
        top : 10,
        backgroundColor : Color.DEEP_ORANGE,
        borderRadius : 20
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
    profileDataText :{
        textAlign : 'center',
        height : '100%',
        color : 'black',
        fontSize : 20,
        fontWeight : 'bold',
        lineHeight : 30
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
    bpmIcon : {
        width : 30,
        height : 30,
        resizeMode : 'contain',
        tintColor : 'black',
    },
    bpmDataText : {
        color :'black',
        fontSize : 24,
        fontWeight : 'bold',
        marginLeft: 10,
        marginRight: 40,

    },
    temperatureIcon : {
        width : 30,
        height : 30,
        resizeMode : 'contain',
    },
    temperatureDataText : {
        color : Color.DEEP_ORANGE,
        fontSize : 24,
        fontWeight : 'bold',
        marginLeft : 5,

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
            <Text style = { styles.batterySectionText }>
                오늘의 {prop.petName}
            </Text>
            <Image
                source={{uri : `http://192.168.217.1:5500/img/${prop.batteryStatus}`}}
                style = {styles.batteryIcon}
            />
        </View>
    )
}


export function PetProfile(prop : PetProfileDataProp) // 프사 - 이름/종 - 생년월일 - 품종 
{
    const genderIcon = prop.gender === 0 ? maleIcon : femaleIcon

    return(
            <View style = {styles.profileSection}>
                <TouchableOpacity style = {styles.editIcon}>
                    <Text style = {{color : 'white' , fontSize : 10, fontWeight : 'bold'}}>편집</Text>
                </TouchableOpacity>
                <View style = {styles.profileData}>
                    <Image
                        source={prop.profilePictureUrl ? {uri : `http://192.168.217.1:5500/img/${prop.profilePictureUrl}`} : defaultProfilePicture}
                        style = {{width : 120,
                            height : 120,
                            borderRadius : 100
                        }}
                    />
                <View style = {{ alignItems : 'center' }}>
                    <View style = {{ flexDirection: 'row', alignItems : 'center', marginTop : 10 }}>
                        <Text style = {styles.profileDataText}>
                                {prop.petName} 
                        </Text>
                        <Image 
                            source={genderIcon}
                            style = {{width : 15, height : 15, marginLeft : 5, marginBottom : 5
                            }} 
                        />
                        </View>
                        <Text style = {styles.profileDataText}>
                                {prop.birthdate}
                                {"\n"}
                                {prop.breed}
                        </Text>
                        </View>
                    </View>
                </View>


        

    )
}

export function PetVital(prop : VitalDataProp) //심박 / 체온데이터
{
    return(
        <View style = {styles.vitalDataSection}>
        <Image
            style = {styles.bpmIcon}
            source={bpmIcon}
        />
        <Text style = {styles.bpmDataText}>{prop.bpm} bpm</Text>
        <Image
            style = {styles.temperatureIcon}
            source={temperatureIcon}
        />
        <Text style = {styles.temperatureDataText}>{prop.temperature}°C</Text>
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