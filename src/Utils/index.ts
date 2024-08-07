import { Platform } from "react-native"

export function getDateString(date : Date) {
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDay().toString().padStart(2, '0')}`
}

const PORT = 5500
const ANDROID_HOST = "http://10.0.2.2"
const IOS_HOST = "http://localhost"
export function getHost() {
    return Platform.OS === "ios" ?
    IOS_HOST + `:${PORT}` : 
    ANDROID_HOST + `:${PORT}`
}