import { useFocusEffect } from "@react-navigation/native";
import { ScrollView, View, Text, Image, StyleSheet, Linking } from "react-native";
import { useSingleArticle } from "../hooks/articleHook";

function Article({ route }){
    const {articleId} = route.params;
    const {data} = useSingleArticle(articleId);

    return(
        <ScrollView contentContainerStyle={articleStyles.container}>
            <View style={articleStyles.header}>
                <Image source={require("../images/msj_logo.png")} style={articleStyles.image}/>
                <Text style={articleStyles.title}>{data.title}</Text>
            </View>
            <View>
                <Text>Written by {data.author}</Text>
                {/* {data.links.map((link) => (
                    <Text key={link.label} onPress={async () => await Linking.openURL(`${link.link}`)}>{link.label}</Text>
                ))} */}
                <Text onPress={async ()=> await Linking.openURL("https://msjlions.com/staff-directory")}>Box Score</Text>
            </View>
            <View>
                <Text style={articleStyles.content}>{data.body}</Text>
            </View>
        </ScrollView>
    );
}

const articleStyles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    header: {
        width: "100%",
        backgroundColor: '#f1f1f1',
    },
    image:{
        width:"100%",
        height: 300
    },
    title: {
        fontSize: 25,
        padding:10,
        backgroundColor: "#003366",
        color:"#fff",
        fontWeight: "bold"
    },
    content: {
        flex: 1,
        padding:10,
        fontFamily: "Roboto",
        fontSize: 15,
        lineHeight: 30
    },
    links: {
        color:"#FFCC00"
    }
  });

export default Article;