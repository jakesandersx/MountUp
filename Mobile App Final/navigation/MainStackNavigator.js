import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";

import Login from "../screens/Login";
import Register from "../screens/Register";
import Settings from "../screens/Settings";
import DrawerNavigator from "./DrawerNavigator";
import AllTeams from "../screens/AllTeams";
import Article from "../screens/Article";

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        height: 100,
        backgroundColor: "#003366",
        borderBottomWidth: 2,
        borderBottomColor: "#FFCC00"
      },
      headerTitle: () => <Image source={require("../images/msj_logo.png")} />,
      headerTitleAlign: "center",
      headerBackTitleStyle: {
        color:"#FFCC00"
      }
    }}>
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen options={{headerShown: false, gestureEnabled: false}} name="App" component={DrawerNavigator} />
      <Stack.Screen name="Article" component={Article} />
      <Stack.Screen name="All Teams" component={AllTeams} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}