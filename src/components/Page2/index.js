import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Container,
    Text1,
    Text2,
    Image1,
    Image2,
    ButtonNext,
} from './style'

import { FlatList, View, BackHandler, Touchable, TouchableOpacity, Dimensions } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

const { width, height } = Dimensions.get('window');

export default function Page2({ next }) {

    return (

        <Container>

            <Image1
                source={require('../../asset/all.png')}
            />


            <Text2>Programas bem elaborados</Text2>

            <Text1>Informe-se e divirta-se ouvindo nosso podcast para saciar sua curiosidade.</Text1>

            <ButtonNext onPress={() => next()}>
                <Icon name={"play"} color={"#fff"} size={20} />
            </ButtonNext>

            <Image2
                source={require('../../asset/Progress1.png')}
            />


        </Container >

    )

}