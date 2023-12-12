import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

function RosterHeader({onSort}){
    return (
        <View style={rosterHeaderStyles.container}>
            <TouchableOpacity onPress={() => onSort("number")} style={rosterHeaderStyles.button}><Text style={rosterHeaderStyles.buttonText}>By Number</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => onSort("name")} style={rosterHeaderStyles.button}><Text style={rosterHeaderStyles.buttonText}>By Name</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => onSort("position")} style={rosterHeaderStyles.button}><Text style={rosterHeaderStyles.buttonText}>By Position</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => onSort("coaches")} style={rosterHeaderStyles.button}><Text style={rosterHeaderStyles.buttonText}>Coaches</Text></TouchableOpacity>
        </View>
    )
}

const rosterHeaderStyles = StyleSheet.create({
    container: {
        backgroundColor: "#FFCC00",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 8,
        paddingHorizontal: 3,
        gap: 5
    },
    button: {
        width: "25%",
        height: 40,
        justifyContent: "center",
        backgroundColor: "#003366",
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15,
        padding: 3
    }
})

export default RosterHeader;