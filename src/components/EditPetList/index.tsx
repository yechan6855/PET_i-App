import { View, Text, StyleSheet, ScrollView, Image, Touchable, TouchableOpacity, Pressable } from 'react-native'
export {}
import ProfileImage from '../../../assets/images/test-dogprofileimg.png'
import deleteIcon from '../../../assets/images/x-icon.png'
import { Pet } from '../../types/pet'
import { getDateString } from '../../Utils'

import Color from '../../constants/Color'

import defaultProfilePicture from '../../../assets/images/default-profile.png'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../pages'

//import PetListData from '../..petListData.ts' 이하 라인처럼 가져와야함
//import { petListTestData } from '../../data/petListData'

const styles = StyleSheet.create({    
    scroll : {        
        //backgroundColor : 'red',
    },
    list : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        flexWrap : "wrap",
    },
    item: {
        backgroundColor: "white",
        width : '48%',
        height : 200,
        marginBottom : 20,
        justifyContent : 'space-evenly',
        alignItems : 'center',
        borderRadius : 12,
        position : 'relative'
    },
    information : {
        alignItems : "center"        
    },
    informationText : {
        fontSize : 16,
        fontWeight : "900"
    },
    deleteBtn : {
        position : 'absolute',
        top: 0,   
        right: 0, 
        margin: 10, 
        width: 20,
        height: 20,

    },
})

interface PetListProp {
    item: Pet[]
    onDelete: (petId: number) => void
    deletedPets: number[]
}

export function PetList({ item, onDelete, deletedPets } : PetListProp) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.list}>
            {
                item.filter(pet => !deletedPets.includes(pet.petId)).map((pet) => (
                <Item
                    key={pet.petId}
                    petId={pet.petId}
                    petName={pet.name}
                    petBirth={pet.birth}
                    profileImageUrl={pet.profilePictureURL}
                    onDelete={onDelete}
                />
            ))}
                <TouchableOpacity 
                    style={[styles.item, {backgroundColor : "gray"}]}
                    onPress={() => {navigation.navigate("CreatePet")}}
                >
                    <Image style={{
                        width : 30,
                        height : 30
                    }} source={deleteIcon}/>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

function Item({petId, petName, petBirth, profileImageUrl, onDelete} : PetListItemProp) {
    return (
        <View style={styles.item}>

            <TouchableOpacity onPress={() => onDelete(petId)}>
                <Image
                    style = {styles.deleteBtn}
                    source={deleteIcon}
                />
            </TouchableOpacity>

            <View>
                <Image
                    style={{
                        width : 100,
                        height : 100,
                        borderRadius : 50
                    }}
                    source={profileImageUrl ? {uri : profileImageUrl} : defaultProfilePicture}

                />
            </View>
            <View style={styles.information}>
                <Text style={styles.informationText}>{petName}</Text>
                <Text style={styles.informationText}>{getDateString(new Date(petBirth))}</Text>
            </View>
        </View>
    )    
}

interface PetListItemProp {

    petId : number;  
    petName : string;
    petBirth : string;
    profileImageUrl : string | null; //null시 넣어둔 기본이미지 
    onDelete: (petId: number) => void

}

