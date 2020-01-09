import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import DoubleClick from "react-native-double-tap";

const StyledOrder = styled.TouchableOpacity`
    border-radius: 24;
    border-color: white;
    shadow-color: black;
    shadow-offset: {width: 0, height: 2};
    shadow-radius: 2;
    shadow-opacity: 1;
    elevation: 4;
    margin: 5px 5px 5px 5px;
`;

const Order = props => {
    return(
        <StyledOrder>
            <DoubleClick
            singleTap={() => {alert("pojedyncze")}}
            doubleTap={() => {alert("podwojne")}}
            delay={300}
            >
                <Text>Abecadło z pieca</Text>
                <Text>Abecadło z pieca</Text>
                <Text>Abecadło z pieca</Text>
                <Text>Abecadło z pieca</Text>
                <Text>Abecadło z pieca</Text>
                <Text>Abecadło z pieca</Text>
            </DoubleClick>
        </StyledOrder>
    );
}

export default Order;