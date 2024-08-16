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
    background : {
        width : '100%',
        height : '100%',
        backgroundColor : 'white'
    },
    container: {
        margin: 20,
        height: '100%',
    },
    userName: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 30,
        //backgroundColor: '#ffffff',
    },
    sectionText: {
        fontSize: 22,
        marginStart: 20,
        marginTop: 40,
        marginBottom: 30,
        //backgroundColor: '#d2ea2d',
        fontWeight : '900',
        color: 'black',
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
    infoBtn: {
        width: '100%',
        resizeMode: 'contain',
        height: 105,
        borderRadius: 25,
        marginBottom: 10,
    },
    peteyeBtn: {
        width: '100%',
        resizeMode: 'stretch',
        height: 120,
        borderRadius: 20,
    },
    allServiceContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems : 'center',
        marginStart: 15
    },
    serviceItem: {
        flex: 1,
        width : '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20, // Add some margin to separate items
        padding: 10, // Add some padding for better layout,,
    },
    itemImageSize: {
        width: 40,
        height: 40,
    },
    serviceName: {
        color: 'black',
        fontSize: 18,
        fontWeight: '900',
        marginLeft : 20,
        marginBottom: 5,
    },
});


function UserMenuList() {
    const { user } = useUserContext()
    return (
        <View style={styles.background}>
        <ScrollView style={styles.container}>

            <Text style={styles.userName}>{user?.name}</Text>
            
            <View style={styles.imageBtnContainer}>
                <TouchableOpacity>
                    <Image
                        style={styles.infoBtn}
                        source={userInformImage}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        style={styles.peteyeBtn}
                        source={peteyeImage}
                    />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.sectionText}>서비스 전체</Text>
            </View>

            <View style={styles.allServiceContainer}>
                <TouchableOpacity style={styles.serviceItem}>
                    <Image
                        style={styles.itemImageSize}
                        source={scheduleImage}
                    />
                    <Text style={styles.serviceName}>일정</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceItem}>
                    <Image
                        style={styles.itemImageSize}
                        source={piechartImage}
                    />
                    <Text style={styles.serviceName}>활동보고서</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceItem}>
                    <Image
                        style={styles.itemImageSize}
                        source={settingImage}
                    />
                    <Text style={styles.serviceName}>환경설정</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </View>
    );
}

export default UserMenuList;
