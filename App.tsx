import React from "react";
import { Pages } from "./src/pages";
import { SafeAreaView } from "react-native-safe-area-context";

// 각종 전역적인 뿌슝빠슝 컴포넌트이다.
function App(){
  return (
    <SafeAreaView style={{flex : 1}}>
      <Pages/>
    </SafeAreaView>
  )
}

export default App;