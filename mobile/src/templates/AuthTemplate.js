import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading';
import kebab from '../../assets/icons/kebab.png';

const StyledWraper = styled.View`
    background-color: #ffd829;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledLogo = styled.View`
    display: flex;
    align-items: center;
`;

const StyledImg = styled.Image`
    width: 40;
    height: 40;
    margin: 0 0 0 10px;
`;

const StyledAuthCard = styled.View`
    width: 90%;
    height: 50%;
    border-radius: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

const AuthTemplate = ({ children }) => (
    <StyledWraper>
        <StyledLogo>
            <Heading big>Zahir</Heading>
            <StyledImg source = {kebab} />
        </StyledLogo>
        <StyledAuthCard>{ children }</StyledAuthCard>
    </StyledWraper>
)

export default AuthTemplate;

