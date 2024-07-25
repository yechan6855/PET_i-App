import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import testProfileImage from '../../../assets/images/test-dogprofileimg.png';
import Color from "../../Constants/Color";
import { useEffect, useMemo, useState } from "react";
const style = StyleSheet.create({
    birth : {
        flexDirection : "row",
        justifyContent : "center"
    },
    birthChild : {
        borderColor : "black",
    },
    birthChildInput : {
        padding : 0,
        fontSize : 36,
        fontWeight : '900',
        textAlign : "left",
        paddingHorizontal : 14
    },    
})


export function BirthDay({onChangeDate} : {onChangeDate : (date : string | undefined) => void}) {
    const [year, setYear] = useState<string|undefined>()
    const [month, setMonth] = useState<string|undefined>()
    const [day, setDay] = useState<string|undefined>()
    useEffect(()=>{
        if (!year || !month || !day) {
            onChangeDate(undefined)
        } else {
            onChangeDate(`${year}-${month}-${day}`)
        }
        
    }, [year, month, day])
    return (
        <View style={style.birth}>
            <View style={style.birthChild}>
                <TextInput 
                    style={style.birthChildInput} 
                    placeholder='YYYY' 
                    maxLength={4}
                    keyboardType='numeric'
                    onChangeText={setYear}
                />
            </View>
            <View style={style.birthChild}>
                <Text style={style.birthChildInput}>:</Text>
            </View>
            <View style={style.birthChild}>
                <TextInput 
                    style={style.birthChildInput}
                    placeholder='MM'
                    maxLength={2} 
                    keyboardType='numeric'
                    onChangeText={setMonth}
                />
            </View>
            <View style={style.birthChild}>
                <Text style={style.birthChildInput}>:</Text>
            </View>
            <View style={style.birthChild}>
                <TextInput 
                    style={style.birthChildInput} 
                    placeholder='DD' 
                    maxLength={2} 
                    keyboardType='numeric'
                    onChangeText={setDay}
                />
            </View>
        </View>
    )
}
const profile = StyleSheet.create({
    container : {
        width : "50%",
        padding : 10,
        alignSelf : "stretch",
        marginTop : 16
    },
    name : {
        borderBottomColor : Color.ORANGE,
        borderBottomWidth : 2,
        marginBottom : 8
    },
    input : {
        paddingVertical : 4,
        fontSize : 16,        
    },
    gender : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "flex-start",
        marginTop : 8,        
    },
    genderIcon : {
        // width : "50%",
        // height : "50%",
        // borderWidth : 1,        
    },
    genderIconImage : {
        width : 80,
        height : 80,
        borderRadius : 8
    }
})
export function PetProfileForm({onNameChange, onGenderChange} : {
    onNameChange : (name : string) => void;
    onGenderChange : (value : number) => void;
}) {
    const [gender, setGender] = useState<number | undefined>()

    useEffect(() => {
        if (gender !== undefined) {onGenderChange(gender)}
    }, [gender])
    return (
        <View style={profile.container}>
            <View style={profile.name}>
                <TextInput style={profile.input} onChangeText={onNameChange} placeholder="이름을 입력하여주세요"/>
            </View>
            <View style={profile.gender}>
                <TouchableOpacity style={profile.genderIcon} onPress={()=>{setGender(0)}}>
                    <Image style={profile.genderIconImage} source={testProfileImage}/>
                </TouchableOpacity>
                <TouchableOpacity style={profile.genderIcon} onPress={()=>{setGender(1)}}>
                    <Image style={profile.genderIconImage} source={testProfileImage}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
