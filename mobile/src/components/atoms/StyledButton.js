import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const StyledWrapper = styled.TouchableOpacity`
  background-color: ${props => props.color || '#ffd829'};
  border-radius: 12;
  padding: 5px;
  justify-content: center;
  align-items: center;
`;

const StyledLabel = styled.Text`
  color: ${props => props.fontColor || 'black'};
  font-size: ${props => props.fontSize || '12'};
  font-weight: bold;
`;


export default class StyledButton extends Component{
  render(){
    return(
      <StyledWrapper
        color={this.props.color}
        onPress={this.onPress}
      >
        <StyledLabel
          fontColor={this.props.fontColor}
          fontSize={this.props.fontSize}
        >
          {this.props.label}
        </StyledLabel>
      </StyledWrapper>
    )
  }
}