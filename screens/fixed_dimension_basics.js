import React from "react";
import { View } from "react-native";

// Props width dan height dalam style adalah menentukan lebar atau panjang dari sebuah element.

const FixedDimensionsBasics = () => {
  return (
      <View>
        <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: "powderblue",
            }}
        />
        <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: "skyblue",
            }}
        />
        <View
            style={{
              width: 150,
              height: 150,
              backgroundColor: "steelblue",
            }}
        />
      </View>
  );
};

export default FixedDimensionsBasics;
