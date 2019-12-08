import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import StyledImage from './StyledImage';

const StyledWrapper = styled.TouchableOpacity`
  background-color: ${props => props.color || '#ffd829'};
  border-width: ${({border}) => (border ? '1' : '0')}
  border-radius: 12;
  padding: 5px;
  justify-content: center;
  align-items: center;
`;


export default class ImageButton extends Component{
  render(){
    return(
      <StyledWrapper
        color={this.props.color}
        border={this.props.border}
        onPress={this.props.onPress}
      >
        <StyledImage source={this.props.source} />
      </StyledWrapper>
    )
  }
}