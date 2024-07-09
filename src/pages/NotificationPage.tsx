import React from 'react';
import {Button, View, Text, StyleSheet, ScrollView} from 'react-native';

function NotificationPage() {
    return (
        <View style={styles.MainView}>
            <ScrollView>
                <View>
                    <ReadAlert/>
                    <ReadAlert/>
                    <ReadAlert/>
                    <ReadAlert/>
                    <ReadNotAlert/>
                    <ReadNotAlert/>
                    <ReadNotAlert/>
                    <ReadNotAlert/>
                    <ReadNotAlert/>
                    <ReadNotAlert/>
                    <ReadNotAlert/>
                    <ReadNotAlert/>
                    <ReadNotAlert/>
                    <ReadNotAlert/>
                    <ReadNotAlert/>
                </View>
            </ScrollView>
        </View>
    );
}

function ReadAlert(){
    return(
        <View style={styles.NotReadBox}>
            <View style={styles.NotReadAlert}>
            </View>
            <Text>
                아이의 심박이 주의 단계입니다.
            </Text>
        </View>
    )
}

function ReadNotAlert(){
    return (
        <View style={styles.ReadBox}>
            <View style={styles.ReadAlert}>
            </View>
            <Text>
                영양제 알림
            </Text>
        </View>
    )
}


const DefaultColor1 = '#f5e9b5';
const DefaultColor2 = '#ffcaa8';
const DefaultColor3 = '#c7b7b3';
const Orange = '#e86041';

const styles = StyleSheet.create({
    MainView: {
        width: '100%',
        height: '100%',
        padding: 5,
    },
    NotReadBox:{
        backgroundColor: DefaultColor2,
        height: 80,
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
    },
    ReadBox:{
        backgroundColor: DefaultColor3,
        height: 80,
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
    },
    NotReadAlert:{
        backgroundColor: 'yellow',
        width: 15,
        height: 15,
        borderRadius: 7.5,
        marginRight: 10,
    },
    ReadAlert:{
        backgroundColor: Orange,
        width: 15,
        height: 15,
        borderRadius: 7.5,
        marginRight: 10,
    },
});

export default NotificationPage;