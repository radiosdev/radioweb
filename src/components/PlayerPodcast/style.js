import styled from 'styled-components'
import { Dimensions, Platform } from 'react-native'
import { DEFAULT_VIEW_COLOR, DEFAULT_VIEW_COLOR_ALPHA } from '../../helper';
import { BlurView } from '@react-native-community/blur';

const { width, height } = Dimensions.get('window');


const StyledBlurView = styled(BlurView)`
  height: 80px;
`;

export const Container = styled.View`
    position: relative;
    height: ${height}px;
    width: 100%;
`

export const Touch = styled.TouchableOpacity`
    
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    align-items: center;
    justify-content: center;
`

export const Circle = styled.View`
    height: 100;
    width: 100;
    background-color: ${(props) => props.bgColor};
    padding: 32px;
    border-radius: 999px;
    align-items: center;
    justify-content: center;
`

export const TouchButton = styled.View`
    height: 50;
    width: 50;
    background-color: #29323c;
    padding: 8px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    
`


export const Backgrounds = styled.View`
    position: absolute;
    height: ${height}px;
    width: ${width}px;
`

export const Background1 = styled.View`
    height: ${height / 2.5}px;
    width: ${width}px;
    background: #73b7f3;
`

export const Background2 = styled.View`
    height: ${height / 1.5}px;
    width: ${width}px;
    background: #73b7f3;
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
    left: 25%;
    margin:50px 24px;
	height: 160px;
	width: 170px;
	
	
    
  
`

export const ImagePodcast = styled.Image`
height: 280px;
width: 280px;

align-items: center;
justify-content: center;


`


export const TouchImage = styled.TouchableOpacity`
    

    align-items: center;
    justify-content: center;
`

export const CircleImage = styled.View`
    
    background-color: ${(props) => props.bgColor};
    padding: 32px;
    border-radius: 999px;
    align-items: center;
    justify-content: center;
`

export const TouchButtonImage = styled.View`
    
    background-color: #5196f4;
    padding: 8px;
   
    align-items: center;
    justify-content: center;
    
`




export const PodcastBack = styled.Image`
   
    
    background: red;
`

export const Infos = styled.View`
    margin: 20px 0 0 0;
    padding: 0 20px 0 20px;
    width: ${width}px;
    position: relative;
`

export const Hours = styled.TouchableOpacity`
  margin: 20px 0 0 0;
	height: 30px;
	width: 60px;
	margin-right: 10px;
	border-radius: 5px;
	justify-content: center;
	align-items: center;
`;

export const PlayerControls = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
   
`

export const ListPrograms = styled.TouchableOpacity`
	height: 30px;
	margin: 0px 20px 0px 20px;
	flex-direction: row;
	align-items: center;
`;

export const TextHour = styled.Text`
margin: 10px 0 0 0;
	height: 30px;
	width: 25%;
	margin-right: 10px;
	border-radius: 5px;
	justify-content: center;
	align-items: center;
	
`;

export const TextName = styled.Text`
	color: #222;
	flex: 1;
	text-align: left;
	padding: 0 0 0 15px;
	font-size: 18px;
	font-weight: bold;
`;

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
    background: #222;
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
    
    
`

