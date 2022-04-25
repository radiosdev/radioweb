import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Container,
    Text1,
    Text2,
    Image1,
    Image2,
    ButtonNext,
    Novo,
    Text3,
    ImageText
} from './style'

import { FlatList, View, BackHandler, Touchable, TouchableOpacity, Dimensions } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

const { width, height } = Dimensions.get('window');

export default function Page1({ next }) {

    useEffect(() => {
    }, [])

    return (

        <Container>

            <Text1>Ouça suas</Text1>
            <Text2>estações favoritas</Text2>

            <Image1
                source={require('../../asset/Img.png')}
            />

            <Novo>
                <Text3>NOVO</Text3>
            </Novo>

            <ImageText
                source={require('../../asset/Tittle.png')}
            />

            <Image2
                source={require('../../asset/Progress1.png')}
            />

            <ButtonNext onPress={() => next()}>
                <Icon name={"play"} color={"#fff"} size={20} />
            </ButtonNext>



        </Container >

    )

}