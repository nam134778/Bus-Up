import React from 'react';

import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { ScrollView, FlatList } from 'react-native';
import Searchbar from '../../Component/SearchBar/SearchBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    useFonts,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  } from '@expo-google-fonts/inter';

  const DATA = [
    {
      id: '1',
      title: 'Họ',
      detail: 'Kiều',
    },
    {
      id: '2',
      title: 'Tên',
      detail: 'Quân',
    },
    {
      id: '3',
      title: 'Giới tính',
      detail: 'Nam',
    },
    {
        id: '4',
        title: 'Ngày sinh',
        detail: '20/11/2002',
      },
      {
        id: '5',
        title: 'Số điện thoại',
        detail: '0912915557',
      },
      {
        id: '6',
        title: 'Email',
        detail: 'quan.kieukhanh@hcmut.edu.vn',
      },
    
  ];
  

  const Item = ({detail}) => (
    <View style={styles.item}>
        
        <Text style={{fontFamily:'Inter_600SemiBold', fontSize:15, flex:8, color:'#ABABAB'}}>{detail.title}</Text>
        <Text style={{marginRight:5}}>{detail.detail}</Text>
        <MaterialCommunityIcons name='pencil' size={25} style={{flex:1}} color='#ABABAB'></MaterialCommunityIcons>
    </View>
  );

const AccountSettingScreen = ({ navigation }) => {
  const choosroute= () => {
    navigation.navigate("Routing")
  };
    let [fontsLoaded] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
      });
    if (!fontsLoaded) {
       return null;
    }
  else{
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.backspace}>
                    
                    
                </View>
                <View style={styles.searchbar}>
                        <MaterialCommunityIcons name='account-cog-outline' size={70} color='white' style={{textAlign:'center', overflow:'visible'}}
                        ></MaterialCommunityIcons>
                        <Text style={{fontFamily:'Inter_700Bold', textAlign:'center', color:'white',fontSize:23}}>Quân</Text>
                    
                </View>
            </View>
            
            <View style={styles.content}>
                <FlatList
                data={DATA}
                renderItem={({item}) => <TouchableOpacity onPress={choosroute}><Item detail={item} /></TouchableOpacity>}
                keyExtractor={item => item.id}
                />
            </View>
        
        </View>
    );
  }
    
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#4ABE85',
  },
  header: {
    marginTop:60,
    flex:1,
    
  },
  content: {
    flex:4,
    backgroundColor: '#EDEEF1',
  },
  backspace:{
    alignItems:'center',
    flexDirection:'row',
    flex:2,
    
  },

  searchbar: {
    flex:6,
    flexDirection: 'column',
    
  },
  routeinfor: {
    margin: 8,
    backgroundColor: 'red',
    height:'20%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
  },
  item: {
    flex:1,
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderColor:'white',
    borderWidth:2,
    flexDirection:'row',
    alignItems:'center',
  },
  itemDetail1: {
    flexDirection:'row',
    justifyContent: 'space-around',
  },
  itemDetail2: {
    margin:10,
    flexDirection:'row',
    justifyContent: 'flex-start',
    columnGap: 50,
  },
  itemDetail3: {

  },
});

export default AccountSettingScreen;
