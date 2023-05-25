import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text,TextInput, Image, TouchableOpacity, FlatList,ImageBackground } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapView, { Marker } from 'react-native-maps';


const RoutingPage = ({ navigation }) => {

  const handelChooseRoute= () => {
    console.log("Pressed button")
  };
  const handleSearch= () => {
    navigation.navigate("ChooseRoute")
  };
  // const [search,setSearch]=useState[""];

  // updateSearch = (value) => {
  //   setSearch({ value });
  // };


  return (
    
    <View
      display="flex"
      // justifyContent='center'
      // alignItems="center"
      flexDirection="column"
      // backgroundColor={"#fff"}
    >
      <View display="flex"
      // justifyContent='center'
      // alignItems="center"
      backgroundColor={"#4ABE85"}
      flexDirection="row">
        <MaterialCommunityIcons  paddingTop="7%" style={{marginLeft:'2%'}} name='arrow-left' size={30} color='white' ></MaterialCommunityIcons>
        <View
        
          // justifyContent={'center'}
          // backgroundColor={"#4ABE85"}
          paddingTop="5%"
          paddingBottom="3%"
          width="100%"
          // height="25%"
        >
          
          
          <Text style={styles.dataText}>
            Đi từ 14/2 đường số 10
          </Text>
          <Text style={styles.dataText}>
            đến 149 Nguyến Văn Trỗi
          </Text>
        </View>
      </View>
        <MapView style={styles.map} >
        
        </MapView>
        <TouchableOpacity onPress={handelChooseRoute} style={[styles.room_container, styles.shadow_outline]}>
        <Entypo name="direction" color={"#fff"} size={25} />
          <Text style={styles.baseText}>
            Bắt đầu dẫn đường
          </Text>
        </TouchableOpacity>

    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#4ABE85',
  },
  wrap: {
    // flex: 10,
    display: 'flex',
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "25%"
  },
  room_container: {
    marginTop: "35%",
    marginLeft:"10%",
    position:"absolute",
    backgroundColor:  "#4ABE85" ,
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "row",
    width: "60%",
    height: "1%",
    // borderWidth: 1,
    borderRadius: 20
  },
  shadow_outline: {
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 3
    },
    evelation: 3
  },

  baseText: {
    marginTop: "2%",
    marginBottom: "2%",
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
    paddingLeft: "5%"
  },
  innerText: {
    color: 'red',
  },
  timeText: {
    // paddingRight:"5%",
    fontWeight: 'bold',
    color: 'white',
    fontSize: 60
  },
  searchbar: {
    flex:6,
    flexDirection: 'column',
  },
  dateText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 10
  },
  dataText: {
    // fontWeight: 'bold',
    color: 'white',
    fontSize: 17
  },
  address: {
    color: 'grey',
    fontSize: 10,
    paddingLeft: "5%"
  },
  item: {
    // flex:1,
    width: '100%',
    height: '50%',
    marginTop: "55%",
    backgroundColor: 'white',
    position:"absolute",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderColor:'#DDDDDD',
    borderBottomWidth:1,
    
  },
  map: {
    width: '100%',
    height: '100%',
    display: "flex",
    // justifyContent: 'center',
    // alignItems: "center",
    flexDirection: "column"
  }
});
export default RoutingPage;