import React, { useCallback, useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Dimensions, FlatList, Easing, Linking, Platform, Image, View, Alert } from 'react-native';

import {
    Container,
    Page
} from './style'

import {
    DEFAULT_ANIMATION_TIME,
    DEFAULT_USER_STRUCT
} from '../../helper'

import Page1 from '../../components/Page1'
import Page2 from '../../components/Page2'
import Page3 from '../../components/Page3'

const { width, height } = Dimensions.get('window');

const Intro: React.FC = () => {

    const intro = useSelector(state => state.intro)

    const dispatch = useDispatch()

    const flatflist = useRef()

    useEffect(() => {
        //flatflist?.current?.scrollToOffset({ offset: 0, animated: true })
    }, [])

    const pages = [
        {
            id: 1, content: <Page1 next={() => {
                flatflist.current?.scrollToIndex({ index: 1, animated: true })
            }} />
        },
        {
            id: 2, content: <Page2 next={() => {
                flatflist.current?.scrollToIndex({ index: 2, animated: true })
            }} />
        },
        {
            id: 3, content: <Page3 next={() => {
                dispatch({ type: "SET_INTRO", data: false })
            }} />
        },
    ]

    return (

        <Container>


            <FlatList
                ref={flatflist}
                style={{
                    width: width,
                    height: height,
                    position: 'absolute'
                }}
                scrollEnabled={false}
                keyExtractor={item => `page_intro_${item.id}`}
                data={pages}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return item.content
                }}

                removeClippedSubviews={true} // Unmount components when outside of window 


            />

        </Container>

    )
}

export default Intro;