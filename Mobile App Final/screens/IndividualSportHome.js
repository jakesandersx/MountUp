// IndividualSportHome.js
import { View, Text } from "react-native";
import Baseball from "./Baseball";
import Football from "./Football";
import Volleyball from "./Volleyball";
import Basketball from "./Basketball";

function IndividualSportHome({ route }) {
    const sport = route.params;
    const name = sport.sport;

    let sportView;

    if (name === "Basketball") {
        sportView = <Basketball />;
    } else if (name === "Baseball") {
        sportView = <Baseball />;
    } else if (name === "Football") {
        sportView = <Football />;
    } else if (name === "Volleyball") {
        sportView = <Volleyball />;
    } else {
        sportView = <Text>No view available for {name}</Text>;
    }

    return (
        <View>
            {sportView}
        </View>
    );
}

export default IndividualSportHome;
