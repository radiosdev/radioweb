import styled from 'styled-components'
import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    width: ${width}px;
    height: ${height}px;
`

export const Header = styled.View`
    margin-top: ${Platform.OS == 'android' ? 30 : 60}px;
    display: flex;
    flex-direction: row;
    padding: 0 20px 0 20px;
    height: 100px;
    align-items: center;
`

export const UserPhoto = styled.View`
    
    border-radius: 25px;
    height:75px;
    width: 75px;
    overflow: hidden;
`
export const ImageUser = styled.Image`
    height: 100%;
    width: 100%;
`

export const UserInfo = styled.View`
    height: 75px;
    flex: 1;
    justify-content: center;
    padding: 0 20px 0 20px;
`

export const Notify = styled.View`
    height:75px;
    width: 75px;
    justify-content: center;
    align-items: center;
`

export const TextTitle = styled.Text`
    margin: 20px 20px 10px 20px;
    font-size: 30px;
    font-weight: bold;
`

export const SearchBar = styled.View`
    margin: 20px 20px 10px 20px;
    background: #fff;
    border-radius: 10px;
    height: 60px;
    border: 1px solid #eee;
    justify-content: center;
    padding: 5px 20px 5px 20px;
`

export const Podcast = styled.TouchableOpacity`
    height: 230px;
    width: 230px;
    border: 2px solid #eee;
    margin-left: 20px;
    border-radius: 20px;
    overflow: hidden;
`

export const ImagePodcast = styled.Image`
    height: 150px;
    width: 230px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: #fff;
`

export const FooterPod = styled.View`
    background: #f9f9f9;
    height: 80px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    justify-content: center;
    padding: 0 20px 0 20px;
`

export const NamePod = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #222;
`

export const CreatorPod = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #888;
`