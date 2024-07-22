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
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </View>
        </ScrollView>
    )
}

function Item() {
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
                    source={ProfileImage}
                />
            </View>
            <View style={styles.information}>
                <Text style={styles.informationText}>살구</Text>
                <Text style={styles.informationText}>20214.09.03</Text>
            </View>
        </View>
    )    
}

