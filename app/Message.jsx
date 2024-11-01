import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import MessageHeader from "../components/MessagesHeader";

export default function Message() {
  const item = useLocalSearchParams();
  return (
    <View>
      <MessageHeader item={item} />
    </View>
  );
}
