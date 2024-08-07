import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import testProfileImage from '../../../assets/images/test-dogprofileimg.png';
import Color from "../../constants/Color";
import { useEffect, useMemo, useState } from "react";
import { Asset, launchImageLibrary } from "react-native-image-picker";
import maleIcon from '../../../assets/images/man.png'
import femaleIcon from '../../../assets/images/female.png'
import { breedList } from "../../data/petBreedData";

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
                    <Image style={profile.genderIconImage} source={maleIcon}/>
                </TouchableOpacity>
                <TouchableOpacity style={profile.genderIcon} onPress={()=>{setGender(1)}}>
                    <Image style={profile.genderIconImage} source={femaleIcon}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}



const img = StyleSheet.create({
    profileImgContainer : {
        width : '45%',
             
        alignItems : "center",
        // backgroundColor : "red",
        justifyContent : "center"
    },
    profileImageSection :{
        width : "100%",
        height : "60%",        
    },
    profileImgUploadBtn : {        
        backgroundColor : Color.ORANGE,
        alignSelf : "stretch",
        marginTop : 8,
        justifyContent : "center",
        alignItems : "center",
        padding : 8,
        borderRadius : 8           
    },
})
export interface ImageFileProp
{
    fileName : string;
    uri : string;
    type : string;
}
export function PetImage({onFileChange} : {onFileChange : (file : ImageFileProp) => void}) {
    const [image, setImage] = useState<Asset | undefined>()
    useEffect(()=>{
        if (!image) return
        const { fileName, uri, type } = image
        if (!fileName) {
            console.error("File Name Error")
            return 
        }
        if (!uri) {
            console.error("File uri Error")
            return 
        }
        if (!type) {
            console.error("File type Error")
            return 
        }
        onFileChange({
            fileName,
            uri,
            type
        })
    }, [image])
    return (
        <View style = {img.profileImgContainer}>
            <View style = {img.profileImageSection}>
                <Image
                    style={{
                        width : "100%",
                        height : "100%",
                        borderRadius : 20
                    }}
                    source={image ? {uri : image.uri} : testProfileImage}
                />
            </View>
            <TouchableOpacity
                style={img.profileImgUploadBtn}
                onPress={async () => {
                    const result = await launchImageLibrary({mediaType : "photo"})
                    const { assets } = result
                    if (assets && assets.length > 0) {
                        setImage(assets[0])
                    }
                }}
            >
                <Text style={{
                    fontWeight : '600',
                    color : "#ffffff"
                }}>프로필 업로드</Text>
            </TouchableOpacity>
        </View>
    )        
}