import { Image, StyleSheet } from "react-native";
import {FontAwesome, Entypo} from 'react-native-vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from "@react-navigation/native";

import DrawerContent from "./DrawerContent";
import BottomTabNavigator from "./MainTabNavigator";
import SportTab from './SportTabNavigator';
import SettingsButton from "../components/SettingsButton";
import HamburgerIcon from "../components/HamburgerIcon";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const navigation = useNavigation();

  function settings(){
    navigation.navigate("Settings");
  }

  // Pull from redux after user login
  const following = [
    {sport: "Basketball"},
    {sport: "Baseball"},
    {sport: "Football"}
  ]

  return (
    <Drawer.Navigator id="LeftDrawer" drawerContent={(props, rootNavigator) => <DrawerContent {...props} rootNavigator={rootNavigator}/>} screenOptions={({navigation})=>(
      {
        headerStyle: {
          height: 100,
          backgroundColor: "#003366",
          borderBottomWidth: 2,
          borderBottomColor: "#FFCC00"
        },
        headerTitle: () => <Image source={require("../images/msj_logo.png")} style={drawerStyles.logo}/>,
        headerTitleAlign: "center",
        headerRight: () => <SettingsButton onClick={settings}/>,
        headerRightContainerStyle: {
          paddingRight: 10,
        },
        headerLeft: () => <HamburgerIcon navigation={navigation}/>,
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
        drawerStyle: {
          backgroundColor: "#005599",
          paddingTop: 0,
          marginTop: 0
        },
        drawerLabelStyle: {
          color: "#fff",
          fontSize: 20
        },
      })}>
        <Drawer.Screen options={{drawerItemStyle: drawerStyles.drawerItems, title:"Home", drawerIcon: ()=>(<Entypo name={'home'} size={34} color={'#FFCC00'}/>)}} name="HomeTabs" component={BottomTabNavigator} />
        {following ? following.map((sport) => (
          <Drawer.Screen key={sport} options={{drawerItemStyle: [drawerStyles.drawerItems, drawerStyles.gray], drawerIcon: ()=> (<FontAwesome name={"star-o"} size={34} color={'#FFCC00'} />)}} name={`${sport.sport}`} component={SportTab} initialParams={{sport}}/>
        )) : null}
    </Drawer.Navigator>
  );
}

const drawerStyles = StyleSheet.create({
  drawerItems: {
    width:"100%",
    marginVertical: 0,
    marginHorizontal: 0,
    borderColor: "#000",
    borderWidth: 2,
  },
  logo: {
    height:"100%"
  },
  gray: {
    backgroundColor: "#959595"
  }
})

export default DrawerNavigator;