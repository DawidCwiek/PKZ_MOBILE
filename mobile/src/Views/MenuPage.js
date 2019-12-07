import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import MenuTemplate from '../templates/MenuTemplate';
import Heading from '../components/atoms/Heading';
import MenuBar from '../components/organisms/MenuBar';
import OrderBar from '../components/organisms/OrderBar';

const ProductsContainer = styled.View`
    display: flex;
    flex-direction: column;
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

const MenuPage = () => {
    return(
        <MenuTemplate>
            <MenuBar/>
            <ProductsContainer></ProductsContainer>
            <OrderBar></OrderBar>
        </MenuTemplate>
    )
}

export default MenuPage;