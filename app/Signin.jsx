import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ToastAndroid,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "../constants/Colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/fireBaseConfig";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        ToastAndroid.show("Login SuccessFull ", ToastAndroid.BOTTOM);
        router.push("/Home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        ToastAndroid.show(errorMessage, ToastAndroid.BOTTOM);
      });
  };

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
          source={require("../assets/images/login.png")}
          style={{ height: 300, width: 300 }}
          //   resizeMethod="contain"
        />
      </View>
      <View style={styles.container}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>Sign In</Text>
        <View style={styles.input}>
          <Fontisto name="email" size={24} color="gray" />
          <TextInput
            onChangeText={(value) => {
              setEmail(value);
            }}
            value={email}
            placeholder="Email Address"
            style={{ color: "gray" }}
          />
        </View>
        <View style={styles.input}>
          <Feather name="lock" size={24} color="gray" />
          <TextInput
            placeholder="Password"
            style={{ color: "gray" }}
            secureTextEntry={true}
            onChangeText={(value) => {
              setPassword(value);
            }}
            value={password}
          />
        </View>
        <Text style={{ textAlign: "right" }}>Forgot Password?</Text>
        <Pressable onPress={handleSignIn} style={styles.btn}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit-bold",
              color: "white",
              fontSize: 20,
            }}
          >
            Sign In
          </Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/Register")}
          style={{ flexDirection: "row", gap: 3 }}
        >
          <Text style={{ fontFamily: "outfit" }}>Don't Have An Account?</Text>
          <Text style={{ fontFamily: "outfit", color: Colors.btn }}>
            Sign Up
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
