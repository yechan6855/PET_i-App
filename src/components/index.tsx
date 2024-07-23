import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

const styles = StyleSheet.create({
    section : {
        backgroundColor : "#ffffff",
        padding : 9
    },
    sectionTitle : {
        marginBottom : 9
    },
    sectionTitleText : {
        fontSize : 18,
        fontWeight : '900',        
    }
})

export function Section({children, style, title} : {children : React.ReactNode, title : string, style?: StyleProp<ViewStyle>}) {        
    return (
        <View style={[styles.section, style]}>
            <View style={styles.sectionTitle}>
                <Text style={styles.sectionTitleText}>{title}</Text>
            </View>
            { children }
        </View>

    )
}