import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

// resizeMode adalah prop dalam React Native yang digunakan untuk menentukan bagaimana gambar akan diubah ukurannya jika ukuran bingkai tampilan tidak cocok dengan ukuran gambar aslinya.
// "cover": Gambar akan diubah ukurannya secara seragam (mempertahankan rasio aspek gambar) sehingga setidaknya satu dimensi gambar akan sama atau lebih besar dari dimensi yang sesuai dalam tampilan (dikurangi oleh padding).
// "contain": Gambar akan diubah ukurannya secara seragam (mempertahankan rasio aspek gambar) sehingga kedua dimensi (lebar dan tinggi) gambar akan sama atau lebih kecil dari dimensi yang sesuai dalam tampilan (dikurangi oleh padding).
// "stretch": Lebar dan tinggi gambar akan diubah secara independen, ini bisa mengubah rasio aspek gambar sumber.
// "repeat": Gambar akan diulang untuk menutupi bingkai tampilan. Gambar akan mempertahankan ukuran dan rasio aspeknya, kecuali jika gambar lebih besar dari tampilan, dalam hal ini akan diubah ukurannya secara seragam sehingga muat dalam tampilan.
// "center": Gambar akan ditempatkan di tengah tampilan dalam kedua dimensi. Jika gambar lebih besar dari tampilan, gambar akan diubah ukurannya secara seragam sehingga muat dalam tampilan.

const DisplayAnImageWithStyle = () => {
  return (
      <View style={styles.container}>
        <View>
          <Image
              style={{
                resizeMode: "cover",
                height: 100,
                width: 200,
              }}
              source={require("../assets/images/js.png")}
          />
          <Text>resizeMode : cover</Text>
        </View>
        <View>
          <Image
              style={{
                resizeMode: "contain",
                height: 100,
                width: 200,
              }}
              source={require("../assets/images/js.png")}
          />
          <Text>resizeMode : contain</Text>
        </View>
        <View>
          <Image
              style={{
                resizeMode: "stretch",
                height: 100,
                width: 200,
              }}
              source={require("../assets/images/js.png")}
          />
          <Text>resizeMode : stretch</Text>
        </View>
        <View>
          <Image
              style={{
                resizeMode: "repeat",
                height: 100,
                width: 200,
              }}
              source={require("../assets/images/js.png")}
          />
          <Text>resizeMode : repeat</Text>
        </View>
        <View>
          <Image
              style={{
                resizeMode: "center",
                height: 100,
                width: 200,
              }}
              source={require("../assets/images/js.png")}
          />
          <Text>resizeMode : center</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
  },
});

export default DisplayAnImageWithStyle;
