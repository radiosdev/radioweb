import styled from 'styled-components'
import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
flex: 1;

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
    margin: 20px 20px 40px 20px;
    background: #fff;
    border-radius: 10px;
    height: 60px;
    border: 1px solid #eee;
    justify-content: center;
    padding: 5px 20px 5px 20px;
`

export const Podcast = styled.TouchableOpacity`
width: 150px;
margin: 16px;
`

export const ImagePodcast = styled.Image`
width: 160px;
height:160px;
border-radius: 8px;
  margin-bottom: 16px;

`

export const FooterPod = styled.View`
  
    height: 35px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    justify-content: center;
    padding: 0 20px 0 20px;
`

export const NamePod = styled.Text`
font-size: 16px;
font-weight: 700;
    color: white;
`

export const CreatorPod = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #888;
`