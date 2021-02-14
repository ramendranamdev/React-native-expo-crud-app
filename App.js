import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import ListUsers from "./Screens/ListUsers";
import Devider from "./Screens/Devider";
import AddUser from "./Screens/AddUser";

export default function App() {
  let [users, setUsers] = useState([]);

  const clearUserData = () => {
    setUsers([]);
  };

  const addUser = (user) => {
    setUsers((oldArray) => [...oldArray, user]);
  };

  const refreshUserData = () => {};

  return (
    <View style={styles.container}>
      <AddUser addUser={addUser} />
      <Devider />
      <ListUsers
        refreshUserData={refreshUserData}
        clearUserData={clearUserData}
        users={users}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
    padding: 20,
  },
});
