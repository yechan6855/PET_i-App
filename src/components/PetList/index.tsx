import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
export {}
import ProfileImage from '../../../assets/images/test-dogprofileimg.png'
import Color from '../../Constants/Color'
import { Pet } from '../../types/pet'
import { getDateString } from '../../Utils'

const style = StyleSheet.create({    
    scroll : {        
        // backgroundColor : 'red',
    },
    list : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        flexWrap : "wrap",
    },
    item: {
        backgroundColor: Color.BASIG,
        width : '48%',
        height : 200,
        marginBottom : 20,
        justifyContent : 'space-evenly',
        alignItems : 'center',
        borderRadius : 12
    },
    information : {
        alignItems : "center"        
    },
    informationText : {
        fontSize : 16,
        fontWeight : "900"
    }
})
interface PetListProp {
    item : Pet[]
    onItemPress: (pet: Pet) => void
}
export function PetList({item, onItemPress} : PetListProp) {
    return (
        <ScrollView style={style.scroll}>
            <View style={style.list}>
                {
                    item.map((pet) => {
                        return <Item key={pet.petId} pet={pet} onPress={() => onItemPress(pet)}/>
                    })
                }
            </View>
        </ScrollView>
    )
}

function Item({pet, onPress} : ItemProps) {
    return (
        <TouchableOpacity style={style.item} onPress={onPress}>
            <View>
                <Image
                    style={{
                        width : 100,
                        height : 100,
                        borderRadius : 50
                    }}
                    source={ProfileImage}
                />
            </View>
            <View style={style.information}>
                <Text style={style.informationText}>{pet.name}</Text>
                <Text style={style.informationText}>{getDateString(new Date(pet.birth))}</Text>
            </View>
        </TouchableOpacity>
    )    
}

interface ItemProps {
    pet: Pet
    onPress: () => void
}