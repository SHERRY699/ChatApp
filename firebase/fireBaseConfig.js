import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_K62q91CRHTJ2OJ29LTcdB7Z6UC0rX1A",
  authDomain: "chat-app-df0ab.firebaseapp.com",
  projectId: "chat-app-df0ab",
  storageBucket: "chat-app-df0ab.appspot.com",
  messagingSenderId: "615878890101",
  appId: "1:615878890101:web:5775d87c2eb26224459e3c",
  measurementId: "G-2TX5YHP9HN",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
