import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components';

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
    border-radius: 10;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 5px;
`;

const OrderView = styled.View`
    background-color: lightgray;
    display: flex;
    flex: 2;
    flex-direction: row;
    border-radius: 10;
    margin: 2px;
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



const OrderBar = () => {
    return (
        <OrderBarWraper>
            <PaymentBar>
                <Label size='16'>Do zapłaty:</Label>
            </PaymentBar>
            <OrderView>

            </OrderView>
            <ButtonsWrapper>
                <ButtonWrapper><Button title="Cancel" color="#A93226"/></ButtonWrapper>
                <ButtonWrapper><Button title="Accept" color="#229954" /></ButtonWrapper>
                
            </ButtonsWrapper>
        </OrderBarWraper>
    )
}

export default OrderBar;