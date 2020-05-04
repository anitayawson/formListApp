import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export default class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : "",
            password : ""
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginTextcontainer}>
                    <Text style={styles.loginText}>Log in</Text>
                </View>

                <View>
                    <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#aaaaaa" autoCapitalize="none" autoCorrect={false} value={this.state.username} onChangeText={(username)=>{this.setState({username})}}></TextInput>
                    <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaaaaa" autoCapitalize="none" autoCorrect={false} secureTextEntry={true} value={this.state.password} onChangeText={(password)=>{this.setState({password})}}></TextInput>
                    <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Log in</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.noAccountContainer}>
                    <Text style={styles.noAccountText}>Don't have an account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.signupText}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        marginTop: 100,
        marginHorizontal: 50
    },

    loginText: {
        fontSize: 50,
        color: "#7434eb"
    },

    loginTextcontainer: {
        marginBottom: 30
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

    noAccountContainer : {
        flexDirection: "row",
        justifyContent: "center"
    },

    noAccountText : {
        marginRight: 5,
        fontSize: 15
    },

    signupText : {
        fontSize: 15,
        color: "#7434eb"
    }
})
