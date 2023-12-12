import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {Ionicons} from 'react-native-vector-icons';

export default function QRCodeButton({navigation}){
    function onClick(){
        navigation.navigate('QRCode');
    }

    return(
        <View containerStyle={buttonStyles.outerBubble}>
            <TouchableOpacity containerStyle={buttonStyles.buttonQR} onPress={() => onClick()}>
                <Ionicons name="qrcode" size={30} color={"#003366"}/>
            </TouchableOpacity>
        </View>
    )
};

const buttonStyles = StyleSheet.create({
    outerBubble: {
        backgroundColor: "#003366",
        borderRadius: 30, // Adjust the value to change the roundness of the bubble
        padding: 10,
        elevation: 3, // For Android shadow
        shadowColor: "#000", // For iOS shadow
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonQR: {
        backgroundColor: "#FFCC00"
    },
});
