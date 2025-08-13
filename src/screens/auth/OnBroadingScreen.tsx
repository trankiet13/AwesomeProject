import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import { appInfo } from '../../constants/appinfor';
import { globalStyles } from '../../styles/globalStyles';
import { appColors } from '../../constants/appColors';
import { TextComponent } from '../../components';
import { fontFamilies } from '../../constants/fontFamilies';

const OnBroadingScreen = ({ navigation }: any) => {
  const [index, setIndex] = useState(0);
  return (
    <View style={[globalStyles.container]}>
      <Swiper
        style={[]}
        loop={false}
        onIndexChanged={num => setIndex(num)}
        activeDotColor={appColors.white}
        index={index}
      >
        <Image
          source={require('../../assets/images/onboarding-1.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'cover',
          }}
        ></Image>
        <Image
          source={require('../../assets/images/onboarding-2.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'cover',
          }}
        ></Image>
        <Image
          source={require('../../assets/images/onboarding-3.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'cover',
          }}
        ></Image>
      </Swiper>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 20,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.text}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')
          }
        >
          <TextComponent
            text="Next"
            color={appColors.white}
            font={fontFamilies.medium}
          ></TextComponent>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBroadingScreen;

const styles = StyleSheet.create({
  text: {
    color: appColors.white,
    fontSize: 16,
    fontWeight: '500',
  },
});
