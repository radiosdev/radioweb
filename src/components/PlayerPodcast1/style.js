import styled from 'styled-components'
import { Dimensions, Platform } from 'react-native'
import { DEFAULT_VIEW_COLOR, DEFAULT_VIEW_COLOR_ALPHA } from '../../helper';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    position: relative;
    height: ${height}px;
    width: ${width}px;
`

export const Backgrounds = styled.View`
    position: absolute;
    height: ${height}px;
    width: ${width}px;
`

export const Background1 = styled.View`
    height: ${height / 2.5}px;
    width: ${width}px;
    background: #000;
`

export const Background2 = styled.View`
    height: ${height / 1.5}px;
    width: ${width}px;
    background: #fff;
`

export const Header = styled.View`
    margin-top: ${Platform.OS == 'android' ? 20 : 50}px;
    padding: 10px;
`

export const Title = styled.Text`
    color: #fff;
    font-size: 23px;
    font-weight: bold;
    text-align: center;
`

export const Podcast = styled.View`
    margin-top: 50px;
    height: ${height / 2.3}px;
    width: ${width / 1.2}px;
    border: 2px solid #aaa;
    left: ${width / 2 - width / 1.2 / 2}px;
    border-radius: 40px;
    position: relative;
    overflow: hidden;
`

export const ImagePodcast = styled.Image`
    height: 100%;
    width: 100%;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    background: #fff;
`

export const Infos = styled.View`
    margin: 20px 0 0 0;
    padding: 0 20px 0 20px;
    width: ${width}px;
    position: relative;
`

export const PlayerControls = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const SelectStation = styled.TouchableOpacity`
    margin: 0 0 0 10px;
    background: #f9f9f9;
    border-radius: 10px;
    padding: 10px;
    border: 2px solid #eee;
`

export const TextStation = styled.Text`
    color: #222;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
`

export const AbsoluteView = styled.TouchableOpacity`
    height: 110px;
    background: #546f78;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 20px 0 20px;
    justify-content: space-around;
`

export const ImagePodcastMin = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 10px;
    background: #fff;
`

