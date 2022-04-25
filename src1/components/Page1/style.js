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
    padding-left: 25px;
    padding-right: 25px;
`

export const Text1 = styled.Text`
    color: #8991A1;
    font-size: 40px;
    margin-bottom: 10px;
`

export const Text2 = styled.Text`
    color: #121212;
    font-size: 50px;
`

export const Image1 = styled.Image`
    position: absolute;
    width: ${width / 1.1}px;
    height: ${width / 1.1 / 2}px;
    top: ${height / 2 - (width / 1.1 / 2 / 2)}px;
    left: ${width / 2 - width / 1.1 / 2}px;
    border-radius: 15px;
`

export const Novo = styled.View`
    position: absolute;
    width: ${50}px;
    height: ${30}px;
    top: ${height / 2 - (width / 1.1 / 2 / 2) + 20}px;
    left: ${width / 2 - width / 1.1 / 2 + 30}px;
    border-radius: 10px;
    background: #FB233B;
    justify-content: center;
    align-items: center;
`

export const Text3 = styled.Text`
    color: #fff;
    font-size: 10px;
    font-weight: bold;
`

export const ImageText = styled.Image`
    position: absolute;
    width: 80px;
    height: 65px;
    justify-content: center;
    align-items: center;
    z-index: 1;
    top: ${height / 2 - (width / 1.1 / 2 / 2) + 60}px;
    left: ${width / 2 - width / 1.1 / 2 + 30}px;
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


