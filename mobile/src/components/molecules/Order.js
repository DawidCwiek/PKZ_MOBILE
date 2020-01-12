import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import styled from "styled-components";
import DoubleClick from "react-native-double-tap";
import OrderWithComponents from "../atoms/OrderWithComponents";

const StyledOrder = styled.View`
    width: 300px;
    height: 90%;
    border-color: #cccccc;
    border-width: 3;
    background-color: #d9d9d9;
    margin: 15px 15px 15px 20px;
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
    font-size: 45px;
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
            <StyledOrder>
                <DoubleClick
                    singleTap={() => {alert("pojedyncze")}}
                    doubleTap={() => {alert("podwojne")}}
                    delay={300}
                >
                    <NumberWrapper>
                        <OrderText underline>Order {this.props.order_id}</OrderText>
                    </NumberWrapper>
                </DoubleClick>
                <FlatList 
                    data={this.props.order}
                    renderItem={({item}) => <OrderWithComponents name={item.name} />}
                />
            </StyledOrder>
        );
    }
}

export default Order;