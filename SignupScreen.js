import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export default class SignupScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmpassword: ""
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.signupTextcontainer}>
                    <Text style={styles.signupText}>Sign Up</Text>
                </View>

                <View>
                    <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#aaaaaa" autoCapitalize="none" autoCorrect={false} value={this.state.username} onChangeText={(username)=>{this.setState({username})}}></TextInput>
                    <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaaaaa" autoCapitalize="none" autoCorrect={false} value={this.state.email} onChangeText={(email)=>{this.setState({email})}}></TextInput>
                    <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaaaaa" autoCapitalize="none" autoCorrect={false} secureTextEntry={true} value={this.state.password} onChangeText={(password)=>{this.setState({password})}}></TextInput>
                    <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#aaaaaa" autoCapitalize="none" autoCorrect={false} secureTextEntry={true} value={this.state.confirmpassword} onChangeText={(confirmpassword)=>{this.setState({confirmpassword})}}></TextInput>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Sign up</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.haveanAccountContainer}>
                    <Text style={styles.haveanAccountText}>Already have an account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.loginText}> Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        marginTop: 70,
        marginHorizontal: 50
    },

    signupText: {
        fontSize: 50,
        color: "#7434eb"
    },

    signupTextcontainer: {
        marginBottom: 20
    },

    input: {
        borderBottomWidth: 2,
        borderBottomColor: "#7434eb",
        fontSize: 20,
        height: 50,
        marginTop: 20
    },

    forgotPassword: {
        alignSelf: "flex-end",
        marginVertical: 5,
        color: "#266cbd",
        marginTop: 10
    },

    buttonContainer: {
        height: 50,
        backgroundColor: "#7434eb",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 50
    },

    buttonText: {
        color: "#fff",
        fontSize: 25,
    },

    haveanAccountContainer : {
        flexDirection: "row",
        justifyContent: "center"
    },

    haveanAccountText : {
        marginRight: 5,
        fontSize: 15
    },

    loginText : {
        fontSize: 15,
        color: "#7434eb"
    }
})
