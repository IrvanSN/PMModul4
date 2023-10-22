import React from "react";
import { NativeBaseProvider, Center } from "native-base";

// Menggunakan NativeBase agar memudahkan kita untuk styling UI
// NativeBase adalah sebuah UI library yang menyediakan berbagai komponen UI yang siap digunakan dan dirancang dengan gaya Material Design untuk memudahkan kita dalam membangun antar muka pengguna yang indah dan konsisten.

const NativeBaseExample = () => {
  return (
      <NativeBaseProvider>
        <Center flex={1}>Hello world</Center>
      </NativeBaseProvider>
  );
};

export default NativeBaseExample;
