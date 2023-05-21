import React from "react";
import { useState } from "react";
import { View, TouchableOpacity, Text, Image, TextInput, Button, KeyboardAvoidingView, StyleSheet, SafeAreaView, ProgressBarAndroid, StatusBar, ScrollView } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import Icon from 'react-native-vector-icons/AntDesign';

const COLORS = {primary: "#4ABE85", secondary: 'rgba(74, 190, 133, 0.4)', third: "#0A9C59"};
const RegisterScreen = ({navigation}) => {
    const [showAlert, setShowAlert] = useState(false);
    const show = () => {
        setShowAlert(true)
        setTimeout(() => navigation.navigate("Login"), 1000)
    }
    const hide = () => {
        setShowAlert(false)
    }
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
                    keyboardType="numeric"
                    placeholder="Số điện thoại"
                    placeholderTextColor="#757F8C"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
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
                <View style={styles.inputView2}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Nhập lại mật khẩu"
                    placeholderTextColor="#757F8C"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    /> 
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={() => show()}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 500 }}>Đăng kí</Text> 
                </TouchableOpacity>
                <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Đăng kí thành công"
          titleStyle={{fontWeight: 500}}
          customView={<Icon name="checkcircleo" size={35} color={COLORS.primary} style={{marginTop: 5}}/>}
        //   message="I have a message for you!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          modalProps={{
            width: '80%',
            borderRadius: 30
          }}
          onCancelPressed={() => {
            hide();
          }}
          
        />
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={{ color: COLORS.primary, fontSize: 16, marginTop: 10}}>Quay lại</Text>
                </TouchableOpacity>
                {/* </View> */}
            {/* </View> */}
        </SafeAreaView>
    )
}

export default RegisterScreen;

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