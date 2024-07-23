import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import testProfileImage from '../../../assets/images/test-dogprofileimg.png';
import Color from "../../Constants/Color";
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


export function BirthDay() {
    return (
        <View style={style.birth}>
            <View style={style.birthChild}>
                <TextInput style={style.birthChildInput} placeholder='YYYY' maxLength={4} keyboardType='numeric'/>
            </View>
            <View style={style.birthChild}>
                <Text style={style.birthChildInput}>:</Text>
            </View>
            <View style={style.birthChild}>
                <TextInput style={style.birthChildInput} placeholder='MM' maxLength={2} keyboardType='numeric'/>
            </View>
            <View style={style.birthChild}>
                <Text style={style.birthChildInput}>:</Text>
            </View>
            <View style={style.birthChild}>
                <TextInput style={style.birthChildInput} placeholder='DD' maxLength={2} keyboardType='numeric'/>
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
export function PetProfileForm() {
    return (
        <View style={profile.container}>
            <View style={profile.name}>
                <TextInput style={profile.input} placeholder="이름을 입력하여주세요"/>
            </View>
            <View style={profile.gender}>
                <View style={profile.genderIcon}>
                    <Image style={profile.genderIconImage} source={testProfileImage}/>
                </View>
                <View style={profile.genderIcon}>
                    <Image style={profile.genderIconImage} source={testProfileImage}/>
                </View>
            </View>
        </View>
    )
}
