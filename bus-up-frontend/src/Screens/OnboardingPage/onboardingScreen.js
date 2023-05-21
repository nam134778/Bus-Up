import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Button, Image, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';

const { width, height } = Dimensions.get("window");

const COLORS = {primary: "#4ABE85", secondary: 'rgba(74, 190, 133, 0.4)', third: "#0A9C59"};

const OnboardingScreen = ({navigation}) => {

    const Square = ({ isLight, selected }) => {
        let backgroundColor;
        if (isLight) {
          backgroundColor = selected ? COLORS.primary : COLORS.secondary;
        } else {
          backgroundColor = selected ? '#fff' : 'rgba(74, 190, 133, 0.4)';
        }
        return (
          <View
            style={{
              width: 20,
              height: 6,
              borderRadius: 10,
              marginHorizontal: 3,
              backgroundColor,
            }}
          />
        );
      };
      
      const backgroundColor = isLight => (isLight ? COLORS.primary : COLORS.secondary);
      const color = isLight => backgroundColor(!isLight);
      
      const Done = ({ isLight, ...props }) => (
        <Text {...props} style={{marginRight: 15, fontSize: 20, fontWeight: 'bold', color: COLORS.primary}}>DONE</Text>
      );
      
      const Skip = ({ isLight, skipLabel, ...props }) => (
        <Text {...props} style={{marginLeft: 15, fontSize: 20, fontWeight: 'bold', color: COLORS.secondary}}>SKIP</Text>
      );
      
      const Next = ({ isLight, ...props }) => (
        <Text {...props} style={{marginRight: 15, fontSize: 20, fontWeight: 'bold', color: COLORS.primary}}>NEXT</Text>
      );

    return (
        <Onboarding
            bottomBarColor={'white'}
            DotComponent={Square}
            NextButtonComponent={Next}
            SkipButtonComponent={Skip}
            DoneButtonComponent={Done}
            imageContainerStyles={styles.img}
            titleStyles={styles.title}
            subTitleStyles={styles.subtitle}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: 'white',
                    image: <Image source={require('./assets/image1.png')} style={{marginTop: -40}}/>,
                    title: <Text style={{fontSize: 24, fontWeight: 500, marginTop: -40, color: '#3B414B'}}>Tìm đường nhanh chóng</Text>,
                },
                {
                    backgroundColor: 'white',
                    image: <Image source={require('./assets/image2.png')} />,
                    title: <Text style={{fontSize: 24, fontWeight: 500, marginTop: -20, color: '#3B414B'}}>Tra cứu chi tiết tuyến xe</Text>,
                    // subtitle: 'Run and earn healthy point to be outstanding in other runner',
                },
                {
                    backgroundColor: 'white',
                    image: <Image source={require('./assets/image3.png')} />,
                    title: <Text style={{fontSize: 24, fontWeight: 500, marginTop: -10, color: '#3B414B'}}>Đặt vé đơn giản</Text>,
                    // subtitle: 'Integrated maps and running route enhance your team experience',
                },
            ]}

        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -40,
    },
    subtitle: {
        fontSize: 15,
        marginTop: 0,
        maxWidth:"60%",
        textAlign: 'center',
        lineHeight: 23,
    },
    img: {
        marginTop: -50
    }
});