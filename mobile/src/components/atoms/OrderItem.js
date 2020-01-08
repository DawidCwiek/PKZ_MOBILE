import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const StyledProduct = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1px 2px 1px 2px;
`;

const NameWrapper = styled.View`
  display: flex;
  flex: 3;
`;

const PriceWrapper = styled.View`
  display: flex;
  flex: 2;
  align-items: flex-end;
`;

const DeleteWrapper = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 12;
  font-weight: bold;
`;

const OrderItem = props => {
  return (
    <StyledProduct>
      <NameWrapper>
        <StyledText>{props.name}</StyledText>
      </NameWrapper>
      <PriceWrapper>
        <StyledText>{props.price} zł</StyledText>
      </PriceWrapper>
      <DeleteWrapper onPress={() => props.removeToOrders(props.item)}>
        <StyledText>X</StyledText>
      </DeleteWrapper>
    </StyledProduct>
  );
};

export default OrderItem;
