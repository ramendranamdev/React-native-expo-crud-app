import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Button, Card } from "react-native-paper";
import { axios } from "axios";

function ListUsers({ users, clearUserData, refreshUserData }) {
  let [data, setData] = useState([]);

  function printUser(user) {
    return <View key={user._id}>{user.id}</View>;
  }

  function getUsers(params) {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }

  function deleteUsers() {
    fetch("http://localhost:3000/deleteAllUser")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        getUsers();
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getUsers();
  }, []);

  function _refresh() {
    getUsers();
  }

  return (
    <View>
      <Card elevation={2} style={{ borderColor: "gray", borderWidth: 1 }}>
        <Card.Title title="Users" subtitle="All availble user data" />
        <Card.Actions>
          <Button
            onPress={() => {
              // refreshUserData();
              _refresh();
            }}
          >
            Refresh
          </Button>
          <Button
            onPress={() => {
              // clearUserData();
              // _deleteAll();
              deleteUsers();
            }}
          >
            Delete All
          </Button>
        </Card.Actions>
        <Card.Content>{data.map((x) => printUser(x))}</Card.Content>
      </Card>
    </View>
  );
}

export default ListUsers;
