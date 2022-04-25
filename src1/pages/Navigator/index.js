import React, { useCallback, useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Dimensions, Animated, Easing, Linking, Platform, Image, View, Alert } from 'react-native';

import {
    Container
} from './style'

import {
    DEFAULT_ANIMATION_TIME,
    DEFAULT_USER_STRUCT
} from '../../helper'

import Modal from '../../components/Modal'
import Intro from '../Intro'
import Home from '../Home'

// import getUser from '../../service/User'

import PlayerPodcast from '../../components/PlayerPodcast';


const { width, height } = Dimensions.get('window');

const Navigator: React.FC = () => {

    const user = useSelector(state => state.user)
    const alert = useSelector(state => state.alert)
    const modalLeft = useSelector(state => state.modalLeft)
    const radioSelected = useSelector(state => state.radioSelected)
    const intro = useSelector(state => state.intro)

    const dispatch = useDispatch()

    const [containerLeft] = useState(new Animated.Value(0))
    const [modalLeftAnimated, setModalLeftAnimated] = useState(new Animated.Value(width))
    const [playerTopAnimated] = useState(new Animated.Value(height))

    useEffect(() => {

    }, [])

    useEffect(() => {

        if (modalLeft) {
            showModalLeft()
            return
        }

        hideModalLeft()

    }, [modalLeft])

    hideModalLeft = () => {

        Animated.timing(
            modalLeftAnimated,
            {
                toValue: width,
                duration: DEFAULT_ANIMATION_TIME,
                easing: Easing.linear,
                useNativeDriver: false
            }
        ).start()

        setTimeout(() => {
            dispatch({ type: "SET_ITEM_SELECTED", data: false })
        }, DEFAULT_ANIMATION_TIME)
    }

    showModalLeft = () => {

        Animated.timing(
            modalLeftAnimated,
            {
                toValue: 0,
                duration: DEFAULT_ANIMATION_TIME,
                easing: Easing.linear,
                useNativeDriver: false
            }
        ).start()

    }

    useEffect(() => {

        if (radioSelected) {

            if (radioSelected.action == 'open' || radioSelected.action == 'relative') {

                showRadio()

                if (radioSelected.action == 'relative') {
                    setTimeout(() => {
                        hideModalLeft()
                    }, 300)
                }

            }

            else if (radioSelected.action == 'absolute')
                reduceRadio()



            return
        }

        hideRadio()

    }, [radioSelected])

    hideRadio = () => {

        Animated.timing(
            playerTopAnimated,
            {
                toValue: height,
                duration: DEFAULT_ANIMATION_TIME,
                easing: Easing.linear,
                useNativeDriver: false
            }
        ).start()

        setTimeout(() => {
            dispatch({ type: "SET_ITEM_SELECTED", data: false })
        }, DEFAULT_ANIMATION_TIME)
    }

    showRadio = () => {

        Animated.timing(
            playerTopAnimated,
            {
                toValue: 0,
                duration: DEFAULT_ANIMATION_TIME,
                easing: Easing.linear,
                useNativeDriver: false
            }
        ).start()

    }

    reduceRadio = () => {

        Animated.timing(
            playerTopAnimated,
            {
                toValue: height - 110,
                duration: DEFAULT_ANIMATION_TIME,
                easing: Easing.linear,
                useNativeDriver: false
            }
        ).start()

    }

    return (

        <Container>

            {intro && <Intro />}

            <Animated.View style={{
                position: 'absolute',
                height: height,
                width: width,
                left: containerLeft,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <Home />

            </Animated.View>

            <Animated.View style={{
                position: "absolute",
                zIndex: 6,
                height: 140,
                width: width,
                top: playerTopAnimated,
            }}>

                <PlayerPodcast />

            </Animated.View>

            <Animated.View style={{
                position: "absolute",
                zIndex: 5,
                height: height,
                width: width,
                left: modalLeftAnimated,
            }}>

                {<Modal callback={() => hideModal()} />}

            </Animated.View>

        </Container>

    )
}

export default Navigator;