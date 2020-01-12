import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import styled from "styled-components";
import DoubleClick from "react-native-double-tap";
import OrderWithComponents from "../atoms/OrderWithComponents";

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
                <ListWrapper>
                    <FlatList 
                        data={this.props.order}
                        renderItem={({item}) => <OrderWithComponents name={item.name} />}
                        listKey={this.props.order_id}
                        keyExtractor={item => item.id + Math.random()} 
                    />
                </ListWrapper>
                <CurrentTime>
                    <TextWrapper>
                        <StyledText>CurrentTime:</StyledText>
                    </TextWrapper>
                    <TimeWrapper>
                        <StyledText>00:00</StyledText>
                    </TimeWrapper>
                </CurrentTime>
            </StyledOrder>
        );
    }
}

export default Order;