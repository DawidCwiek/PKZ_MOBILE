import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import Heading from '../atoms/Heading';
import StyledImage from '../atoms/StyledImage';
import kebab from '../../../assets/icons/kebab.png';

const StyledWraper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const StyledLogo = () => {
    return (
        <StyledWraper>
            <Heading size = '20'>Zahir</Heading>
            <StyledImage source = {kebab} size = '20'/>
        </StyledWraper>
    )
}

export default StyledLogo;