import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, FlatList } from 'react-native';
import Searchbar from '../../Component/SearchBar/SearchBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
      title: '1',
    },
    {
      id: '2',
      title: '2',
    },
    {
      id: '3',
      title: '3',
    },
    {
      id: '4',
      title: '4',
    },
    {
      id: '5',
      title: '5',
    },
    {
      id: '6',
      title: '6',
    },
    {
      id: '7',
      title: '7',
    },
    {
      id: '8',
      title: '8',
    },
    {
      id: '9',
      title: '9',
    },
    {
      id: '10',
      title: '10',
    },
    {
      id: '11',
      title: '11',
    },
    {
      id: '12',
      title: '12',
    },
    {
      id: '13',
      title: '13',
    },
    {
      id: '14',
      title: '14',
    },
    {
      id: '15',
      title: '15',
    },
  ];
  

  const Item = ({title}) => (
    <View style={styles.item}>
        <View style={{flexDirection:'row', columnGap:10}}>
            <MaterialIcons name='notifications-on' size={25} color='green' ></MaterialIcons>
            <View style={{rowGap:5}}>
                <Text style={{fontFamily:'Inter_700Bold', color:'black', fontSize:20}}>Lễ này bạn đi đâu</Text>
                <Text style={{fontFamily:'Inter_400Regular', color:'black'}}>Đi đâu cũng được miễn là mình vui</Text>  
                <Text style={{fontFamily:'Inter_400Regular', color:'black'}}>Nhưng nhớ lên bus up đặt vé xe ngay chứ không kịp đâu nha</Text> 
                {/* <View style={{flexDirection:'row' ,columnGap:50}}>
                    <View style={{flexDirection:'row', columnGap:3, alignItems:'center'}}>
                        <MaterialCommunityIcons name='clock-time-three-outline' size={15} color='#DDDDDD'></MaterialCommunityIcons>
                        <Text style={{fontFamily:'Inter_400Regular', color:'#ABABAB'}}>05:00 - 20:15</Text>
                    </View>
                    <View style={{flexDirection:'row', columnGap:3 , alignItems:'center'}}>
                        <MaterialCommunityIcons name='currency-usd' size={20} color='#DDDDDD'></MaterialCommunityIcons>
                        <Text style={{fontFamily:'Inter_400Regular', color:'#ABABAB'}}>7k VND</Text>
                    </View>
                </View> */}
            </View>
        </View>
        
      
    </View>
  );


const NotificationPage = () => {
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
                    {/* <MaterialCommunityIcons style={{marginLeft:'2%'}} name='arrow-left' size={30} color='white' ></MaterialCommunityIcons> */}
                    <Text style={{marginLeft:'40%', fontFamily:'Inter_700Bold', color:'white', fontSize:18}}>Thông Báo</Text>
                </View>
            </View>
            
            <View style={styles.content}>
              <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.title} />}
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
    marginTop:10,
    flex:1,
  },
  content: {
    flex:5.5,
    backgroundColor:'white'
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
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderColor:'#DDDDDD',
    borderBottomWidth:1,
    
  },
  
});

export default NotificationPage;
