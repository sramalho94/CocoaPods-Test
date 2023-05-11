import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';
import ActionRow from '../components/ActionRow';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Pro or Upgrade Button */}
        <TouchableOpacity
          className="absolute z-50 top-5 right-10 items-center"
          onPress={() => navigation.navigate('Paywall')}>
          <Icon name="person-circle" size={30} color="#E5962D" />
          <Text className="text-center font-bold text-papa-orange">
            PRO/UPGRADE
          </Text>
        </TouchableOpacity>
        {/* Image */}
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2022/07/17/19/15/gym-7328168_1280.png',
          }}
          className="w-full h-64 "
        />

        {/* ActionRows */}
        <View className="mx-5">
          <View className="flex-row  justify-between space-x-2">
            <ActionRow
              title="Track Workout"
              screen="Demo"
              color="#E5962D"
              icon="fitness"
              vertical
            />
            <ActionRow
              title="Browse Workouts"
              screen="Demo"
              color="#1982c4"
              icon="library"
              vertical
            />
          </View>
          <ActionRow
            title="Connect With Friends"
            screen="Demo"
            color="#F44174"
            icon="share-social"
          />
          <ActionRow
            title="Add an Exercise"
            screen="Demo"
            color="#8Ac926"
            icon="add-circle"
            requiresPro
          />
          <ActionRow
            title="Create A Routine"
            screen="Demo"
            color="#c03221"
            icon="md-time"
            requiresPro
          />
          <ActionRow
            title="Join Challenges"
            screen="Demo"
            color="#23967F"
            icon="trophy"
            requiresPro
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
