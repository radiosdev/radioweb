import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Container,
    ViewBack
} from './style'

import { BackHandler } from 'react-native'

import GestureRecognizer from 'react-native-swipe-gestures';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { DEFAULT_VIEW_COLOR } from '../../helper';

import Programation from '../Programation'

export default function Modal() {

    const modalLeft = useSelector(state => state.modalLeft)
    const dispatch = useDispatch()

    useEffect(() => {

        const backAction = () => {
            dispatch({ type: "SET_MODAL_LEFT", data: false })
            return true;
        }

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        )

        return () => backHandler.remove();

    }, []);

    onSwipeRight = () => {
        dispatch({ type: "SET_MODAL_LEFT", data: false })
    }

    return (

        <Container>

            <ViewBack onPress={() => onSwipeRight()}>
                <Icon name="arrow-left" color={"#222"} size={25} />
            </ViewBack>

            {modalLeft && <>
                {/* // <GestureRecognizer
                //     // onSwipeUp={(state) => onSwipeUp(state)}
                //     //onSwipeDown={(state) => onSwipeDown(state)}
                //     // onSwipeLeft={(state) => this.onSwipeLeft(state)}
                //     onSwipeRight={() => onSwipeRight()}
                //     config={{
                //         velocityThreshold: 0.1,
                //         directionalOffsetThreshold: 80
                //     }}
                //     style={{
                //         paddingBottom: 10
                //     }}> */}

                {modalLeft.page == 'programation' && <Programation />}

                {/* // </GestureRecognizer> */}
            </>
            }

        </Container>

    )

}