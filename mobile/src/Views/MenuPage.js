import React, { Component, useState } from 'react'
import { View, FlatList } from 'react-native'
import styled from 'styled-components/native'
import MenuTemplate from '../templates/MenuTemplate'
import Heading from '../components/atoms/Heading'
import MenuBar from '../components/organisms/MenuBar'
import OrderBar from '../components/organisms/OrderBar'
import ProductButton from '../components/atoms/ProductButton'
import DATA from '../../assets/DATA'
import maly_rollo from '../../assets/icons/maly_rollo.png'

const ProductsContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex: 16;
`;

const StyledOrderBar = styled.View`
    width: 100%;
    flex-direction: row;
    flex: 1;
    background-color: black;
    color: white;
    border-bottom-left-radius: 10;
    border-bottom-right-radius: 10;
`;

class MenuPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            payment: 0.00,
            orderArray: [],
        }
    }

    render(){
        return(
            <MenuTemplate>
                <MenuBar/>
                <ProductsContainer>
                    <FlatList
                        data={DATA}
                        renderItem={({item}) => <ProductButton
                            onPress={this.increment}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />}
                        numColumns='2'
                        keyExtractor={item => item.id}
                    />
                </ProductsContainer>
                <OrderBar payment = {this.state.payment} />
            </MenuTemplate>
        )
    }
}


export default MenuPage;