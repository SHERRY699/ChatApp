import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import ChatList from "../components/Chatlist";
import { onAuthStateChanged } from "firebase/auth";
import { auth, userRef } from "../firebase/fireBaseConfig";
import { getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Home() {
  const [Data, setData] = useState();
  const getUser = () => {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user.uid);
        } else {
          reject("User not logged in");
        }
      });
    });
  };

  const getUserData = async () => {
    try {
      const uid = await getUser(); // Wait for uid to be resolved
      const q = query(userRef, where("uid", "!=", uid)); // Filter out the current user
      const querySnapshot = await getDocs(q); // Retrieve the documents matching the query
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data() });
      });

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

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
      <ChatList data={Data} />
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
