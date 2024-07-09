import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

function PetCalenderPage(){
    return (
        <View style={styles.MainView}>
            <View style={styles.CalenderView}>
                <Text>일단 비워둘래요</Text>
            </View>
            <View style={styles.BottomView}>
                <View style={styles.AlertBox}>
                    <Text style={styles.DefaultText}>예방접종</Text>
                </View>
                <View style={styles.AlertBox}>
                    <Text style={styles.DefaultText}>영양제</Text>
                </View>
            </View>
        </View>
    )
}

const DefaultColor1 = '#f5e9b5';
const DefaultColor2 = '#ffcaa8';

const styles=StyleSheet.create({
    MainView:{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        padding: 10,
    },
    CalenderView:{
        width: "100%",
        height: 300,
        backgroundColor: DefaultColor1,
    },
    BottomView:{
        width: '100%',
        height: 40,
        marginTop: 20,
    },
    AlertBox:{
        backgroundColor: DefaultColor2,
        height: 60,
        marginBottom: 5,
        borderRadius: 5,
        justifyContent: 'center',
        padding: 10,
    },
    DefaultText:{
        fontSize: 17,
    }
})

export default PetCalenderPage;