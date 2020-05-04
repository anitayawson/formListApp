import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { MaterialIcons, Feather, SimpleLineIcons } from '@expo/vector-icons'

export default function Contact({ name, phone }) {

    return (
            <View style={styles.container}>
                <Image source={require('../assets/icon.jpg')} style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.name} numberOfLines={1}> {name} </Text>
                    <Text> {phone} </Text>
                </View>
                <View style={styles.icon}>
                    <MaterialIcons name="phone" size={25} color="#29cff0" />
                </View>
                <View style={styles.icon}>
                    <Feather name="message-circle" size={25} color="#29cff0" />
                </View>
                <View style={styles.icon}>
                    <SimpleLineIcons name="options-vertical" size={25} color="#babebf" />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 30,
        marginBottom: 10,
        alignItems: "center"
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },

    infoContainer: {
        justifyContent: "center",
        marginHorizontal: 15,
        flex: 4
    },

    name: {
        fontWeight: "bold",
        fontSize: 17
    },

    icon: {
        flex: 1
    }
})
