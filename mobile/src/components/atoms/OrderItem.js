import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const StyledProduct = styled.View`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: start;
    align-items: stretch;
    margin: 2px 2px 0px 2px;
`;

const NameWrapper = styled.View`
    display: flex;
    flex: 3;
    align-items: center;
`;

const PriceWrapper = styled.View`
    display: flex;
    flex: 2;
    align-items: center;
`;

const DeleteWrapper = styled.TouchableOpacity`
    display: flex;
    flex: 1;
    align-items: center;
`;

const StyledText = styled.Text`
    font-size: 6;
`;


const OrderItem = props => {
    return(
        <StyledProduct>
            <NameWrapper>
                <StyledText>{props.name}</StyledText>
            </NameWrapper>
            <PriceWrapper>
                <StyledText>{props.price}</StyledText>
            </PriceWrapper>
            <DeleteWrapper>
                <StyledText>X</StyledText>
            </DeleteWrapper>            
        </StyledProduct>
    )
}

export default OrderItem;