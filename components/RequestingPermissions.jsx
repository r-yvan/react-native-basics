import React from "react";
import * as ImagePicker from "expo-image-picker";
import { View, Text } from "react-native";

const RequestingPermissions = () => {
  const requestingPermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    console.log(result);
  };

  useEffect(() => {
    requestingPermission();
  }, []);
  return (
    <View>
      <Text>RequestingPermissions</Text>
    </View>
  );
};

export default RequestingPermissions;
