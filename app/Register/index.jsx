import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      {/* Image */}
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: hp(30),
        }}
      >
        <Image
          source={require("../../assets/images/register.png")}
          style={{ height: 300, width: 300 }}
        />
      </View>
      <View style={styles.container}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>Sign Up</Text>
        <View style={styles.input}>
          <AntDesign name="user" size={24} color="gray" />
          <TextInput placeholder="Username" style={{ color: "gray" }} />
        </View>
        <View style={styles.input}>
          <Feather name="lock" size={24} color="gray" />
          <TextInput
            placeholder="Password"
            style={{ color: "gray" }}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.input}>
          <Feather name="lock" size={24} color="gray" />
          <TextInput
            placeholder="Password"
            style={{ color: "gray" }}
            secureTextEntry={true}
          />
        </View>

        <Pressable style={styles.btn}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit-bold",
              color: "white",
              fontSize: 20,
            }}
          >
            Sign Up
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            router.push("/Signin");
          }}
          style={{ flexDirection: "row", gap: 3 }}
        >
          <Text style={{ fontFamily: "outfit" }}>Already Have An Account?</Text>
          <Text style={{ fontFamily: "outfit", color: Colors.btn }}>
            Sign In
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "column",
    width: wp(100),
    gap: 20,
    marginTop: 30,
  },
  input: {
    paddingHorizontal: 10,
    backgroundColor: Colors.input,
    width: wp(80),
    height: hp(7),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderRadius: 10,
  },
  btn: {
    width: wp(80),
    height: hp(5),
    borderRadius: 20,
    backgroundColor: Colors.btn,
    justifyContent: "center",
  },
});
