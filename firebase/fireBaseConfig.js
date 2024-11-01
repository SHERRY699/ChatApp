import { initializeApp, getApp, getApps } from "firebase/app"; // Update imports
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { collection, getFirestore } from "firebase/firestore";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyD_K62q91CRHTJ2OJ29LTcdB7Z6UC0rX1A",
  authDomain: "chat-app-df0ab.firebaseapp.com",
  projectId: "chat-app-df0ab",
  storageBucket: "chat-app-df0ab.appspot.com",
  messagingSenderId: "615878890101",
  appId: "1:615878890101:web:5775d87c2eb26224459e3c",
  measurementId: "G-2TX5YHP9HN",
};

// Initialize Firebase App
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Authentication with persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Initialize Firestore
export const db = getFirestore(app);
export const userRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
