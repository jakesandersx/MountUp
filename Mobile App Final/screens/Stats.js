// IndividualSportHome.js
import { View, Text } from "react-native";
import Baseball from "./Stats/Baseball";
import Football from "./Stats/Football";
import Basketball from "./Stats/Basketball";
import Volleyball from "./Stats/Volleyball";

function IndividualStatsHome({ route }) {
    const sport = route.params;
    const name = sport.sport;

    let statsView;

    if (name === "Basketball") {
        statsView = <Basketball />;
    } else if (name === "Baseball") {
        statsView = <Baseball />;
    } else if (name === "Football") {
        statsView = <Football />;
    } else if (name === "Volleyball") {
        statsView = <Volleyball />;
    } else {
        statsView = <Text>No view available for {name}</Text>;
    }

    return (
        <View>
            {statsView}
        </View>
    );
}

export default IndividualStatsHome;
