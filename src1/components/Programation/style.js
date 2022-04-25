import styled from 'styled-components'
import { Dimensions, Platform } from 'react-native'
import { DEFAULT_VIEW_COLOR, DEFAULT_VIEW_COLOR_ALPHA } from '../../helper';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    position: relative;
    height: ${height}px;
    width: ${width}px;
    background: #fdfdfd;
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
    margin-top: 70px;
    height: ${height / 5}px;
    width: ${width / 2.5}px;
    border: 2px solid #eee;
    left: ${width / 2 - width / 2.5 / 2}px;
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

export const ListPrograms = styled.TouchableOpacity`
    height: 50px;
    margin: 0px 20px 0px 20px;
    flex-direction: row;
    align-items: center;
`

export const TextHour = styled.Text`
    color: #999;
    font-size: 12px;
    font-weight: bold;
    width: 40px;
`

export const TextName = styled.Text`
    color: #222;
    flex: 1;
    text-align: left;
    padding: 0 0 0 15px;
    font-size: 18px;
    font-weight: bold;
`

