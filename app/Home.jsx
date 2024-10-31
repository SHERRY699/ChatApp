import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import ChatList from "../components/Chatlist";
export default function Home() {
  return (
    <View>
      <View style={styles.header}>
        <Text
          style={{ fontFamily: "outfit-bold", fontSize: 30, color: "white" }}
        >
          Chats
        </Text>
        <View
          style={{
            width: 40,
            height: 40,
            borderWidth: 2,
            borderRadius: 30,
            backgroundColor: "black",
          }}
        />
      </View>
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 140,
    backgroundColor: Colors.btn,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
