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

export default function Page3({ next }) {

    return (

        <Container>

            <Image1
                source={require('../../asset/fundo.png')}
            />

            <Text2>Ouça o Podcast,</Text2>
            <Text2>sinta</Text2>

            <ButtonNext onPress={() => next()}>
                <Icon name={"play"} color={"#fff"} size={20} />
            </ButtonNext>

            <Image2
                source={require('../../asset/Progress.png')}
            />


        </Container >

    )

}