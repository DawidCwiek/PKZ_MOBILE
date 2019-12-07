import React, { Component } from 'react';
import styled from 'styled-components/native';
import StyledButton from '../atoms/StyledButton';


export default class LogOutButton extends StyledButton {
    constructor(props){
      super(props)
    }
    
    onPress = () => {
        alert('Loging out')
      }
  }