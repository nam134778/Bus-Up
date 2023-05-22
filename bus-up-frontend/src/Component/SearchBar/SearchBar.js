
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableOpacity,
    TextInput, Image
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Searchbar({ value, updateSearch, style }) {

    const [query, setQuery] = useState();
    const [error, setError] = useState()
    return (
        <View style={[styles.container, style]}>
            <View style={[styles.searchContainer, {backgroundColor:value[1]}]}>
                <View style={styles.vwSearch}>
                    <MaterialCommunityIcons name={value[0]} size={18} color={value[2]}/>
                </View>

                <TextInput
                    value={query}
                    placeholder={value[3]}
                    placeholderTextColor={value[2]}
                    style={styles.textInput}
                    onChangeText={(text) => {
                        var letters = /^$|^[a-zA-Z._\b ]+$/;
                        if (text.length > 12)
                            setError("Query too long.")
                        else if (text.match(letters)) {
                            setQuery(text)
                            updateSearch(text)
                            if (error)
                                setError(false)
                        }
                        else setError("Please only enter alphabets")
                    }}
                />
                {
                    query ?
                        <TouchableOpacity
                            onPress={() => setQuery('')}
                            style={styles.vwClear}>
                            <MaterialCommunityIcons name='backspace-outline' size={18} color={value[2]}/>
                        </TouchableOpacity>
                        : <View style={styles.vwClear} />
                }

            </View>
            {
                error &&
                <Text style={styles.txtError}>
                    {error}
                </Text>
            }
        </View >
    )
}
const styles = StyleSheet.create({
    txtError: {
        marginTop: '2%',
        width: '89%',
        color: 'white',

    },
    vwClear: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        
        // backgroundColor: 'green',
        flex: 1,
        
    },

    vwSearch: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        // width: 40,
        // backgroundColor: 'red'
    },
    icSearch: {
        height: 18, width: 18
    },
    searchContainer:
    {
        margin: 10,
        height: '70%',
        width: '90%',
        backgroundColor: '#0A9C59',
        flexDirection: 'row',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
 
    },
    container: {
        flex:1,
        alignItems: 'center',
        // height: '100%', width: '100%' 
    },
});