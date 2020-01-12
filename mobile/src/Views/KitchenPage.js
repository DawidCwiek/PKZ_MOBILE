import React, { Component } from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import MenuTemplate from "../templates/MenuTemplate";
import { REMOTE_HOST_WS } from "../configApi";
import MenuBar from "../components/organisms/MenuBar";
import Order from "../components/molecules/Order";
import { FlatList } from "react-native-gesture-handler";

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: 600;
  margin: auto;
`;

const OrderWrapper = styled.View`
  display: flex;
  flex: 1;
  align-content: center;
  justify-content: center;
  margin: 20px 0px 20px 0px;
`;

const DATA = [
  {
    order_id: "1",
    order: [
      {product: "Kanapka Emila"},
      {product: "Kanapka Szymona"},
      {product: "Kanapka Tomka"},
      {product: "Kanapka Emila"},
      {product: "Kanapka Emila"}
    ]
  },
  {
    order_id: "2",
    order: [
      {product: "Kanapka Emila"},
      {product: "Kanapka Szymona"},
      {product: "Kanapka Tomka"},
      {product: "Kanapka Emila"}
    ]
  },
  {
    order_id: "3",
    order: [
      {product: "Kanapka Emila"}
    ]
  },
  {
    order_id: "4",
    order: [
      {product: "Kanapka Emila"},
      {product: "Kanapka Szymona"},
      {product: "Kanapka Tomka"},
      {product: "Kanapka Emila"},
      {product: "Kanapka Emila"}
    ]
  },
  {
    order_id: "5",
    order: [
      {product: "Kanapka Emila"},
      {product: "Kanapka Szymona"},
      {product: "Kanapka Tomka"}
    ]
  },
  {
    order_id: "6",
    order: [
      {product: "Kanapka Emila"},
      {product: "Kanapka Szymona"},
      {product: "Kanapka Tomka"},
      {product: "Kanapka Emila"},
      {product: "Kanapka Emila"},
      {product: "Kanapka Emila"},
      {product: "Kanapka Szymona"},
      {product: "Kanapka Tomka"},
      {product: "Kanapka Emila"},
      {product: "Kanapka Emila"},
      {product: "Kanapka Szymona"},
      {product: "Kanapka Tomka"},
      {product: "Kanapka Emila"},
      {product: "Kanapka Emila"},
      {product: "Kanapka Szymona"},
      {product: "Kanapka Tomka"},
      {product: "Kanapka Emila"},
      {product: "Kanapka Emila"},
      {product: "Kanapka Szymona"},
      {product: "Kanapka Tomka"},
      {product: "Kanapka Emila"},
      {product: "Kanapka Emila"},
      {product: "Kanapka Szymona"},
      {product: "Kanapka Tomka"},
      {product: "Kanapka Emila"},
      {product: "Kanapka Emila"},
      {product: "Kanapka Szymona"},
      {product: "Kanapka Tomka"},
      {product: "Kanapka Emila"},
      {product: "Kanapka Emila"},
      {product: "Kanapka Szymona"},
      {product: "Kanapka Tomka"},
      {product: "Kanapka Emila"}
    ]
  },
]

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
    console.log(this.state.orders);
    return (
      <MenuTemplate>
        <MenuBar
          navigation={this.props.navigation}
          token={this.state.token}
          kitchen 
        />
        <OrderWrapper>
          <FlatList 
            data={DATA}
            renderItem={({item}) => <Order order_id={item.order_id} order={item.order} />}
            horizontal
          />
        </OrderWrapper>
      </MenuTemplate>
    );
  }
}

export default KitchenPage;
