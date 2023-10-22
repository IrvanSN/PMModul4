import React from "react";
import {StatusBar, Text, View} from "react-native";
import {
  AlignItemsLayout,
  DisplayAnImageWithStyle,
  FixedDimensionsBasics,
  Flex,
  FlexDimensionsBasics,
  FlexDirectionBasics,
  JustifyContentBasics,
  LotsOfStyles,
  NativeBaseExample,
  PercentageDimensionsBasics,
  PositionLayout,
  TodoList,
  WidthHeightBasics,
} from "./screens";

const App = () => {
  return (
      <>
        <StatusBar style={{ padding: 0 }} />
        <View style={{alignItems: 'center', borderBottomWidth: 2, borderBottomColor: 'black', paddingVertical: 5}}>
          <Text>Nama: Irvan Surya Nugraha</Text>
          <Text>NIM: 1203210007</Text>
        </View>
        {/* Panggil Komponen Di Sini */}
        {/*<AlignItemsLayout />*/}
        {/*<DisplayAnImageWithStyle />*/}
        {/*<FixedDimensionsBasics />*/}
        {/*<Flex />*/}
        {/*<FlexDimensionsBasics />*/}
        {/*<FlexDirectionBasics />*/}
        {/*<JustifyContentBasics />*/}
        {/*<LotsOfStyles />*/}
        {/*<NativeBaseExample />*/}
        {/*<PercentageDimensionsBasics />*/}
        {/*<PositionLayout />*/}
        {/*<TodoList />*/}
        <WidthHeightBasics />
      </>
  );
};

export default App;
