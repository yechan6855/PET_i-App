import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
export {}
import ProfileImage from '../../../assets/images/test-dogprofileimg.png'
import color from '../../constants/color'

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
        backgroundColor: color.BASIG,
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
export function PetList() {
    return (
        <ScrollView style={style.scroll}>
            <View style={style.list}>
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
        <View style={style.item}>
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
                <Text style={style.informationText}>살구</Text>
                <Text style={style.informationText}>20214.09.03</Text>
            </View>
        </View>
    )    
}

