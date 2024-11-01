import { router, Stack } from "expo-router";
import { View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
export default function MessageHeader({ item }) {
  const router = useRouter();

  return (
    <Stack.Screen
      options={{
        headerShown: true,
        headerTitle: "",
        headerShadowVisible: false,
        headerLeft: () => (
          <View
            style={{
              height: 50,
              flexDirection: "row",
              alignItems: "center",
              gap: 40,
            }}
          >
            <Pressable
              onPress={() => {
                router.back();
              }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </Pressable>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderWidth: 2,
                  borderRadius: 30,
                  backgroundColor: "black",
                }}
              />
              <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
                {item?.username}
              </Text>
            </View>
          </View>
        ),
        headerRight: () => (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 30 }}>
            <Pressable>
              <Entypo name="phone" size={24} color="black" />
            </Pressable>
            <Pressable>
              <FontAwesome name="video-camera" size={24} color="black" />
            </Pressable>
          </View>
        ),
      }}
    />
  );
}
