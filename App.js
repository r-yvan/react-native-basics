import HelloWorld from "./components/HelloWorld";
import FlatlistDemo from "./components/FlatlistDemo";
import React, { useState } from "react";
import { View } from "react-native";

const App = () => {
  return (
    <View className="flex h-full justify-center items-center bg-grey-1 pt-28">
      <HelloWorld />
      <FlatlistDemo />
    </View>
  );
};

export default App;
