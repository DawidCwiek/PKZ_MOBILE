import React, { Component } from 'react';
import { View, Button } from 'react-native';
import styled from 'styled-components';
import Heading from '../atoms/Heading';
import StyledImage from '../atoms/StyledImage';
import kebab from '../../../assets/icons/kebab.png';
import StyledButton from '../atoms/StyledButton';
import LogOutButton from '../molecules/LogOutButton';

const MenuBarWraper = styled.View`
    height: 6%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #ffd829;
    border-bottom-right-radius: 10;
    border-bottom-left-radius: 10;
    padding-left: 2px;
    padding-right: 2px;
`;

const LogoWraper = styled.View`
    display: flex;
    flex: 1;
`;

const MenuWraper = styled.View`
    display: flex;
    flex: 2;
    justify-content: center;
    align-items: center;
`;

const ButtonWraper = styled.View`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: flex-end;
`;

const MenuBar = () => {
    return (
        <MenuBarWraper>
            <LogoWraper>
                <StyledImage source = {kebab}></StyledImage>
            </LogoWraper>
            <MenuWraper>
                <Heading>Menu</Heading>
            </MenuWraper>
            <ButtonWraper>
                <LogOutButton label='Log out'/>
            </ButtonWraper>
        </MenuBarWraper>
    )
}

export default MenuBar;