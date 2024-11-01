import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

const MessageBox = ({ item }) => {
  const router = useRouter();
  function handleMessage() {
    router.push({ pathname: "/Message", params: item });
  }

  return (
    <TouchableOpacity onPress={handleMessage} style={styles.message}>
      <View style={{ flexDirection: "row", gap: 4 }}>
        <View
          style={{
            width: 40,
            height: 40,
            borderWidth: 2,
            borderRadius: 30,
            backgroundColor: "black",
          }}
        />
        <View>
          <Text style={{ fontFamily: "outfit", fontSize: 20 }}>
            {item?.username}
          </Text>
          <Text style={{ color: "gray" }}>Message</Text>
        </View>
      </View>

      <Text>Time</Text>
    </TouchableOpacity>
  );
};

export default function ChatList({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return <MessageBox item={item} />;
      }}
    />
  );
}

const styles = StyleSheet.create({
  message: {
    width: "100%",
    height: 80,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
  },
});
