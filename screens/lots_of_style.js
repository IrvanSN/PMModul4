import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Menggambarkan cara menggabungkan 2 object style. Jika ada property yang sama di dalam 2 object style tsb maka yang akan dipakai adalah object yang paling terakhir

const LotsOfStyles = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});

export default LotsOfStyles;
