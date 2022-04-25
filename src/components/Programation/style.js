import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';
import { DEFAULT_VIEW_COLOR, DEFAULT_VIEW_COLOR_ALPHA } from '../../helper';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex:1;
	background: #fdfdfd;
`;

export const HeaderSection = styled.View`
margin:12px 24px;
flex-direction:row;
justity-content: space-betwwen;
aligin-items: center;


	
`;

export const Podcast = styled.View`
left: 25%;
margin:50px 24px;
	height: 160px;
	width: 170px;
	border: 1px solid #D7E1F3;
	border-width:5px;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	position: relative;
	overflow: hidden;
`;

export const ImagePodcast = styled.Image`
	height: 160px;
	width: 170px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	background: #fff;
`;





export const Hours = styled.TouchableOpacity`
  margin: 20px 0 0 0;
	height: 30px;
	width: 60px;
	margin-right: 10px;
	border-radius: 5px;
	justify-content: center;
	align-items: center;
`;

export const TextDate = styled.Text`
	margin: 0 0 0 20px;
	color: #fff;
	font-size: 20px;
	font-weight: bold;
`;

export const Header = styled.View`
	margin-top: ${Platform.OS == 'android' ? 20 : 50}px;
	padding: 10px;
`;

export const Title = styled.Text`
	color: #fff;
	font-size: 23px;
	font-weight: bold;
	text-align: center;
`;



export const Infos = styled.View`
	
	
	width: ${width}px;
	position: relative;
`;

export const ListPrograms = styled.TouchableOpacity`
	height: 50px;
	margin: 0px 20px 0px 20px;
	flex-direction: row;
	align-items: center;
`;

export const TextHour = styled.Text`
margin: 20px 0 0 0;
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
