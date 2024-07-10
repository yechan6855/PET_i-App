import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { RootStackParamList } from ".";

export default function LoginPage() {
    const [inputId, setInputId] = useState<string>()
    const [inputPassword, setInputPassword] = useState<string>()
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    function loginAction() {
        const body = {
            inputId,
            inputPassword
        }
        if (!checkForm({id:inputId, password:inputPassword})) {
            console.log("잘못된 요청입니다.")
            return
        }
        loginRequest({
            id : body.inputId as string,
            password : body.inputPassword as string
        })
    }
    function loginRequest({id, password} : {
        id : string;
        password : string;
    }) {
        try {
            console.log("로그인 요청!")
            // 성공
            // 대충 redirect 하는 코드

            // throw new Error("오류가 왔어요!")
            navigation.navigate("Developer")
        } catch (e) {
            // 서버에서 에러발생하거나 그외에 모든 이슈
            console.log("error 발생")
            console.log(e)
            return
        }
    }
    function checkForm({id, password} : {id : string | undefined, password : string | undefined}) : boolean {
        return checkId(id) && checkPassword(password) ? true : false
    }
    function checkId(id : string | undefined) : boolean {
        if (id == "" || id == undefined) return false;
        else return true;
    }
    function checkPassword(password : string | undefined) : boolean  {
        if (password == "" || password == undefined) return false;
        else return true;
    }
    return (
        <View>
            <Text>로그인 페이지 이다.</Text>
            <TextInput placeholder="ID" value={inputId} onChangeText={(text) => {
                setInputId(text)
            }}/>
            <TextInput placeholder="PW" onChangeText={setInputPassword}/>
            <Button onPress={loginAction} title="로그인"></Button>
        </View>
    )
}