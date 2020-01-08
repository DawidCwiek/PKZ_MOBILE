import React, { Component } from "react";
import { FlatList, Alert } from "react-native";
import styled from "styled-components";
import StyledButton from "../atoms/StyledButton";
import OrderItem from "../atoms/OrderItem";

const OrderBarWraper = styled.View`
  display: flex;
  flex: 5;
  flex-direction: column;
  width: 100%;
  align-items: stretch;
  justify-content: center;
  padding: 2px;
`;

const PaymentBar = styled.View`
  background-color: #ffd829;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-width: 1;
  border-radius: 10;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 5px;
  padding-right: 5px;
`;

const OrderView = styled.View`
  background-color: lightgray;
  display: flex;
  flex: 2;
  flex-direction: column;
  border-width: 1;
  border-radius: 10;
  margin: 2px;
  padding: 2px;
`;

const ButtonsWrapper = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ButtonWrapper = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: stretch;
  margin-left: 2px;
  margin-right: 2px;
`;

const Label = styled.Text`
  color: black;
  font-size: ${props => props.size || 12};
  font-weight: 500;
`;

class OrderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: this.props.orders
    };
  }

  handleAccept = () => {
    if (this.state.orders.length < 1) {
      return Alert.alert("Error", "The order is empty!");
    }
    Alert.alert(
      "Confirm Order!",
      "Are you sure you want to create this order?",
      [
        { text: "Yes", onPress: () => this.props.sendOrder(this.sumToPayment) },
        { text: "No" }
      ],
      { cancelable: true }
    );
  };

  handleCancel = () => {
    Alert.alert(
      "Cancel Order!",
      "Are you sure you want to cancel this order?",
      [
        { text: "Yes", onPress: () => this.props.cancelOrder() },
        { text: "No" }
      ],
      { cancelable: true }
    );
  };

  sumToPayment = () => {
    let sum = 0;
    this.props.orders.map(x => (sum += parseFloat(x.price)));
    return sum;
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.orders !== this.props.orders) {
      this.setState({ orders: nextProps.orders });
    }
  }

  render() {
    return (
      <OrderBarWraper>
        <PaymentBar>
          <Label size="16">Do zapłaty:</Label>
          <Label size="16">{this.sumToPayment()} zł</Label>
        </PaymentBar>
        <OrderView>
          {this.state.orders.length ? (
            <FlatList
              data={this.state.orders}
              renderItem={({ item }) => (
                <OrderItem
                  name={item.name}
                  price={item.price}
                  item={item}
                  removeToOrders={this.props.removeToOrders}
                />
              )}
              keyExtractor={item => item.id + Math.random()}
            />
          ) : null}
        </OrderView>
        <ButtonsWrapper>
          <ButtonWrapper>
            <StyledButton
              label="Anuluj"
              color="#A93226"
              fontSize="16"
              border
              onPress={this.handleCancel}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <StyledButton
              label="Akceptuj"
              color="#229954"
              fontSize="16"
              border
              onPress={this.handleAccept}
            />
          </ButtonWrapper>
        </ButtonsWrapper>
      </OrderBarWraper>
    );
  }
}

export default OrderBar;
