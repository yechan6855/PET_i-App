import { View, Text, StyleSheet, ScrollView, Image, Touchable, TouchableOpacity } from 'react-native'
export {}
import ProfileImage from '../../../assets/images/test-dogprofileimg.png'
import deleteIcon from '../../../assets/images/x-icon.png'

import Color from '../../constants/Color'

import defaultProfilePicture from '../../../assets/images/default-profile.png'

//import PetListData from '../..petListData.ts' 이하 라인처럼 가져와야함
import { petListTestData } from '../../data/petListData'

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



export function PetList() {
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.list}>
            {
                petListTestData.map((item, petId)=>{
                    return(
                        <Item key={petId}
                            petId={item.petId}
                            petName={item.name}
                            petBirth={item.birthdate}
                            profileImageUrl={item.profilePictureURL}
                        />
                    )
                })
            }

            </View>
        </ScrollView>
    )
}

function Item(prop : PetListItemProp) {
    return (
        <View style={styles.item}>
   
                <Image
                    style = {styles.deleteBtn}
                    source={deleteIcon}
                />

            <View>
                <Image
                    style={{
                        width : 100,
                        height : 100,
                        borderRadius : 50
                    }}
                    source={prop.profileImageUrl ? {uri : prop.profileImageUrl} : defaultProfilePicture}

                />
            </View>
            <View style={styles.information}>
                <Text style={styles.informationText}>{prop.petName}</Text>
                <Text style={styles.informationText}>{prop.petBirth}</Text>
            </View>
        </View>
    )    
}

interface PetListItemProp {

    petId : string;  
    petName : string;
    petBirth : string;
    profileImageUrl : string; //null 시 넣어둔 기본이미지 
    
}

