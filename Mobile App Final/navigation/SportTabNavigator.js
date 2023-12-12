import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {FontAwesome, Entypo} from 'react-native-vector-icons';

import Schedule from "../screens/Schedule";
import Stats from "../screens/Stats";
import Roster from "../screens/Roster";
import IndividualSportHome from "../screens/IndividualSportHome";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ route }) => {
  const {sport} = route.params;
  const name = sport.sport;

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
          title: name
        }} name={name + " Home"} component={IndividualSportHome} initialParams={{sport: name}} />
      <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={'group'}
              size={34}
              color={focused ? '#003366' : '#003366'}
            />
          ),
        }} name="Roster" component={Roster} initialParams={{sport: name}} />
      <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={'calendar'}
              size={34}
              color={focused ? '#003366' : '#003366'}
            />
          ),
        }} name="Schedule" component={Schedule} initialParams={{sport: name}} />
      <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={'bar-chart'}
              size={34}
              color={focused ? '#003366' : '#003366'}
            />
          ),
        }} name="Stats" component={Stats} initialParams={{sport: name}} />
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;