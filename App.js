import HelloWorld from "./components/HelloWorld";
import FlatlistDemo from "./components/FlatlistDemo";
import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import AlertDemo from "./components/AlertDemo";

const App = () => {
  return (
    <SafeAreaView className="flex flex-1 items-center bg-grey-1 pt-10">
      <HelloWorld />
      <FlatlistDemo />
      <AlertDemo />
    </SafeAreaView>
  );
};

export default App;
