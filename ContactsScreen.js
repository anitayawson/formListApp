import React from 'react'
import {View, FlatList, Text, StyleSheet} from 'react-native'
import Contact from './components/Contact'

export default function ContactsScreen() {
    const contacts = [
        {name: "Mom Work", number: "020-123-4567"},
        {name: "Abena Kwakwa", number: "024-733-0000"},
        {name: "Nana Yaw Addo", number: "027-900-0222"},
        {name: "Dad UK", number: "027-121-1121"},
        {name: "Marilyn Uffort", number: "029-762-5353"},
        {name: "Davina Yawson", number: "026-909-0561"},
        {name: "John Mensah", number: "020-353-5355"},
        {name: "André Bonzoe", number: "024-334-4567"},
        {name: "Mom Work", number: "020-123-4567"},
        {name: "Abena Kwakwa", number: "024-733-0000"},
        {name: "Nana Yaw Addo", number: "027-900-0222"},
        {name: "Dad UK", number: "027-121-1121"},
        {name: "Marilyn Uffort", number: "029-762-5353"},
        {name: "Davina Yawson", number: "026-909-0561"},
        {name: "John Mensah", number: "020-353-5355"},
        {name: "André Bonzoe", number: "024-334-4567"},
        {name: "Mom Work", number: "020-123-4567"},
        {name: "Abena Kwakwa", number: "024-733-0000"},
        {name: "Nana Yaw Addo", number: "027-900-0222"},
        {name: "Dad UK", number: "027-121-1121"},
        {name: "Marilyn Uffort", number: "029-762-5353"},
        {name: "Davina Yawson", number: "026-909-0561"},
        {name: "John Mensah", number: "020-353-5355"},
        {name: "André Bonzoe", number: "024-334-4567"},
    ]
    
    return (
        <View>
            <Text style={styles.pageTitle}>Contacts</Text>
            <FlatList 
                data={contacts}
                renderItem={({item})=>{
                    return <Contact name={item.name} phone={item.number}/>
                }}
                keyExtractor={(item)=> item.number}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    pageTitle : {
        fontSize: 35,
        fontWeight: "bold",
        marginVertical: 20,
        marginHorizontal: 20,
        

    }
})
