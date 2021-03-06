import React, { Component } from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import MenuTemplate from "../templates/MenuTemplate";
import { REMOTE_HOST_WS } from "../configApi";
import MenuBar from "../components/organisms/MenuBar";
import Order from "../components/molecules/Order";
import { FlatList } from "react-native-gesture-handler";

const OrderWrapper = styled.View`
  display: flex;
  flex: 1;
  align-content: center;
  justify-content: center;
  margin: 20px 0px 20px 0px;
`;

class KitchenPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: props.navigation.state["params"]["token"],
      storeId: props.navigation.state["params"]["store"],
      orders: []
    };
    this.ws = new WebSocket(
      `${REMOTE_HOST_WS}/?token=${props.navigation.state["params"]["token"]}`
    );
    this.ws.onopen = () => {
      this.ws.send(
        JSON.stringify({
          command: "subscribe",
          identifier: `{"channel":"OrderChannel","store_id":"${props.navigation.state["params"]["store"]}"}`
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
    return (
      <MenuTemplate>
        <MenuBar
          navigation={this.props.navigation}
          token={this.state.token}
          kitchen
        />
        <OrderWrapper>
          <FlatList
            data={this.state.orders}
            renderItem={({ item }) => (
              <Order
                orderId={item.id}
                order={item.products}
                storeId={this.state.storeId}
                token={this.state.token}
                time={item.created_at}
              />
            )}
            numColumns="2"
            keyExtractor={item => item.id}
          />
        </OrderWrapper>
      </MenuTemplate>
    );
  }
}

export default KitchenPage;
