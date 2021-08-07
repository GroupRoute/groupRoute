import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import firebase from "firebase/app";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDwcw9VuuzMKtKHtq7NwYnHTPhTzVXQi_Q",
  authDomain: "grouproute-investin.firebaseapp.com",
  databaseURL: "https://grouproute-investin-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "grouproute-investin",
  storageBucket: "grouproute-investin.appspot.com",
  messagingSenderId: "667536391661",
  appId: "1:667536391661:web:0f74dd9bcd883969bbbbe4",
  measurementId: "G-V31GQC18WL"
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
