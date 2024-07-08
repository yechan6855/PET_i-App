import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
    list: {
        backgroundColor: '#f5e9b5',
        margin: 5,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
      },
    image: {
        width: 100,
        height: 100,
        borderRadius: 25,
        marginRight: 10,
      },
    info: {
        flex: 1,
      },
    petName: {
        fontSize: 25,
        fontWeight: 'bold',
        margin:5
      },
    petDetails: {
        fontSize: 15,
        margin:2
      }
});


const Card = () => {
    return (
        <View style={styles.list}>
            <Image
                style={styles.image}
                source={{ uri: 'https://via.placeholder.com/50' }}
            />
            <View style={styles.info}>
                <Text style={styles.petName}>PetName</Text>
                <Text style={styles.petDetails}>나이: 2014.09.06</Text>
                <Text style={styles.petDetails}>성별: 남</Text>
            </View>
        </View>
    )
}


function PetList() {
    return(
        <View style={styles.container}>
            <ScrollView>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </ScrollView>
        </View>
    );
}

export default PetList;