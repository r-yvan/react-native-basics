import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import FlatlistDemo from "./components/FlatlistDemo";

export default function App() {
  const [name, setName] = useState("Rubuto Yvan");

  return (
    <View className="flex h-full justify-center items-center bg-gray-900">
      <FlatlistDemo />
      <Text>My Name is {name}</Text>
      <View className="pt-10">
        <Button title="Update State" onPress={() => setName("Noella")} />
      </View>
    </View>
  );
}
