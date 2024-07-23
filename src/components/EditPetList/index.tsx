import { View, Text, StyleSheet, ScrollView, Image, Touchable, TouchableOpacity } from 'react-native'
export {}
import ProfileImage from '../../../assets/images/test-dogprofileimg.png'
import deleteIcon from '../../../assets/images/x-icon.png'

import Color from '../../Constants/Color'

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

    }
})

export function PetList() {
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.list}>
                <Item
                    petId='0'
                    petName='똘복'
                    petBirth='2022.08.06'
                    profileImageUrl='https://cdn.pixabay.com/photo/2019/08/26/06/26/the-black-dog-4430887_1280.jpg'
                />
                <Item
                    petId='1'
                    petName='두걸'
                    petBirth='2016.05.05'
                    profileImageUrl='https://cdn.pixabay.com/photo/2021/12/30/01/48/dog-6903071_1280.jpg'
                    />
                <Item
                    petId='2'
                    petName='험식이'
                    petBirth='2020.09.08'
                    profileImageUrl='https://cdn.pixabay.com/photo/2019/10/28/04/21/puppy-4583450_1280.jpg'
                    />
                <Item
                    petId='3'
                    petName='껄자'
                    petBirth='2021.10.23'
                    profileImageUrl='https://cdn.pixabay.com/photo/2019/10/29/08/01/dog-4586319_1280.jpg'
                />

                <Item
                    petId='3'
                    petName='광추'
                    petBirth='2011.05.05'
                    profileImageUrl='https://cdn.pixabay.com/photo/2017/08/18/16/13/dog-2655466_1280.jpg'
                />

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
                    source={{uri: prop.profileImageUrl}}
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

    petId : string; // int로 받아도 될듯한데 왜 int 비슷한게 없는지 의문 
    petName : string;
    petBirth : string;
    profileImageUrl : string;
    
}

