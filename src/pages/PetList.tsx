import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import usePet from '../hooks/usePet';
import { PetGender } from '../types/pet';

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

interface PetItemProp
{
    name : string;
    birthdate : string;
    gender : PetGender
}
function Card({name, birthdate, gender} : PetItemProp){
    return (
        <View style={styles.list}>
            <Image
                style={styles.image}
                source={{ uri: 'https://via.placeholder.com/50' }}
            />
            <View style={styles.info}>
                <Text style={styles.petName}>{name}</Text>
                <Text style={styles.petDetails}>나이: {birthdate}</Text>
                <Text style={styles.petDetails}>성별: 남</Text>
            </View>
        </View>
    )
}


function PetList() {
    const [list] = usePet({userId : "ptk57581"})
    return(
        <View style={styles.container}>
            <ScrollView>
                {
                    list.map(({petId, gender, birthdate, name}, index) => {
                        return (
                            <Card
                                key={petId}
                                gender={gender}
                                birthdate={birthdate}
                                name={name}
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}

export default PetList;