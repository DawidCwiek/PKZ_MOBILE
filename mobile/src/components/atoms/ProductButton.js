import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components/native";
import StyledImage from "./StyledImage";
import { REMOTE_HOST } from "../../configApi";

const StyledOpacity = styled.TouchableOpacity`
    width: 150;
    height: 150;
    background-color: white;
    border-radius: 24;
    border-color: white;
    shadow-color: black;
    shadow-offset: {width: 0, height: 2};
    shadow-radius: 2;
    shadow-opacity: 1;
    elevation: 4;
    margin: 5px 5px 5px 5px;
`;

const PriceWrapper = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-top: 2px;
  padding-right: 10px;
`;

const ImageWrapper = styled.View`
  display: flex;
  flex: 4;
  justify-content: center;
  align-items: center;
`;

const NameWrapper = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-weight: bold;
`;

const ProductButton = props => {
  return (
    <StyledOpacity onPress={() => props.addToOrders(props.item)}>
      <PriceWrapper>
        <StyledText>{props.price} zł</StyledText>
      </PriceWrapper>
      <ImageWrapper>
        <StyledImage
          width="68%"
          height="100%"
          source={{ uri: `${REMOTE_HOST}${props.image}` }}
        />
      </ImageWrapper>
      <NameWrapper>
        <StyledText>{props.name}</StyledText>
      </NameWrapper>
    </StyledOpacity>
  );
};

export default ProductButton;
