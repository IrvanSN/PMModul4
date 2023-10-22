import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

// alignItems adalah styling untuk mengkontrol element children
// "stretch": Ini adalah nilai default dari style alignItems. Jika diberikan width/height dengan nilai "auto" maka akan menyesuaikan lebar dari container yang diberikan
// "flex-start": Item di dalam container akan diletakkan kiri/atas tergantung flex-direction
// "flex-end": Item di dalam container akan diletakkan kanan/bawah tergantung flex-direction
// "center": Item di dalam container akan di tengah
// "baseline": Item di dalam container akan diletakkan sesuai garis dasar container
const AlignItemsLayout = () => {
  const [alignItems, setAlignItems] = useState("stretch");

  return (
      <PreviewLayout
          label="alignItems"
          selectedValue={alignItems}
          values={["stretch", "flex-start", "flex-end", "center", "baseline"]}
          setSelectedValue={setAlignItems}
      >
        <View style={[styles.box, { backgroundColor: "powderblue" }]} />
        <View style={[styles.box, { backgroundColor: "skyblue" }]} />
        {/*Item/elemen terakhir menggunakan width: "auto" dan minWidth: 50*/}
        <View
            style={[
              styles.box,
              {
                backgroundColor: "steelblue",
                width: "auto",
                minWidth: 50,
              },
            ]}
        />
      </PreviewLayout>
  );
};

// Component PreviewLayout untuk merender menu tombol yang tersedia
const PreviewLayout = ({
                         label,
                         children,
                         values,
                         selectedValue,
                         setSelectedValue,
                       }) => (
    <View style={{ padding: 10, flex: 1 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {values.map((value) => (
            <TouchableOpacity
                key={value}
                onPress={() => setSelectedValue(value)}
                style={[styles.button, selectedValue === value && styles.selected]}
            >
              <Text
                  style={[
                    styles.buttonLabel,
                    selectedValue === value && styles.selectedLabel,
                  ]}
              >
                {value}
              </Text>
            </TouchableOpacity>
        ))}
      </View>
      <View style={[styles.container, { [label]: selectedValue }]}>
        {children}
      </View>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    minHeight: 200,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default AlignItemsLayout;
