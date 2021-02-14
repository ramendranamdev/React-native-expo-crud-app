import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import { addNewUser } from "../../Api";

function AddUser({ addUser }) {
  const [value, onChangeText] = React.useState("");

  function _addUser(user) {
    addNewUser(user).then((res) => {
      console.log(`User added, ${res}`);
    });
  }

  function addUserToDb(user) {
    fetch("http://localhost:3000/newUser", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: "data=" + value,
    })
      .then((response) => {
        if (response.ok) {
          alert("the call works ok");
        }
      })
      .catch(function (error) {
        console.log("Request failed", error);
      });
  }

  return (
    <View>
      <Card elevation={2} style={{ borderColor: "gray", borderWidth: 1 }}>
        <Card.Title title="Add User" subtitle="" />
        <Card.Content>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          />
        </Card.Content>
        <Card.Actions>
          <Button
            onPress={() => {
              onChangeText("");
            }}
          >
            Clear
          </Button>
          <Button
            onPress={() => {
              if (value != "") {
                addUser(value);
                addUserToDb(value);
                // _addUser(value);
              }
            }}
          >
            Add
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

export default AddUser;
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
  textInput: {
    // height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
  },
});
