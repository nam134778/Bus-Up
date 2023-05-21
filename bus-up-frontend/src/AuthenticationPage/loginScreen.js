import React from "react";
import { useState } from "react";
import { View, TouchableOpacity, Text, Image, TextInput, Button, KeyboardAvoidingView, StyleSheet, SafeAreaView, ProgressBarAndroid, StatusBar, ScrollView } from 'react-native';
const COLORS = {primary: "#4ABE85", secondary: 'rgba(74, 190, 133, 0.4)', third: "#0A9C59"};
const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('./assets/logo.png')} style={styles.image}/>
            {/* <View style={{marginTop: 100}}> */}
                <View style={styles.inputView1}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Tên đăng nhập"
                    placeholderTextColor="#757F8C"
                    onChangeText={(email) => setEmail(email)}
                    /> 
                </View> 
                <View style={styles.inputView2}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Mật khẩu"
                    placeholderTextColor="#757F8C"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    /> 
                </View>
                <View style={{}}>
                    <TouchableOpacity onPress={() => navigation.navigate("ForgotPass")}>
                    <Text style={{marginLeft: 200, marginTop: 20, fontSize: 16, color: COLORS.primary}}>Quên mật khẩu?</Text> 
                </TouchableOpacity>
                </View>
                {/* <View style={styles.loginBtn}> */}
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 500 }}>Đăng nhập</Text> 
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ color: COLORS.primary, fontSize: 16, marginTop: 10}}>Đăng kí</Text> 
                </TouchableOpacity>
                {/* </View> */}
            {/* </View> */}
        </SafeAreaView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
     },
     image :{
        alignItems: 'center',
        marginTop: 175
    }
    ,
    inputView1: {
        borderColor: 'rgba(166, 170, 180, 0.6)',
        borderBottomWidth: 1,
        width: "80%",
        height: 45,
        marginTop: 60,
      },
    inputView2: {
        borderColor: 'rgba(166, 170, 180, 0.6)',
        borderBottomWidth: 1,
        width: "80%",
        height: 45,
        marginTop: 25,
      },
      TextInput: {
        height: 40,
        marginBottom: 36,
        fontSize: 16,
      },
      loginBtn:
      {
        width:"80%",
        borderRadius: 6,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor: COLORS.primary,
      }
  });