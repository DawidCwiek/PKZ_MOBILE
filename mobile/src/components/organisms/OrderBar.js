import React, { Component } from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import styled from 'styled-components'
import StyledButton from '../atoms/StyledButton'
import OrderItem from '../atoms/OrderItem'
import DATA from '../../../assets/DATA'

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

const handleAccept = () => {
    alert("Akceptowano zamówienie")
}

const handleCancel = () => {
    alert("Anulowano zamówienie")
}


const OrderBar = props => {
    return (
        <OrderBarWraper>
            <PaymentBar>
                <Label size='16'>Do zapłaty:</Label>
                <Label size='16'>{props.payment} zł</Label>
            </PaymentBar>
            <OrderView>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <OrderItem 
                        name={item.name}
                        price={item.price}
                    />}
                    keyExtractor={item => item.id}
                />
            </OrderView>
            <ButtonsWrapper>
                <ButtonWrapper>
                    <StyledButton
                        label="Anuluj"
                        color="#A93226"
                        fontSize='16'
                        border
                        onPress={handleCancel}
                    />
                </ButtonWrapper>
                <ButtonWrapper>
                    <StyledButton
                        label="Akceptuj"
                        color="#229954"
                        fontSize='16'
                        border
                        onPress={handleAccept}
                    />
                </ButtonWrapper>
            </ButtonsWrapper>
        </OrderBarWraper>
    )
}

export default OrderBar;