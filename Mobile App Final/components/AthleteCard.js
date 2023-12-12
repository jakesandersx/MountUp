import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from 'react-native-vector-icons';

function AthleteCard({name, number, position, from}){
    return (
        <View style={athleteStyles.card}>
            <View style={athleteStyles.iconContainer}>
                <Ionicons style={athleteStyles.icon} name="person" color="#fff" size={40} />
                <Text style={[athleteStyles.text,athleteStyles.number]}>{number}</Text>
            </View>
            <View>
                <Text style={athleteStyles.text}>{name}</Text>
                <Text style={athleteStyles.text}>{position}</Text>
                <Text style={athleteStyles.text}>{from}</Text>
            </View>
        </View>
    )
}

const athleteStyles = StyleSheet.create({
    card: {
        backgroundColor: "#003366",
        borderBottomWidth: 2,
        borderBottomColor: "#FFCC00",
        flexDirection: "row",
        padding: 5
    },
    iconContainer: {
        width: "25%",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        padding: 10,
        marginRight: 5
    },
    icon: {
        marginRight: 10
    },
    number: {
        fontSize: 20
    },
    text: {
        color:"#fff",
        fontSize: 17,
        fontWeight: "bold",
    }
})

export default AthleteCard;
