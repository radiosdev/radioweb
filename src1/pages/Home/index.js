import React, { useCallback, useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Dimensions, Animated, Easing, Linking, Platform, Image, View, Alert, Text, ScrollView } from 'react-native';

import {
    Container,
    Header,
    UserInfo,
    UserPhoto,
    ImageUser,
    Notify,
    TextTitle,
    SearchBar,
    Podcast,
    ImagePodcast,
    FooterPod,
    NamePod,
    CreatorPod
} from './style'

import {
    DEFAULT_ANIMATION_TIME,
    DEFAULT_USER_STRUCT
} from '../../helper'

import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome'

const { width, height } = Dimensions.get('window');

const Home: React.FC = () => {

    const user = useSelector(state => state.user)
    const alert = useSelector(state => state.alert)

    const dispatch = useDispatch()

    const [containerLeft] = useState(new Animated.Value(0))
    const [modalAnimated, setModalAnimated] = useState(new Animated.Value(height))

    const podcasts = [
        {
            id: 1,
            name: "Progama Muxima",
            thumb: require('../../asset/muxima.jpeg'),
            urls: [
                { name: '64kbps AAC', uri: 'https://radiotungane.ao/radio/8030/radio' },
                { name: '48kbps AAC', uri: 'https://radiotungane.ao/radio/8030/mobile' },
            ],
            programs: [
                { id: 1, hour: '08:30', name: 'Programa Muxima' },
                { id: 2, hour: '10:30', name: 'Programa Muxima' },
                { id: 3, hour: '12:30', name: 'Programa Muxima' },
                { id: 4, hour: '14:30', name: 'Programa Muxima' },
                { id: 5, hour: '16:30', name: 'Programa Muxima' },
            ]
        },
        {
            id: 2,
            name: "Maine Voice",
            thumb: require('../../asset/main.jpeg'),
            urls: [
                { name: '64kbps AAC', uri: 'https://radiotungane.ao/radio/8000/radio' },
                { name: '48kbps AAC', uri: 'https://radiotungane.ao/radio/8000/mobile' },
            ],
            programs: [
                { id: 1, hour: '08:30', name: 'Maine Voice' },
                { id: 2, hour: '10:30', name: 'Maine Voice' },
                { id: 3, hour: '12:30', name: 'Maine Voice' },
                { id: 4, hour: '14:30', name: 'Maine Voice' },
                { id: 5, hour: '16:30', name: 'Maine Voice' },
            ]
        },
        {
            id: 3,
            name: "Promo Music Angola",
            thumb: require('../../asset/promo.jpeg'),
            urls: [
                { name: '64kbps AAC', uri: 'https://radiotungane.ao/radio/8020/radio' },
                { name: '48kbps AAC', uri: 'https://radiotungane.ao/radio/8020/mobile' },
            ],
            programs: [
                { id: 1, hour: '08:30', name: 'Promo Music Angola' },
                { id: 2, hour: '10:30', name: 'Promo Music Angola' },
                { id: 3, hour: '12:30', name: 'Promo Music Angola' },
                { id: 4, hour: '14:30', name: 'Promo Music Angola' },
                { id: 5, hour: '16:30', name: 'Promo Music Angola' },
            ]
        },

    ]

    function handlePodcast(item) {
        // dispatch({ type: 'SET_MODAL_LEFT', data: { page: 'podcast', obj: item } })
        dispatch({ type: 'SET_RADIO_SELECTED', data: { action: 'open', obj: item } })
    }

    return (

        <LinearGradient colors={["#e1fcfa", "#e1fcfa", "#d5e3e0", "#fff"]}>

            <Container>

                <Header>

                    <UserPhoto>
                        <ImageUser source={{ uri: 'https://fotopaulo.com.br/public/getProductTypeImage/35742' }} resizeMode={'cover'} />
                    </UserPhoto>

                    <UserInfo>
                        <Text style={{ color: '#888', fontWeight: 'bold' }}>Bem-vindo</Text>
                        <Text style={{ color: '#222', fontWeight: 'bold', fontSize: 20 }}>Yuri</Text>
                    </UserInfo>

                    <Notify>
                        <Icon name={"bell"} color="#888" size={20} />
                    </Notify>

                </Header>

                <TextTitle>
                    Ouça agora nossos melhores hits
                </TextTitle>

                <SearchBar>
                    <Icon name={"search"} color="#888" size={20} />
                </SearchBar>

                <TextTitle>
                    Popular
                </TextTitle>

                <ScrollView
                    horizontal={true}
                    style={{
                        marginRight: 20
                    }}
                >

                    {podcasts.map(item => {
                        return (
                            <Podcast key={item.id} onPress={() => handlePodcast(item)}>
                                <ImagePodcast resizeMode={'stretch'} source={item?.thumb} />
                                <FooterPod>

                                    <NamePod>
                                        {item.name}
                                    </NamePod>

                                    <CreatorPod>
                                        By Someone
                                    </CreatorPod>

                                </FooterPod>
                            </Podcast>
                        )
                    })}

                </ScrollView>

            </Container>

        </LinearGradient>

    )
}

export default Home;