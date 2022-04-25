import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Container,
    Backgrounds,
    Background1,
    Background2,
    Header,
    Title,
    Podcast,
    ImagePodcast,
    Infos,
    PlayerControls,
    ViewLoader,
    SelectStation,
    TextStation,
    AbsoluteView,
    ImagePodcastMin
} from './style'

import { Animated, Easing, BackHandler, Touchable, TouchableOpacity, Dimensions } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import LottieView from 'lottie-react-native';
import Video from 'react-native-video';
import { DEFAULT_ANIMATION_TIME } from '../../helper'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const { width, height } = Dimensions.get('window');

export default function PlayerPodcast() {

    const dispatch = useDispatch()

    const radioSelected = useSelector(state => state.radioSelected)

    const [config, setConfig] = useState(false)
    const [stations, setStations] = useState([])
    const [lottieLeft] = useState(new Animated.Value(0))
    const [configLeft] = useState(new Animated.Value(width))

    const [isLoaded, setIsLoaded] = useState(false)

    const videoPlayer = useRef()
    const [playing, setPlaying] = useState(true);
    const [uriPlaying, setUriPlaying] = useState(null)

    const lottiesound = useRef()

    const [rotateAnimated, setRotateAnimated] = useState(new Animated.Value(0))
    const [iconPlayer, setIconPlayer] = useState("sync-alt")

    const anime = useRef(
        Animated.loop(
            Animated.timing(
                rotateAnimated,
                {
                    toValue: 1,
                    duration: 1500,
                    easing: Easing.linear,
                    useNativeDriver: true
                }
            )
        )
    )?.current

    useEffect(() => {

        if (radioSelected) {

            if (radioSelected?.action == 'open' || radioSelected?.action == 'change') {

                setIconPlayer("sync-alt")
                anime?.reset()
                anime?.start()
                lottiesound?.current?.pause()
                setStations(radioSelected.obj.urls)
                setUriPlaying(radioSelected?.obj.urls[0].uri)

            }

            if (radioSelected?.action == 'relative' && playing) {
                lottiesound?.current?.play()
            }

        }

    }, [radioSelected])

    hideConfigs = () => {

        Animated.timing(
            lottieLeft,
            {
                toValue: 0,
                duration: DEFAULT_ANIMATION_TIME,
                easing: Easing.linear,
                useNativeDriver: false
            }
        ).start()

        Animated.timing(
            configLeft,
            {
                toValue: width,
                duration: DEFAULT_ANIMATION_TIME,
                easing: Easing.linear,
                useNativeDriver: false
            }
        ).start()

        setConfig(false)

    }

    showConfigs = () => {

        Animated.timing(
            lottieLeft,
            {
                toValue: -width,
                duration: DEFAULT_ANIMATION_TIME,
                easing: Easing.linear,
                useNativeDriver: false
            }
        ).start()

        Animated.timing(
            configLeft,
            {
                toValue: 0,
                duration: DEFAULT_ANIMATION_TIME,
                easing: Easing.linear,
                useNativeDriver: false
            }
        ).start()

        setConfig(true)
    }

    handleAbsolute = () => {
        dispatch({ type: 'SET_RADIO_SELECTED', data: { action: 'absolute', obj: radioSelected.obj } })
    }

    handleRelative = () => {
        dispatch({ type: 'SET_RADIO_SELECTED', data: { action: 'relative', obj: radioSelected.obj } })
    }

    handleModal = () => {
        handleAbsolute()

        setTimeout(() => {
            dispatch({ type: 'SET_MODAL_LEFT', data: { page: 'programation', obj: radioSelected.obj } })
        }, 300)


    }

    return (

        <Container>

            {(radioSelected?.action == 'open' || radioSelected?.action == 'relative') &&
                <>

                    <Backgrounds>
                        <Background1 />
                        <Background2 />
                    </Backgrounds>

                    <Header>

                        <TouchableOpacity
                            style={{ position: 'absolute', zIndex: 1, left: 15, top: 15 }}
                            onPress={() => handleAbsolute()}>
                            <Icon name={"arrow-down"} color="#888" size={25} />
                        </TouchableOpacity>

                        <Title>Reproduzindo</Title>

                        <Icon style={{ position: 'absolute', right: 15, top: 15 }} name={"heart"} color="#888" size={25} />

                    </Header>

                    <Podcast>
                        <ImagePodcast resizeMode={'cover'} source={radioSelected.obj.thumb} />
                    </Podcast>

                    <Infos>
                        <Title style={{ color: '#000', textAlign: 'left' }}>{radioSelected.obj.name}</Title>
                        <Title style={{ color: '#888', textAlign: 'left', fontSize: 15 }}>By Someone</Title>

                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                width: 40,
                                height: 40,
                                zIndex: 2,
                                right: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#000',
                                borderWidth: 2,
                                borderColor: '#eee',
                                borderRadius: 10
                            }}
                            onPress={() => handleModal()}>

                            <Icon name={"info"} color="#fff" size={20} />

                        </TouchableOpacity>

                    </Infos>

                    <Infos
                        style={{ height: 100, width: width, overflow: 'hidden', }}
                    >

                        <Animated.View
                            style={{
                                position: 'absolute',
                                height: 100,
                                width: width,
                                left: lottieLeft,
                            }}>

                            <LottieView
                                ref={lottiesound}
                                source={require('../../asset/lottiefiles/play.json')}
                                loop />

                        </Animated.View>

                        <Animated.View
                            style={{
                                position: 'absolute',
                                height: 100,
                                width: width,
                                left: configLeft,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}>

                            {stations.map(item => {

                                return (
                                    <SelectStation
                                        key={`station_${item.name}`}
                                        onPress={() => {
                                            lottiesound?.current.pause()
                                            setPlaying(true)
                                            setUriPlaying(item.uri)
                                            setIconPlayer("sync-alt")
                                            anime.reset()
                                            anime.start()
                                            hideConfigs()
                                        }}
                                    >
                                        <TextStation>{item.name}</TextStation>
                                    </SelectStation>
                                )

                            })}

                        </Animated.View>

                    </Infos>

                    <PlayerControls>

                        <TouchableOpacity style={{
                            backgroundColor: '#000',
                            borderRadius: 100,
                            height: 80,
                            width: 80,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                            onPress={() => {

                                if (!isLoaded) return;

                                anime?.reset()
                                anime?.stop()

                                if (playing) {
                                    setIconPlayer("play")
                                    lottiesound?.current.pause()
                                }
                                else {
                                    setIconPlayer("pause")
                                    lottiesound?.current.resume()
                                }

                                setPlaying(!playing)
                            }}
                        >

                            <Animated.View
                                style={{
                                    transform: [{
                                        rotate: rotateAnimated.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ['0deg', '360deg']
                                        })
                                    }]
                                }}>
                                <Icon name={iconPlayer} color="#fff" size={25} />

                            </Animated.View>

                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            position: 'absolute',
                            height: 40,
                            width: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            left: width / 2 + 80,
                            top: 20
                        }}
                            onPress={() => {
                                if (!config) {
                                    showConfigs()
                                } else {
                                    hideConfigs()
                                }
                            }}
                        >

                            <Icon name={"sliders-h"} color="#aaa" size={30} />

                        </TouchableOpacity>

                    </PlayerControls>

                </>}

            {
                radioSelected?.action == 'absolute' &&
                <AbsoluteView
                    onPress={() => handleRelative()}
                >
                    <ImagePodcastMin resizeMode={'cover'} source={radioSelected.obj.thumb} />
                    <Title style={{ color: '#fff', fontSize: 15 }}>{radioSelected.obj.name}</Title>

                    <TouchableOpacity style={{
                        backgroundColor: '#fff',
                        borderRadius: 100,
                        height: 50,
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                        onPress={() => {

                            if (!isLoaded) return;

                            anime?.reset()
                            anime?.stop()

                            if (playing) {
                                setIconPlayer("play")
                            }
                            else {
                                setIconPlayer("pause")
                            }

                            setPlaying(!playing)
                        }}
                    >

                        <Animated.View
                            style={{
                                transform: [{
                                    rotate: rotateAnimated.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '360deg']
                                    })
                                }]
                            }}>

                            <Icon name={iconPlayer} color="#222" size={25} />

                        </Animated.View>

                    </TouchableOpacity>

                </AbsoluteView>
            }

            {
                uriPlaying && <Video
                    ref={videoPlayer}
                    source={{
                        uri: uriPlaying
                    }}
                    playInBackground={true}
                    bufferConfig={{
                        minBufferMs: 2000,
                        maxBufferMs: 40000,
                        bufferForPlaybackMs: 500,
                        bufferForPlaybackAfterRebufferMs: 5000
                    }}
                    ignoreSilentSwitch="ignore"
                    paused={!playing}
                    onError={(error) => {
                        console.log('errors')
                        console.log(error)
                    }}
                    onLoadStart={() => {
                        console.log('start')
                        setIsLoaded(false)
                    }}
                    onLoad={() => {
                        setIsLoaded(true)
                        anime?.stop()
                        anime?.reset()
                        setIconPlayer("pause")
                        lottiesound?.current?.resume()
                    }}
                />
            }

        </Container >

    )

}