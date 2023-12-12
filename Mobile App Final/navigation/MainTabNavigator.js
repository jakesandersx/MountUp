import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {FontAwesome, Entypo} from 'react-native-vector-icons';

import Schedule from "../screens/Schedule";
import Following from "../screens/Following";
import LiveGames from "../screens/LiveGames";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        height:60,
        backgroundColor: "#FFCC00",
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: 500,
        color: "#003366"
      },
      headerShown: false
    }}>
      <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name={'home'}
              size={34}
              color={focused ? '#003366' : '#003366'}
            />
          ),
          title: "Home",
        }} name="HomeStack" component={Home} />
      <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={'group'}
              size={34}
              color={focused ? '#003366' : '#003366'}
            />
          ),
        }} name="Following" component={Following} />
      <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={'calendar'}
              size={34}
              color={focused ? '#003366' : '#003366'}
            />
          ),
        }} name="Schedule" component={Schedule} />
      <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={'video-camera'}
              size={34}
              color={focused ? '#003366' : '#003366'}
            />
          ),
        }} name="Live Games" component={LiveGames} />
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;