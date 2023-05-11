import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {RootStackParamList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Demo'
>;
const DemoScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="bg-papa-orange flex-1">
      <TouchableOpacity
        className="flex-row items-center p-5"
        onPress={navigation.goBack}>
        <Icon name="arrow-back" size={50} color="white" />
        <Text className="text-white">Go Back</Text>
      </TouchableOpacity>
      <View className="flex-1 items-center justify-center px-10">
        <Text className="text-white text-2xl front-extrabold">Hooray!</Text>
        <Text className="text-white text-2xl font-extrabold mb-20">
          You have access to this feature
        </Text>
        <Icon name="build-outline" size={200} color="white" />
        <View className="-mt-16 -pl-8">
          <Icon name="checkmark-circle-sharp" size={60} color="#96F550" />
        </View>
        <Text className="text-white mt-10 flex-1 font-bold text-center">
          This is where you create a new screen & change the rest of the app so
          the navigation is as follows: navigation.navigate('ThePageYouWant')
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DemoScreen;
