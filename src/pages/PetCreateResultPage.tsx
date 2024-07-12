import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '.';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'white'
    },
    title:{
        fontSize : 20,
        fontWeight: 'bold',
        marginBottom:50
    },
    button:{
        width : 200,
        height : 45,
        backgroundColor : '#EA5A2D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 50
    },
    buttonText:{
        fontSize : 20,
        fontWeight: 'bold',
        color : 'white'
    }
})



function PetCreateResultPage(){
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    return(
        <View style={styles.container}>
            <Text style={styles.title}>추가되었습니다.</Text>
            <TouchableOpacity 
                onPress={()=> navigation.navigate('Developer')} 
                style={styles.button}>
                <Text style={styles.buttonText}>완료</Text>
            </TouchableOpacity>
        </View>
    );
}

export default PetCreateResultPage;