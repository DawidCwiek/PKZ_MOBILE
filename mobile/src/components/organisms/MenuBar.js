import React, { Component } from "react";
import { View, Button, TouchableOpacity } from "react-native";
import styled from "styled-components";
import Heading from "../atoms/Heading";
import StyledImage from "../atoms/StyledImage";
import kebab from "../../../assets/icons/kebab.png";
import logOut from "../../../assets/icons/logOut.png";
import StyledButton from "../atoms/StyledButton";
import ImageButton from "../atoms/ImageButton";

const MenuBarWraper = styled.View`
  height: 6%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffd829;
  border-bottom-width: 1;
  border-left-width: 1;
  border-right-width: 1;
  border-bottom-right-radius: 10;
  border-bottom-left-radius: 10;
  padding-left: 2px;
  padding-right: 2px;
`;

const LogoWraper = styled.View`
  display: flex;
  flex: 1;
`;

const ToKitchenWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const ButtonWraper = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

const handleLogOut = navigation => {
  navigation.navigate("Login");
};

const handleToKitchen = (navigation, token) => {
  navigation.navigate("Kitchen", { token: token });
};

const MenuBar = ({ navigation, token }) => {
  return (
    <MenuBarWraper>
      <LogoWraper>
        <StyledImage source={kebab} />
      </LogoWraper>
      <ToKitchenWrapper onPress={() => handleToKitchen(navigation, token)}>
        <Heading>Menu/</Heading>
        <Heading color="#ffe880">Kitchen</Heading>
      </ToKitchenWrapper>
      <ButtonWraper>
        <ImageButton source={logOut} onPress={() => handleLogOut(navigation)} />
      </ButtonWraper>
    </MenuBarWraper>
  );
};

export default MenuBar;
