import { View, Text, FlatList } from "react-native";
import React from "react";

const FlatlistDemo = () => {
  const people = [
    { name: "Uwabera Virginie", id: 1 },
    { name: "Niyigena Marie Merci", id: 2 },
    { name: "Umuhire Pacifique", id: 3 },
    { name: "Mutuyimana Marie France", id: 4 },
    { name: "Irasubiza Noella", id: 5 },
    { name: "Rubuto Yvan", id: 6 },
  ];

  return (
    <View className="justify-center items-center pt-32">
      <FlatList
        className="flex"
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <View className="bg-gray-600 mb-5 p-3 rounded-2xl">
            <Text className="text-white text-2xl">
              {item.id} {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default FlatlistDemo;
