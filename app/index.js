import{View,Text,ScrollView,SafeAreaView} from 'react-native';
import { useState } from 'react';
import {Stack,useRouter} from 'expo-router'

import { COLORS,icons,images,SIZES } from '../constants';
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components'

const Home = () => {

    const router = useRouter();

    return (
        <View>
           <Text>Hello</Text>
        </View>
    )
}

export default Home;