import React, { Component } from "react";
import { FlatList, Alert } from "react-native";
import styled from "styled-components";
import DoubleClick from "react-native-double-tap";
import axios from "axios";
import OrderWithComponents from "../atoms/OrderWithComponents";
import { REMOTE_HOST } from "../../configApi";

const StyledOrder = styled.View`
  width: 150px;
  border-radius: 24;
  border-color: #cccccc;
  border-width: 3;
  background-color: #d9d9d9;
  margin: 15px 15px 15px 15px;
  padding: 5px 5px 5px 5px;
`;

const NumberWrapper = styled.View`
  align-items: center;
`;

const StyledText = styled.Text`
  font-weight: bold;
  font-size: 12px;
`;

const OrderText = styled(StyledText)`
  font-size: 24px;
  text-decoration-line: underline;
`;

const CurrentTime = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: flex-end;
  margin: 2px 2px 2px 2px;
`;

const TextWrapper = styled.View`
  display: flex;
  flex: 2;
  align-items: flex-start;
`;

const TimeWrapper = styled.View`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;

const ListWrapper = styled.View`
  display: flex;
  flex: 1;
`;

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleComponents: false,
      token: props.token,
      storeId: props.storeId,
      time: 0
    };
  }

  updateIssued = () => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: this.state.token
      },
      url: `${REMOTE_HOST}/store/${this.props.storeId}/orders/${this.props.orderId}`
    };
    return axios(options).catch(() => {
      Alert.alert("Error", "Failed to issued!");
    });
  };

  handleIssued = () => {
    Alert.alert(
      "Confirm Issued!",
      "Are you sure you want to issued this order?",
      [
        {
          text: "Yes",
          onPress: () => this.updateIssued()
        },
        { text: "No" }
      ],
      { cancelable: true }
    );
  };

  issuedTime = () => {
    const diff = Math.abs(Date.now() - Date.parse(this.props.time));
    const time = new Date(diff);
    return time.getUTCMinutes() + ":" + ("0" + time.getUTCSeconds()).slice(-2);
  };

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: this.issuedTime() }),
      1000
    );
  }

  render() {
    return (
      <StyledOrder>
        <DoubleClick
          singleTap={() => {
            alert("pojedyncze");
          }}
          doubleTap={() => {
            this.handleIssued();
          }}
          delay={300}
        >
          <NumberWrapper>
            <OrderText underline>Order {this.props.orderId}</OrderText>
          </NumberWrapper>

          <ListWrapper>
            <FlatList
              data={this.props.order}
              renderItem={({ item }) => (
                <OrderWithComponents name={item.name} />
              )}
              listKey={this.props.orderId}
              keyExtractor={item => item.id + Math.random()}
            />
          </ListWrapper>
          <CurrentTime>
            <TextWrapper>
              <StyledText>CurrentTime:</StyledText>
            </TextWrapper>
            <TimeWrapper>
              <StyledText>{this.state.time}</StyledText>
            </TimeWrapper>
          </CurrentTime>
        </DoubleClick>
      </StyledOrder>
    );
  }
}

export default Order;
