import React from "react";
import { StyleSheet, View } from "react-native";

// Properti flex digunakan untuk mendefinisikan bagaimana elemen-elemen dalam tampilan akan "mengisi" ruang yang tersedia sepanjang sumbu utama. Ruang akan dibagi berdasarkan properti flex masing-masing elemen.
// Dalam contoh berikut, tampilan merah, oranye, dan hijau semuanya adalah anak-anak dalam tampilan kontainer yang memiliki flex: 1. Tampilan merah menggunakan flex: 1, tampilan oranye menggunakan flex: 2, dan tampilan hijau menggunakan flex: 3. 1+2+3 = 6, yang berarti tampilan merah akan mendapatkan 1/6 dari ruang yang tersedia, tampilan oranye mendapatkan 2/6 dari ruang, dan tampilan hijau mendapatkan 3/6 dari ruang.
// Dengan kata lain, tampilan oranye akan mendapatkan dua kali lipat dari ruang yang diberikan dibandingkan dengan tampilan merah, dan tampilan hijau akan mendapatkan tiga kali lipat. Ini membantu Anda mengendalikan seberapa besar setiap elemen tampilan dalam tata letak berdasarkan proporsi flex yang Anda tentukan.

const Flex = () => {
  return (
      <View style={[styles.container, { flexDirection: "column" }]}>
        <View style={{ flex: 1, backgroundColor: "red" }} />
        <View style={{ flex: 2, backgroundColor: "darkorange" }} />
        <View style={{ flex: 3, backgroundColor: "green" }} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;
