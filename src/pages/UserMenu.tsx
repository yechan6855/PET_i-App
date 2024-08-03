import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backButtonImage from '../../assets/images/backbtn.png';
import userInformImage from '../../assets/images/userinfo-btn.png';
import peteyeImage from '../../assets/images/peteye-btn.png';
import scheduleImage from '../../assets/images/calendar-icon.png';
import piechartImage from '../../assets/images/piechart-icon.png';
import settingImage from '../../assets/images/settings-icon.png'
import { useUserContext } from '../hooks/useUserContext';

const styles = StyleSheet.create({
    container: {
        margin: 20,
        height: '100%',
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        margin:10
        //backgroundColor: '#ffffff',
    },
    sectionText: {
        fontSize: 18,
        marginStart: 10,
        marginTop: 20,
        //backgroundColor: '#d2ea2d',
        fontWeight : 'black'
    },
    backBtnSize: {
        width: 30,
        height: 40,
    },
    backBtn: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        //backgroundColor: '#d2ea2d',
    },
    imageBtnContainer: {
        width: '100%',
        //backgroundColor: '#2de8ea',
    },
    imageBtn: {
        width: 'auto',
        resizeMode: 'contain',
        height: 120,
    },
    allServiceContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems : 'center'
    },
    userSchedule: {
        flex: 1,
        width : '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10, // Add some margin to separate items
        padding: 10, // Add some padding for better layout,,
    },
    scheduleImageSize: {
        width: 40,
        height: 40,
    },
    serviceName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft : 16
    },
});


function UserMenuList() {
    const { user } = useUserContext()
    console.log(user)
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.userName}>정예림</Text>
            
            <View style={styles.imageBtnContainer}>
                <TouchableOpacity>
                    <Image
                        style={styles.imageBtn}
                        source={userInformImage}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        style={styles.imageBtn}
                        source={peteyeImage}
                    />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.sectionText}>서비스 전체</Text>
            </View>

            <View style={styles.allServiceContainer}>
                <View style={styles.userSchedule}>
                    <Image
                        style={styles.scheduleImageSize}
                        source={scheduleImage}
                    />
                    <Text style={styles.serviceName}>일정</Text>
                </View>
                <View style={styles.userSchedule}>
                    <Image
                        style={styles.scheduleImageSize}
                        source={piechartImage}
                    />
                    <Text style={styles.serviceName}>활동보고서</Text>
                </View>
                <View style={styles.userSchedule}>
                    <Image
                        style={styles.scheduleImageSize}
                        source={settingImage}
                    />
                    <Text style={styles.serviceName}>환경설정</Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default UserMenuList;
