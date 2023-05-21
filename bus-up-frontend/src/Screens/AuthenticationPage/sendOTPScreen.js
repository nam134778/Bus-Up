import React from "react";
import { useState } from "react";
import { View, TouchableOpacity, Text, Image, TextInput, Button, KeyboardAvoidingView, StyleSheet, SafeAreaView, ProgressBarAndroid, StatusBar, ScrollView } from 'react-native';
import { KeycodeInput } from 'react-native-keycode';
const COLORS = {primary: "#4ABE85", secondary: 'rgba(74, 190, 133, 0.4)', third: "#0A9C59"};

const SendOTPScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('./assets/logo.png')} style={styles.image}/>
            <View>
            <Text style={{ fontSize: 16, marginTop: 10}}>Nhập mã xác nhận</Text> 
            </View>
            <View style={{marginTop: 40}}>
            <KeycodeInput
            // style={{width: 100}}
            tintColor={COLORS.primary}
            onComplete={(value) => {
              alert(value)
            }}
            numeric={true}
            />
                </View>
                <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
            <Text style={{ fontSize: 16, marginTop: 30}}>Chưa nhận được?</Text>
            <TouchableOpacity>
                    <Text style={{ color: '#613EEA',marginLeft: 10, fontSize: 16,marginTop: 30 }}>Gửi lại</Text> 
            </TouchableOpacity>
            </View>
                <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("ResetPassword")}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 500 }}>Tiếp theo</Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={{ color: COLORS.primary, fontSize: 16, marginTop: 10}}>Quay lại</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SendOTPScreen;

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
        marginTop:70,
        backgroundColor: COLORS.primary,
      }
  });