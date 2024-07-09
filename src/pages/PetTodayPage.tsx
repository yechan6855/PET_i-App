import React from "react";
import {View, Text, Button, StyleSheet, Image} from "react-native";

function PetTodayPage(){
  return (
    <View style={styles.MainView}>
      <Text style={styles.BigText}>Today</Text>
      <View style={styles.MediumView}>
        <View style={styles.ImageView}>
        </View>
        <View>
          <Text style={styles.BigText}>Pet Name</Text>
        </View>
        <View style={styles.BottomView}>
          <View>
            <Text style={styles.NormalText}>Today's rate is</Text>
          </View>
          <View style={styles.RateBoxView}>
            <Text style={styles.RateBoxText}> BPM </Text>
            <Text style={styles.RateBoxText}> ❤️ 37 </Text>
            <Text style={styles.RateBoxText}> now state </Text>
            <View style={styles.NowState}></View>
          </View>
          <View>
            <Text> 추후 작업 예정 </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const DefaultColor = '#f5e9b5';
const DefaultColor2 = '#ffcaa8';

const styles=StyleSheet.create({
  MainView: {
    margin: 6,
  },
  BigText: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
  },
  MediumView:{
    width: '100%',
    height: '100%',
    backgroundColor: DefaultColor,
    alignItems: 'center',
  },
  ImageView: {
    backgroundColor: 'white',
    height: 200,
    width: 200,
    borderRadius: 100,
    marginTop: 30,
    marginBottom: 10,
  },
  BottomView:{
    marginTop: 20,
    height: '100%',
    width: '100%',
  },
  RateBoxView:{
    backgroundColor: DefaultColor2,
    width: '95%',
    height: 70,
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  NormalText:{
    marginLeft: 10,
  },
  RateBoxText:{
    fontSize: 15,
    fontWeight: 'bold',
  },
  NowState:{
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'green'
  }
})

export default PetTodayPage;