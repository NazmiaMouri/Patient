import React from "react";
import { Text } from "react-native";
import List from "../List";

function Pending() {
  return (
    <>
      <Text style={{ fontWeight: "bold", margin: 10, fontSize: 20 }}>
        Pending...
      </Text>
      <List />
    </>
  );
}

export default Pending;
