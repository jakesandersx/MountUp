import { Text, Image, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ArticlePreview from "../components/ArticlePreview";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useAllArticles } from "../hooks/articleHook";
import { useState } from "react";

function Home({ navigation }){
    const {data} = useAllArticles();
    
    return(
        <FlatList style={homeStyles.container} data={data} extraData={data} keyExtractor={item => item._id} renderItem={({item}) => (
             <ArticlePreview id={item._id} title={item.title} sport={item.sport} date={item.date} navigation={navigation}/>
        )} ListHeaderComponent={
        <ImageBackground source={require("../images/msj_logo.png")} style={homeStyles.hero}>
            <LinearGradient colors={["transparent", "#000"]} style={homeStyles.heroGradient}>
                <Image source={require("../images/hero_logo.png")}/>
                <Text style={homeStyles.heroText}>MSJ Lions</Text>
            </LinearGradient>
        </ImageBackground>}/>
    );
}

const homeStyles = StyleSheet.create({
    container: {
        backgroundColor: "#003366"
    },
    hero: {
        width: "100%",
        height: 300,
        borderBottomWidth: 3,
        borderBottomColor: "#FFCC00",
        marginBottom: 30
    },
    heroGradient: {
        width:"100%",
        height:"100%",
        padding:10,
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 20
    },
    heroText: {
        color:"#fff",
        fontSize: 40,
        fontWeight: "bold",
    }
})

export default Home;