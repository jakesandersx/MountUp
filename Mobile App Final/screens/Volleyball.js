import React from "react";
import { Text, Image, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ArticlePreview from "../components/ArticlePreview";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Volleyball({ navigation }) {
    const article = [
        { title: "Mount Wins HCAC Title", sport: "Volleyball", image: require("../images/volleyballcelebrate.png"), date: "" },
        { title: "Mount earns 4 HCAC Honors", sport: "Volleyball", image: require("../images/volleyballHCAC.png"), date: "" },
        { title: "Example Article", sport: "Volleyball", image: require("../images/msjLogo.png"), date: "" },
        { title: "Example Article", sport: "Volleyball", image: require("../images/msjLogo.png"), date: "" }
    ];

    return (
        <FlatList style={homeStyles.container} data={article} renderItem={({ item }) => (
                <ArticlePreview title={item.title} sport={item.sport} image={item.image} date={item.date} navigation={navigation}
                />
            )}
            ListHeaderComponent={
                <ImageBackground source={require("../images/msjLogo.png")} style={homeStyles.hero}>
                    <LinearGradient colors={["transparent", "#000"]} style={homeStyles.heroGradient}>
                        <Image source={require("../images/heroLogo.png")} style={{ width: 50, height: 50 }} />
                        <Text style={homeStyles.heroText}>Volleyball</Text>
                    </LinearGradient>
                </ImageBackground>
            }
        />
    );
}

const homeStyles = StyleSheet.create({
    container: {
        backgroundColor: "#003366"
    },
    hero: {
        width: "100%",
        height: 300,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: "#FFCC00",
        marginBottom: 30
    },
    heroGradient: {
        width: "100%",
        height: "100%",
        padding: 10,
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 20
    },
    heroText: {
        color: "#fff",
        fontSize: 40,
        fontWeight: "bold",
    }
});

export default Volleyball;
