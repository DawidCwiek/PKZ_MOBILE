import React, { Component, useState } from "react";
import { View, FlatList, Alert } from "react-native";
import styled from "styled-components/native";
import MenuTemplate from "../templates/MenuTemplate";
import Heading from "../components/atoms/Heading";
import MenuBar from "../components/organisms/MenuBar";
import OrderBar from "../components/organisms/OrderBar";
import ProductButton from "../components/atoms/ProductButton";
import axios from "axios";
import DATA from "../../assets/DATA";
import maly_rollo from "../../assets/icons/maly_rollo.png";
import { REMOTE_HOST } from "../configApi";

const ProductsContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 16;
`;

const StyledOrderBar = styled.View`
  width: 100%;
  flex-direction: row;
  flex: 1;
  background-color: black;
  color: white;
  border-bottom-left-radius: 10;
  border-bottom-right-radius: 10;
`;

class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: props.navigation.state["params"]["token"],
      storeId: props.navigation.state["params"]["store"]["id"],
      products: [],
      payment: 0.0,
      orderArray: []
    };
  }

  menu = () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: this.state.token
      },
      url: `${REMOTE_HOST}/active_menu/${this.state.storeId}`
    };
    return axios(options)
      .then(payload => {
        const [data] = payload.data;
        this.setState({
          products: data.products
        });
      })
      .catch(() => {
        Alert.alert("Error", "Unable to load data!");
      });
  };

  componentDidMount() {
    this.menu();
  }

  render() {
    console.log(this.state);
    return (
      <MenuTemplate>
        <MenuBar />
        <ProductsContainer>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <ProductButton
                onPress={this.increment}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            )}
            numColumns="2"
            keyExtractor={item => item.id}
          />
        </ProductsContainer>
        <OrderBar payment={this.state.payment} />
      </MenuTemplate>
    );
  }
}

export default MenuPage;
