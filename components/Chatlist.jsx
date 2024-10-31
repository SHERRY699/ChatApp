import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function ChatList() {
  return (
    <ScrollView>
      <TouchableOpacity style={styles.message}>
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
            <Text style={{ fontFamily: "outfit", fontSize: 20 }}>Sherry</Text>
            <Text style={{ color: "gray" }}>Message</Text>
          </View>
        </View>

        <Text>Time</Text>
      </TouchableOpacity>
    </ScrollView>
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
