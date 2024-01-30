import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const github = <Icon name={"github"} size={30} color={"#239089"} />;
const facebook = <Icon name={"twitch"} size={30} color={"#239089"} />;
const youtube = <Icon name={"youtube"} size={30} color={"#239089"} />;
const reddit = <Icon name={"reddit"} size={30} color={"#239089"} />;
const linkedin = <Icon name={"linkedin"} size={30} color={"#239089"} />;
const ProfileCard = () => {
  const user = {
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLJ7VTbiIg1YruUZuc1ULpSa9CRZqUQd85VdLQTRZNZ0g=s504-c-no",
    coverPhoto:
      "https://fineboosting.com/wp-content/uploads/2021/05/icebox-map.jpg",
    name: "Francisco Mañay",
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />
      <View style={styles.avatarContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback
          style={{ color: "black" }}
          onPress={() => {
            Linking.openURL("https://www.twitch.tv/frxnzizko01");
          }}
        >
          {facebook}
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          style={{ color: "blue" }}
          onPress={() => {
            Linking.openURL("https://github.com/Frxnzizko");
          }}
        >
          {github}
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          style={{ color: "blue" }}
          onPress={() => {
            Linking.openURL("https://www.youtube.com/@FrXnCiSkO1");
          }}
        >
          {youtube}
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => Linking.openURL("https://www.reddit.com/user/fx7854")}
        >
          {reddit}
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/francisco-xavier-1692b428b/"
            )
          }
        >
          {linkedin}
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",

    alignItems: "center", //flex y grid
  },
  coverPhoto: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: -75,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 10,
    borderColor: "black",
  },
  name: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    width: "60%",
    justifyContent: "space-between",
  },
});
export default ProfileCard;
