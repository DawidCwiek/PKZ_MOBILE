import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import styled from "styled-components";
import DoubleClick from "react-native-double-tap";

const StyledOrder = styled.View`
    width: 150;
    height: 200;
    border-color: white;
    background-color: red;
    margin: 5px 5px 5px 5px;
    padding: 5px 5px 5px 5px;
`;

const NumberWrapper = styled.View`
    align-items: center;
`;

const StyledText = styled.Text`
    font-weight: bold;
    font-size: 16;
`;

const OrderText = styled(StyledText)`
    font-size: 24px;
    text-decoration-line: underline;
`;

class Order extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggleComponents: false
        }
    }

    render() {
        return(
            <DoubleClick
            singleTap={() => {alert("pojedyncze")}}
            doubleTap={() => {alert("podwojne")}}
            delay={300}
            >
                <StyledOrder>
                    <NumberWrapper>
                        <OrderText underline>Order {this.props.order_id}</OrderText>
                    </NumberWrapper>
                    
                </StyledOrder>
            </DoubleClick>

        );
    }
}

export default Order;