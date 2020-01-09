import React, { Component } from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import { REMOTE_HOST_WS } from "../configApi";

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: 600;
  margin: auto;
`;

class KitchenPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: props.navigation.state["params"]["token"],
      orders: []
    };
    this.ws = new WebSocket(
      `${REMOTE_HOST_WS}/?token=${props.navigation.state["params"]["token"]}`
    );
    this.ws.onopen = () => {
      this.ws.send(
        JSON.stringify({
          command: "subscribe",
          identifier: '{"channel":"OrderChannel","store_id":"53"}'
        })
      );
    };

    this.ws.onmessage = e => {
      const data = JSON.parse(e.data);
      if (typeof data["message"] != "undefinder") {
        if (typeof data["message"] == "object") {
          const orders = data["message"];
          this.setState({ orders: orders.data });
        }
      }
    };
  }

  render() {
    console.log(this.state);
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>TOKEN: {this.state.token}</Text>
      </View>
    );
  }
}

export default KitchenPage;
