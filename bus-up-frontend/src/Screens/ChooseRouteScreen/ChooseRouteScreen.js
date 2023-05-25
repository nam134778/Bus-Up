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
      <View style={styles.itemDetail1}>
          <View style={{backgroundColor:'#0A9C59', flexDirection:'row', borderRadius:10, padding:3}}>
            <MaterialCommunityIcons name = 'bus' size={25} color='white'></MaterialCommunityIcons>
            <Text style={{fontFamily:'Inter_700Bold', color:'white'}}>04</Text>
          </View>
          <View style={{backgroundColor:'#E0B827', flexDirection:'row', borderRadius:10, padding:3,}}>
            <MaterialCommunityIcons name = 'bus' size={25} color='white'></MaterialCommunityIcons>
            <Text style={{fontFamily:'Inter_700Bold', color:'white'}}>04</Text>
          </View>
            <Text style={{fontFamily:'Inter_600SemiBold', color:'white'}}>12k VNĐ</Text>
          <View>
            <Text style={{fontFamily:'Inter_700Bold', color:'white', fontSize:22}}>31(+10)</Text>
          </View>
      </View>
      <View style={styles.itemDetail2}>
          <View style={{ flexDirection:'row', borderRadius:10, padding:3}}>
            <MaterialCommunityIcons name = 'walk' size={25} color='white'></MaterialCommunityIcons>
            <Text style={{fontFamily:'Inter_700Bold', color:'white', fontSize:23}}>618m</Text>
          </View>
          <View style={{ flexDirection:'row', borderRadius:10, padding:3}}>
            <MaterialCommunityIcons name = 'bus' size={25} color='white'></MaterialCommunityIcons>
            <Text style={{fontFamily:'Inter_700Bold', color:'white', fontSize:23}}>10.2km</Text>
          </View>
      </View>
      <View style= {styles.itemDetail3}>
        <Text style={{fontFamily:'Inter_400Regular', color:'white'}}>Đón xe tại trạm công viên Hoàng Văn Thụ</Text>
      </View>
    </View>
  );

const ChooseRouteScreen = ({ navigation }) => {
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
                    <MaterialCommunityIcons style={{marginLeft:'2%'}} name='arrow-left' size={30} color='white' ></MaterialCommunityIcons>
                    <Text style={{marginLeft:'20%', fontFamily:'Inter_700Bold', color:'white', fontSize:18}}>Chọn tuyến xe Buýt</Text>
                </View>
                <View style={styles.searchbar}>
                    <Searchbar value={['target','#0A9C59','white','Tìm kiếm địa điểm']}/>
                    <Searchbar value ={['map-marker','#0A9C59','white','Tìm kiếm địa điểm']}/>
                </View>
            </View>
            
            <View style={styles.content}>
              <FlatList
                data={DATA}
                renderItem={({item}) => <TouchableOpacity onPress={choosroute}><Item title={item.title} /></TouchableOpacity>}
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
    backgroundColor: '#4ABE85',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderColor:'white',
    borderWidth:2,
    
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

export default ChooseRouteScreen;
