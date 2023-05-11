import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Paywall'
>;

const Paywall = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView className="bg-[#1A2F44] flex-1">
      <View className="m-10 space-y-2">
        <Text className="text-2xl text-center uppercase text-white font-bold">
          upgrade
        </Text>
        <Text className="text-center text-white">
          Upgrade to Pro to Access all the Features
        </Text>
      </View>
      <TouchableOpacity>
        <Icon
          name="md-close-sharp"
          size={32}
          color="#E5962D"
          onPress={navigation.goBack}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Paywall;
