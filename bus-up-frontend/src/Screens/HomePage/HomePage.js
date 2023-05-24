import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text,TextInput, Image, TouchableOpacity, TouchableHighlight,ImageBackground } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Searchbar from '../../Component/SearchBar/SearchBar';
import { Input, SearchBar } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
// init({
//   size: 10000,
//   storageBackend: AsyncStorage,
//   defaultExpires: 1000 * 3600 * 24,
//   enableCache: true,
//   reconnect: false,
//   sync: {}
// });

const HomePage = ({ navigation }) => {

  const handelChooseRoute= () => {
    navigation.navigate("ListRoute")
  };
  const handleSearch= () => {
    navigation.navigate("ChooseRoute")
  };
  // const [search,setSearch]=useState[""];

  // updateSearch = (value) => {
  //   setSearch({ value });
  // };


  return (
    <ImageBackground source={require('./assets/map.png')} resizeMode="stretch" flex={1}
    justifyContent ='center'
    height={200}
    >
    <View
      display="flex"
      justifyContent='center'
      alignItems="center"
      flexDirection="column"
      // backgroundColor={"#fff"}
    >
      {/* <ImageBackground source={require('./assets/image1.png')} resizeMode="cover" style={styles.image}> */}
      <View
        justifyContent={'center'}
        backgroundColor={"#4ABE85"}
        paddingTop="15%"
        width="100%"
        // height="25%"
      >
        <Text style={styles.baseText}>
          Chào bạn!
        </Text>
        <Input
        // lightTheme='true'
          marginTop="5%"
          backgroundColor={"#365B51"}
          placeholder="Bạn muốn đi đâu..."
          onSubmitEditing={handleSearch}
        />
        {/* <View style={styles.searchbar}>
                    <Searchbar value={['magnify','#EDEEF1','#555555','Tìm kiếm chuyến xe']} />
        </View> */}
      </View>
        <MapView style={styles.map} >
        <TouchableOpacity onPress={handelChooseRoute} style={[styles.room_container, styles.shadow_outline]}>
          
          <Text style={styles.baseText}>
            Tra Cứu Tuyến Xe
          </Text>
        </TouchableOpacity>
        </MapView>
    </View>
    </ImageBackground>

  );
}
const styles = StyleSheet.create({
  container: {
    gridColumn: "span 4",
    gridRow: "span 2",
    backgroundColor: "#fff",

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
    marginTop: "70%",
    marginBottom: "10%",
    backgroundColor:  "#4ABE85" ,
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "column",
    width: "80%",
    // height: "30%",
    // borderWidth: 1,
    // borderRadius: 20
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
    fontSize: 30,
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
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15
  },
  address: {
    color: 'grey',
    fontSize: 10,
    paddingLeft: "5%"
  },
  room_name: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  number_devices: {
    color: 'grey',
    fontSize: 10,
  },

  overview: {
    backgroundColor: "#2A2A37",
    display: "flex",
    flexDirection: "column",
    height: "25%",
    width: "90%",
    borderRadius: 20
  },
  overviewContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  overviewItemLeft: {
    paddingLeft: "5%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "90%",
    width: "60%"
  },
  overviewItemRight: {
    paddingLeft: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "90%",
    width: "30%"
  },
  map: {
    width: '100%',
    height: '80%',
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "column"
  }
});
export default HomePage;