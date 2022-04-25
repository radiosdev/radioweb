import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View as MView, Text as MText, Image as MImage, AnimatePresence, motify } from 'moti';

import {
	AppRegistry,
	Dimensions,
	Animated,
	Easing,
	Linking,
	Platform,
	Image,
	View,
	Alert,
	Text,
	ScrollView,
	StyleSheet,
} from 'react-native';

import Swiper from 'react-native-swiper';

import {
	Container,
	Header,
	UserInfo,
	UserPhoto,
	ImageUser,
	Notify,
	TextTitle,
	SearchBar,
	Podcast,
	ImagePodcast,
	FooterPod,
	NamePod,
	CreatorPod,
} from './style';

import { DEFAULT_ANIMATION_TIME, DEFAULT_USER_STRUCT, TIMES } from '../../helper';

import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavBar from '../../helper/components/NavBar';
import BigCard from '../../helper/components/BigCard';
import Button from '../../helper/components/Button';
import PlaylistCard from '../../helper/components/PlaylistCard';
import TabBar from '../../helper/components/TabBar';
import styled from 'styled-components/native';



const StatusBar = styled.StatusBar.attrs(() => ({
	backgroundColor: 'black',
}))``;

const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const Title = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: 700;
`;

const HorizontalScrollView = styled.ScrollView``;
const VerticalScrollView = styled.ScrollView`
  flex-grow: 1;
  margin-bottom: 80px;
`;
const HorizontalRow = styled.View`
  flex-direction: row;
`;

const { width, height } = Dimensions.get('window');

const Home = () => {
	const user = useSelector(state => state.user);
	const alert = useSelector(state => state.alert);

	const dispatch = useDispatch();

	const [podcasts, setPodcasts] = useState([]);

	const [containerLeft] = useState(new Animated.Value(0));
	const [modalAnimated, setModalAnimated] = useState(new Animated.Value(height));

	function handlePodcast(item) {
		// dispatch({ type: 'SET_MODAL_LEFT', data: { page: 'podcast', obj: item } })
		dispatch({ type: 'SET_RADIO_SELECTED', data: { action: 'open', obj: item } });
	}

	useEffect(() => {
		(async () => {
			const response = await fetch('https://radio-tunga.herokuapp.com/podcasts');
			const json = await response.json();

			setPodcasts(
				json.map(item => {
					let programs = new Map();

					for (let [key, value] of Object.entries(item.programs)) {
						programs.set(key, value);
					}

					item.programs = programs;

					return item;
				})
			);
		})();
	}, []);

	return (





		<LinearGradient colors={['#596164', '#000000']}>


			<Container>


				<ScrollView>
					<View style={{ flex: 1 }}>
						<View style={{ width: width, alignItems: 'center' }}>
							<Image
								style={{ height: 60, width: width / 2, margin: 10 }}
								resizeMode="contain"
							/>
							<Swiper
								style={{ height: width / 2 }}
								showsButtons={false}
								autoplay={true}
								autoplayTimeout={2}
							>
								<View>
									<Image
										style={styles.imageBanner}
										resizeMode="contain"
										source={require('../../asset/Img.png')}
									/>
								</View>
								<View style={styles.slide2}>
									<Image
										style={styles.imageBanner}
										resizeMode="contain"
										source={require('../../asset/Img.png')}
									/>
								</View>
								<View style={styles.slide3}>
									<Image
										style={styles.imageBanner}
										resizeMode="contain"
										source={require('../../asset/Img.png')}
									/>
								</View>


							</Swiper>
						</View>
					</View>
				</ScrollView>
				<TitleContainer>
					<Title>Progamas</Title>
				</TitleContainer>

				<HorizontalScrollView horizontal={true}>
					<BigCard
						song="Liga pra rádio"
						album="Com Bia"
						albumArt="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
					/>
					<BigCard

						song="Conselhos da Bijú"
						album="Com Josimar"
						albumArt="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
					/>
					<BigCard
						song="Conselhos da Bijú"
						album="Com Josimar"
						albumArt="https://lh3.googleusercontent.com/proxy/rpjeGGiaKHskCPlcqZArNndX1172pqK-OAA8iJEB26GOCeNWNQzZxozmgxdOzWNHt10KRonCZhpI2EeYjGwoqgS6Av6Dsy0TI-VQZHB-4-1eE0YpScWPdpmREOr8uQN89A"
					/>
				</HorizontalScrollView>

				<TitleContainer>
					<Title>Radios Em Alta</Title>

				</TitleContainer>


				<ScrollView
					horizontal={true}
					style={{
						marginRight: 20,
					}}
				>
					{podcasts.map(item => {
						return (
							<Podcast key={item.id} onPress={() => handlePodcast(item)}>
								<ImagePodcast
									resizeMode={'stretch'}
									source={{ uri: item?.thumb }}
								/>
								<FooterPod>
									<NamePod>{item.name}</NamePod>


								</FooterPod>
							</Podcast>
						);
					})}
				</ScrollView>






				<TextTitle>Popular</TextTitle>


			</Container>

		</LinearGradient>

	);
};

const styles = StyleSheet.create({
	cardView: {
		flex: 1,
		width: width - 20,
		height: height / 3,
		backgroundColor: 'white',
		margin: 10,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0.5, height: 0.5 },
		shadowOpacity: 0.5,
		shadowRadius: 3,
		elevation: 5,
	},

	textView: {
		position: 'absolute',
		bottom: 10,
		margin: 10,
		left: 5,
	},
	image: {
		width: width - 20,
		height: height / 3,
		borderRadius: 10,
	},
	itemTitle: {
		color: 'white',
		fontSize: 22,
		shadowColor: '#000',
		shadowOffset: { width: 0.8, height: 0.8 },
		shadowOpacity: 1,
		shadowRadius: 3,
		marginBottom: 5,
		fontWeight: 'bold',
		elevation: 5,
	},
	itemDescription: {
		color: 'white',
		fontSize: 12,
		shadowColor: '#000',
		shadowOffset: { width: 0.8, height: 0.8 },
		shadowOpacity: 1,
		shadowRadius: 3,
		elevation: 5,
	},
	wrapper: {},
	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	slide2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	slide3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},
	imageBanner: {
		height: width / 2,
		width: width - 40,
		borderRadius: 10,
		marginHorizontal: 20,
	},
});

export default Home;