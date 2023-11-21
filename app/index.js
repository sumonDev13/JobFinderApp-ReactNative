import{View,Text,ScrollView,SafeAreaView} from 'react-native';
import { useState } from 'react';
import {Stack,useRouter} from 'expo-router'

import { COLORS,icons,images,SIZES } from '../constants';
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components'

const Home = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.green }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.green },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={icons.profile} dimension='100%' />
            ),
            headerTitle: "",
          }}
        />
  
      </SafeAreaView>
    )
}

export default Home;