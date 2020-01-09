import React, { Component } from "react";
import { View } from "react-native";
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
      token: props.navigation.state["params"]["token"]
    };
    this.ws = new WebSocket(
      `${REMOTE_HOST_WS}/?token=${props.navigation.state["params"]["token"]}`
    );
    this.ws.onopen = () => {
      // connection opened
      this.ws.send(
        JSON.stringify({
          command: "subscribe",
          identifier: '{"channel":"OrderChannel","store_id":"53"}'
        })
      ); // send a message {"command":"subscribe","identifier":"{\"channel\":\"OrderChannel\",\"store_id\":\"53\"}"}
    };

    this.ws.onmessage = e => {
      // a message was received
      console.log(e.data);
    };
  }

  render() {
    return (
      <View>
        <StyledText>Dupa {this.state.token}</StyledText>
      </View>
    );
  }
}

export default KitchenPage;
