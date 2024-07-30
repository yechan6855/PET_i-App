import React from "react";
import { Pages } from "./src/pages";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserProvider } from "./src/hooks/useUserContext";

// 각종 전역적인 뿌슝빠슝 컴포넌트이다.
function App(){
  return (
    <UserProvider>
      <SafeAreaView style={{flex : 1}}>
        <Pages/>
      </SafeAreaView>
    </UserProvider>
  )
}

export default App;