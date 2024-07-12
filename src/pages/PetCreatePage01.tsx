import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import OrangeIconImage from "../../assets/images/peti_icon_orange.png"
import man from "../../assets/images/man.png"
import female from "../../assets/images/female.png"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '.';

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor:"white",
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width : 50,
        height : 40,
        marginBottom: 10
    },
    header:{
        flexDirection:'row',
        marginRight:180,
        marginBottom:30
    },
    headertext: {
        fontSize:25,
        fontWeight:'bold',
        color:'#EA5A2D',
        marginLeft:10,
        marginTop:3
    },
    title:{
        marginRight:250,
        fontSize:25,
        fontWeight:'bold',
        width:100,
        marginBottom:20
    },
    NameInput:{
        height: 40,
        width: 350,
        paddingHorizontal: 10,
        fontSize:20
    },
    line:{
        borderColor:'#EA5A2D',
        borderWidth:2,
        marginBottom:50
    },
    date:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:30
    },
    gender:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    genderimage:{
        width:70,
        height:70,
        marginHorizontal:10,
        marginBottom:50
    },
    button:{
        width : 200,
        height : 45,
        backgroundColor : '#EA5A2D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText:{
        fontSize : 20,
        fontWeight: 'bold',
        color : 'white'
    },
    DateInput: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign:'center',
        marginBottom:25
    }
});

// 생년월일 yyyy-mm-dd로 표현하는 포멧 (?? 모르겠음)
const formatDate = (date: Date, format: string) => {
    // const weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    return format.replace(/(yyyy|MM|dd|E|HH|hh|mm|ss|a\/p)/gi, (match) => {
        switch (match) {
            case "yyyy": return date.getFullYear().toString();
            case "MM": return (date.getMonth() + 1).toString().padStart(2, '0');
            case "dd": return date.getDate().toString().padStart(2, '0');
            // case "E": return weekName[date.getDay()];
            // case "HH": return date.getHours().toString().padStart(2, '0');
            // case "hh": return ((date.getHours() % 12 || 12).toString().padStart(2, '0'));
            // case "mm": return date.getMinutes().toString().padStart(2, '0');
            // case "ss": return date.getSeconds().toString().padStart(2, '0');
            // case "a/p": return date.getHours() < 12 ? "오전" : "오후";
            default: return match;
        }
    });
};


function PetCreatePage01(){
    //생년월일
    const [inputbirthdate, setInputBirthDate] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date:Date) => {
        const formattedDate = formatDate(date, "yyyy-MM-dd");
        setInputBirthDate(formattedDate);
        hideDatePicker();
    };
    
    //네비게이터
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()


    //유효성 검사
    const [inputname, setInputName] = useState<string>("");
    const [inputgender, setInputGender] = useState<string>("");
    

    function CreateAction(){
        const body = {
            inputname,
            inputbirthdate,
            inputgender
        }
        if (!CheckForm({name:inputname, birthdate:inputbirthdate, gender:inputgender})){
            console.log("잘못된 요청입니다.")
            return
        }
        CreateRequest({
            name: body.inputname as string,
            birthdate: body.inputbirthdate as string,
            gender: body.inputgender as string
        })
    }

    function CreateRequest({name, birthdate, gender}: {
        name : string;
        birthdate : string;
        gender : string;
     }) {
        try {
            console.log("로그인 요청!")
            navigation.navigate("PetCreateResult")
        } catch (e){
            console.log("error 발생")
            console.log(e)
            return
        }
     }

    function CheckForm({name,birthdate,gender} : {name : string, birthdate :string, gender : string}){
        return CheckName(name) && CheckBirthDate(birthdate) && CheckGender(gender) ? true : false;
    }

    function CheckName(name : string | undefined) : boolean{
        if(name == "" || name == undefined) return false;
        else return true; 
    }

    function CheckBirthDate(birthdate : string | undefined) : boolean{
        if(birthdate == "" || birthdate == undefined) return false;
        else return true; 
    }

    function CheckGender(gender : string | undefined) : boolean{
        if(gender == "" || gender == undefined) return false;
        else return true; 
    }

    return(
        <View style={styles.container}>
            <View style = {styles.header}>
                <Image
                    style = {styles.icon}
                    source = {OrangeIconImage}
                />
                <Text style={styles.headertext}>프로필 등록</Text>
            </View>
            <View>
                <Text style = {styles.title}>이름</Text>
                <TextInput
                    style={styles.NameInput}
                    placeholder='이름을 입력해주세요.'
                    value={inputname}
                    onChangeText={setInputName}
                />
                <View style={styles.line}></View>
            </View>
            <View>
                <Text style = {styles.title}>생년월일</Text>
                <TouchableOpacity onPress={showDatePicker}>
                <TextInput
                    pointerEvents="none" //  텍스트 입력 필드를 터치할 수 없게 만들고, 대신 상위 TouchableOpacity 컴포넌트가 터치 이벤트를 처리하도록 합니다.
                    style={styles.DateInput}
                    placeholder='YYYY : MM : DD'
                    placeholderTextColor="black"
                    underlineColorAndroid="transparent" //Android에서 텍스트 입력 필드의 밑줄 색상을 투명하게 설정합니다. 기본적으로 Android에서는 텍스트 입력 필드에 밑줄이 표시되는데, 이 속성을 통해 이를 투명하게 만들 수 있습니다.
                    editable={false} //TextInput이 편집 가능 여부를 설정합니다. 이 경우 false로 설정하여 사용자가 텍스트 입력 필드를 편집할 수 없게 만듭니다.
                    value={inputbirthdate}
                />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    locale='ko-KR' 
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                </TouchableOpacity>	
            </View>
            <View>
                <Text style = {styles.title}>성별</Text>
                <View style={styles.gender}>
                    <TouchableOpacity onPress={() => setInputGender("1")}>
                        <Image
                            style={styles.genderimage}
                            source={man}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setInputGender("2")}>
                        <Image
                            style={styles.genderimage}
                            source={female}
                        />
                    </TouchableOpacity>
                </View>    
            </View>
            <TouchableOpacity style={styles.button} onPress={CreateAction}>
                <Text style={styles.buttonText}>등록</Text>
            </TouchableOpacity> 
        </View>
    );
}

export default PetCreatePage01;