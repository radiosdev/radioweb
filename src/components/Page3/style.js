import styled from 'styled-components'
import { Dimensions, Platform } from 'react-native'
import { DEFAULT_VIEW_COLOR, DEFAULT_VIEW_COLOR_ALPHA } from '../../helper';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    position: relative;
    height: ${height}px;
    width: ${width}px;
    background: #fff;
    padding-top: ${Platform.OS == 'android' ? 30 : 60}px;
`

export const Text1 = styled.Text`
    color: #8991A1;
    font-size: 16px;
    margin-top: 30px;
    text-align: center;
    padding-left: 25px;
    padding-right: 25px;
`

export const Text2 = styled.Text`
    color: #121212;
    font-size: 32px;
    text-align: center;
    padding-left: 25px;
    padding-right: 25px;
`

export const Image1 = styled.Image`
    width: ${width}px;
    margin-bottom: 50px;
    /* height: ${width / 4}px; */
`

export const ButtonNext = styled.TouchableOpacity`
    position: absolute;
    background: #00A1DB;
    width: 63px;
    height: 63px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    bottom: 60px;
    z-index: 2;
    left: ${width / 2 - 31.5}px;
`

export const Image2 = styled.Image`
    position: absolute;
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
    bottom: 41px;
    left: ${width / 2 - 50}px;
`