import React from "react";
import {
  Input,
  Button,
  IconButton,
  Checkbox,
  Text,
  VStack,
  HStack,
  Heading,
  Icon,
  Center,
  Box,
  NativeBaseProvider,
} from "native-base";
import { FontAwesome5, Feather, Entypo } from "@expo/vector-icons";

// Membuat aplikasi TodoList sederhana dengan NativeBase

const TodoList = () => {
  // Variable ini untuk state awal dari todolist
  const instState = [
    { title: "Code", isCompleted: true },
    { title: "Meeting with team at 9", isCompleted: false },
    { title: "Check Emails", isCompleted: false },
    { title: "Write an article", isCompleted: false },
  ];
  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState("");

  // Fungsi ini untuk menangani jika pengguna menambahkan item/todo
  const addItem = (title) => {
    setList([
      ...list,
      {
        title: title,
        isCompleted: false,
      },
    ]);
  };

  // Fungsi ini untuk menangani jika pengguna ingin menghapus item/todo
  const handleDelete = (index) => {
    const temp = list.filter((_, itemI) => itemI !== index);
    setList(temp);
  };

  // Fungsi ini untuk menangani jika item/todo sudah selesai/belum selesai
  const handleStatusChange = (index) => {
    const temp = list.map((item, itemI) =>
        itemI !== index
            ? item
            : {
              ...item,
              isCompleted: !item.isCompleted,
            }
    );
    setList(temp);
  };

  return (
      <NativeBaseProvider>
        <Center flex={1}>
          <Box>
            <Heading mb="5">Wednesday</Heading>
            <VStack space={4}>
              <HStack space={2}>
                <Input
                    flex={1}
                    onChangeText={(v) => setInputValue(v)}
                    value={inputValue}
                    placeholder="Add Task"
                />
                <IconButton
                    borderRadius="sm"
                    variant="solid"
                    icon={
                      <Icon
                          as={Feather}
                          name="plus"
                          size="sm"
                          color="warmGray.50"
                      />
                    }
                    onPress={() => {
                      addItem(inputValue);
                      setInputValue("");
                    }}
                />
              </HStack>
              <VStack space={2}>
                {list.map((item, itemI) => (
                    <HStack
                        justifyContent="space-between"
                        alignItems="center"
                        key={item.title + itemI.toString()}
                    >
                      <Checkbox
                          isChecked={item.isCompleted}
                          onChange={() => handleStatusChange(itemI)}
                          value={item.title}
                      >
                        <Text
                            mx="2"
                            strikeThrough={item.isCompleted}
                            _light={{
                              color: item.isCompleted ? "gray.400" : "coolGray.800",
                            }}
                            _dark={{
                              color: item.isCompleted ? "gray.400" : "coolGray.50",
                            }}
                        >
                          {item.title}
                        </Text>
                      </Checkbox>
                      <IconButton
                          size="sm"
                          colorScheme="trueGray"
                          icon={
                            <Icon
                                as={Entypo}
                                name="minus"
                                size="xs"
                                color="trueGray.400"
                            />
                          }
                          onPress={() => handleDelete(itemI)}
                      />
                    </HStack>
                ))}
              </VStack>
            </VStack>
          </Box>
        </Center>
      </NativeBaseProvider>
  );
};

export default TodoList;
