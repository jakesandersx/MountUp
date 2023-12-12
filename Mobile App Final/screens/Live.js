import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Link } from "@react-navigation/native";
import { Linking } from "react-native";

function Live({ navigation }) {
  const data = [
    {
      id: '1',
      type: 'live',
      title: 'Live Game',
      thumbnail: require('../images/logo.png'),
      description: '... vs. ...',
    },
    {
      id: '2',
      type: 'previous',
      title: 'Previous Broadcast ',
      thumbnail: require('../images/logo.png'),
      description: "Women's Basketball vs. Manchester",
      videoUrl: 'https://www.youtube.com/watch?v=eFNyJZhSiZA',
    }
  ];

  

  const renderLiveItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        <Link to={item.url} />
      }}
    >
      <View style={styles.rowContainer}>
        <View style={styles.thumbnailContainer}>
          <Image style={styles.thumbnail} source={item.thumbnail} />
          <Text style={styles.goLions}>Go Lions!</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  

  const renderPreviousItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={async() => {
          await Linking.openURL(item.videoUrl)
      }}
    >
      <View style={styles.rowContainer}>
        <View style={styles.thumbnailContainer}>
          <Image style={styles.thumbnail} source={item.thumbnail} />
          <Text style={styles.goLions}>Go Lions!</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const keyExtractor = (item) => item.id;

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({ item }) => (item.type === 'live' ? renderLiveItem({ item }) : renderPreviousItem({ item }))}
      keyExtractor={keyExtractor}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#003366',
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  thumbnailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 80,
    height: 80,
  },
  goLions: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 8,
  },
  textContainer: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: '#ccc',
    fontSize: 14,
  },
});

export default Live;
