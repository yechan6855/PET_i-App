import { Platform } from "react-native"

const ANDROID_SERVER = "http://10.0.0.2:5500"
const IOS_SERVER = "http://localhost:5500"
const SERVER = "http://freeptk.iptime.org:5500"
export function getServerURL() : string {
    switch (Platform.OS) {
        case "ios":
            return IOS_SERVER
        case "android":
            return ANDROID_SERVER
        default:
            throw new Error("IOS or Android 만 가능함.")
    }
}