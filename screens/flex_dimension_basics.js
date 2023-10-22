import React from "react";
import { View } from "react-native";
// Dalam contoh berikut, tampilan powderblue, skyblue, dan steelblue semuanya adalah anak-anak dalam tampilan kontainer yang memiliki flex: 1. Tampilan powderblue menggunakan flex: 1, tampilan skyblue menggunakan flex: 2, dan tampilan steelblue menggunakan flex: 3. 1+2+3 = 6, yang berarti tampilan powderblue akan mendapatkan 1/6 dari ruang yang tersedia, tampilan skyblue mendapatkan 2/6 dari ruang, dan tampilan steelblue mendapatkan 3/6 dari ruang.
const FlexDimensionsBasics = () => {
  return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "powderblue" }} />
        <View style={{ flex: 2, backgroundColor: "skyblue" }} />
        <View style={{ flex: 3, backgroundColor: "steelblue" }} />
      </View>
  );
};

export default FlexDimensionsBasics;
