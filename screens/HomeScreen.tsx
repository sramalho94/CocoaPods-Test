import {Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView>
      {/* Pro or Upgrade Button */}
      <TouchableOpacity className="absolute z-50 top-5 right-10 items-center">
        <Icon name="person-circle" size={30} color="#E5962D" />
        <Text className="text-center font-bold text-papa-orange">
          PRO/UPGRADE
        </Text>
      </TouchableOpacity>

      <Text>Hello World</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
