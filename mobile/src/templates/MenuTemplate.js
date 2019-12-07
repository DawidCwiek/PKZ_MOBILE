import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading';
import kebab from '../../assets/icons/kebab.png';

const ScreenWraper = styled.View`
    background-color: #ffd829;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

const StyledMenuCard = styled.View`
    width: 100%;
    height: 96%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

const MenuTemplate = ({ children }) => {
    return(
        <ScreenWraper>
            <StyledMenuCard>
                { children }
            </StyledMenuCard>
        </ScreenWraper>
    )
}

export default MenuTemplate;