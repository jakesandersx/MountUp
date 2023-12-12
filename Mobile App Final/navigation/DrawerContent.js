import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Linking } from "react-native";
import { FontAwesome, Entypo } from 'react-native-vector-icons';
import { View, Image, StyleSheet } from "react-native";
import HamburgerIcon from "../components/HamburgerIcon";

export default function DrawerContent(props){
    const data = [
        {title: "testDrawer"},
        {title: "testDrawer2"},
        {title: "testDrawer3"}
    ]

    return(
        <DrawerContentScrollView {...props} contentContainerStyle={contentStyles.container}> 
            <View style={contentStyles.header}>
                <Image source={require("../images/msj_logo.png")} />
                <HamburgerIcon navigation={props.navigation}/>
            </View>

            <DrawerItemList {...props} />
            
            <DrawerItem labelStyle={contentStyles.label} style={[contentStyles.container, contentStyles.gray]} icon={() => <FontAwesome name={'group'} size={34} color={'#FFCC00'}/>}label="All Teams" onPress={() => props.navigation.navigate("All Teams")} />
            <DrawerItem labelStyle={contentStyles.label} style={contentStyles.container} icon={() => <Entypo name={'link'} size={34} color={'#FFCC00'}/>} label="Staff Directory" onPress={async() => await Linking.openURL('https://msjlions.com/staff-directory')} />
            <DrawerItem labelStyle={contentStyles.label} style={contentStyles.container} icon={() => <Entypo name={'link'} size={34} color={'#FFCC00'}/>} label="Athletic Training" onPress={async() => await Linking.openURL('https://msjlions.com/sports/2020/12/9/information-sports-medicine-MSJ-AT-Landing')} />
            <DrawerItem labelStyle={contentStyles.label} style={contentStyles.container} icon={() => <Entypo name={'link'} size={34} color={'#FFCC00'}/>} label="Athletic Facilities" onPress={async() => await Linking.openURL('https://msjlions.com/facilities')} />
            <DrawerItem labelStyle={contentStyles.label} style={contentStyles.container} icon={() => <Entypo name={'link'} size={34} color={'#FFCC00'}/>} label="Hall of Fame" onPress={async() => await Linking.openURL('https://msjlions.com/sports/hof')} />
            <DrawerItem labelStyle={contentStyles.label} style={contentStyles.container} icon={() => <Entypo name={'link'} size={34} color={'#FFCC00'}/>} label="Roar Store" onPress={async() => await Linking.openURL('https://msjlions.com/facilities')} />
        </DrawerContentScrollView>
    )
}


const contentStyles = StyleSheet.create({
    container: {
        width:"100%",
        paddingTop: 0,
        marginHorizontal: 0,
        marginVertical: 0,
        backgroundColor: "#006ABE",
        borderColor: "#000",
        borderWidth: 2,
    },
    label: {
        fontSize: 20,
        color:"#fff",
        fontWeight: "bold"
    },
    header: {
        marginVertical: 0,
        marginHorizontal: 0,
        height:100,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: "#FFCC00",
        borderBottomWidth: 2
    },
    gray: {
        backgroundColor: "#959595"
    }
});
