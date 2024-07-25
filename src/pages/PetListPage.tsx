import { Text, View, StyleSheet, Image } from "react-native"
import { PetList } from "../components/PetList"

import editIconImage from '../../assets/images/edit-icon.png'
import style from "../Constants/Style"
import usePet from "../hooks/usePet"
const styles = StyleSheet.create({
    container : {
        //backgroundColor : "red",
        flex : 1,
        margin : style.MARGIN,
        marginBottom : style.MARGIN + 20,
        marginTop : style.MARGIN + 20,
    },
    top : {
        // backgroundColor : "blue",
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : 8
    },
    topGuideText :  {
        fontSize : 17,
        fontWeight : '600'
    },
    section : {
        // backgroundColor : "green",
        flex : 1,
        marginTop : 20
    },
})
export default function PetListPage() {
    const [list] = usePet()    
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View>
                    <Text style={styles.topGuideText}>정예림 님의 아이들</Text>
                </View>
                <View>
                    <Image
                        source={editIconImage}
                        style={{
                            width : 30,
                            height : 30
                        }}
                    />
                </View>
            </View>
            <View style={styles.section}>
                <PetList item={list}/>
            </View>
        </View>
    )
}