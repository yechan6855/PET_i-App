import React from 'react';
import {Text, View,Button, StyleSheet} from 'react-native';

function PetPage(){
    return (
      <View style={styles.MainView}>
        <View style={styles.TopView}>
          <View style={styles.TopLeft}>
            <View>
              <Text style={styles.PetNameBox}>PET Name</Text>
            </View>
            <View style={styles.TopLeftBottom}>
              <View style={styles.ImageBox}>
                <Text>사진 들어가야 할 곳</Text>
              </View>
              <View style={styles.StatusBarBox}>
                <View style={styles.StatusNormal}>
                </View>
                <View style={styles.StatusWarning}>
                </View>
                <View style={styles.StatusDanger}>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.TopRight}>
            <View style={styles.TopButton}>
              <Button title="today"/>
            </View>
            <View style={styles.TopButton}>
              <Button title="schedule"/>
            </View>
            <View style={styles.TopButton}>
              <Button title="diary"/>
            </View>
          </View>
        </View>
        <View style={styles.BottomView}>
          <Text>나중에 그래프 넣을 곳</Text>
        </View>
      </View>
    );
  }
  
  const DefaultColor = '#f5e9b5';
  
  const styles = StyleSheet.create({
    MainView: {
      marginTop: 20,
    },
    TopView: {
      height: '35%',
      margin: 10,
      flexDirection: 'row',
    },
    TopLeft:{
      alignItems: 'center',
      backgroundColor: DefaultColor,
      width: '48%',
      margin: 5,
      borderRadius: 15,
    },
    TopRight:{
      width: '48%',
      marginBottom: 5,
      flexDirection: 'column',
    },
    BottomView: {
      margin: 10,
      height: '60%',
      backgroundColor: DefaultColor,
      borderRadius: 10,
    },
    TopButton:{
      margin: 4.5,
      height: '30%',
      backgroundColor: 'orange',
      justifyContent: 'center',
      borderRadius: 10,
    },
    ImageBox:{
      marginLeft: 10,
      marginRight: 10,
      height: '100%',
      width: '65%',
      borderRadius: 10,
      backgroundColor: 'white',
    },
    StatusBarBox:{
      height: '100%',
      width: '15%',
      marginLeft: 3,
      flexDirection: 'column',
    },
    PetNameBox:{
      marginTop: 10,
      fontSize: 30,
    },
    TopLeftBottom:{
      flexDirection: 'row',
      height: '70%',
      width: '100%',
      marginTop: 10,
    },
    StatusNormal:{
      marginBottom: 10,
      height: 25,
      width: 25,
      backgroundColor: 'green',
      borderRadius: 15,
    },
    StatusWarning:{
      marginBottom: 10,
      height: 25,
      width: 25,
      backgroundColor: 'yellow',
      borderRadius: 15,
    },
    StatusDanger:{
      height: 25,
      width: 25,
      backgroundColor: 'red',
      borderRadius: 15,
    },
  });

export default PetPage