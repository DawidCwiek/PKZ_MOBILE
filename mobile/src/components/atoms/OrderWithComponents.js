import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

const StyledOrder = styled.View`
    margin: 2px 2px 2px 7px;
`;

const ComponentsWrapper = styled.View`
    margin-left: 2px;
`;

const StyledText = styled.Text`
    font-weight: bold;
    font-size: 24px;
`;

const OrderWithComponents = props => {
    return(
        <StyledOrder>
            <View>
                <StyledText>{props.name}</StyledText>
            </View>
        </StyledOrder>
    );
}

export default OrderWithComponents;