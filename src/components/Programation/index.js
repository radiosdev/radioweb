import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	Container,
	Title,
	Podcast,
	ImagePodcast,
	Infos,
	ListPrograms,
	TextName,
	TextHour,
	Hours,
	Header,
	HeaderSection,
} from './style';

import {
	Image,
	FlatList,
	View,
	Text,
	BackHandler,
	Touchable,
	TouchableOpacity,
	Dimensions,
	StyleSheet,
	ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Swiper from 'react-native-swiper';
import { TIMES } from '../../helper';

const { width, height } = Dimensions.get('window');

export default function Programation() {
	const [timeString, setTimeString] = useState('Dom');

	const radioSelected = useSelector(state => state.radioSelected);

	return (
		<Container>
			<HeaderSection>

			</HeaderSection>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				style={{ paddingLeft: 10, marginBottom: 20 }}
			>
				<Podcast>
					<ImagePodcast resizeMode={'cover'} source={{ uri: radioSelected.obj.thumb }} />
				</Podcast>

				<Infos>
					<Title style={{ color: '#000' }}>{radioSelected.obj.name}</Title>
					<Title style={{ color: '#888', fontSize: 15 }}>Programação</Title>
				</Infos>

				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					style={{ paddingLeft: 10, marginBottom: 20 }}
				>
					{TIMES.map(item => {
						return (
							<Hours
								style={{ backgroundColor: timeString === item ? '#a70404' : '#555' }}
								onPress={() => setTimeString(item)}
							>
								<Text
									style={{
										color: '#fff',
										fontSize: 12,
										fontWeight: 'bold',
									}}
								>
									{item}
								</Text>
							</Hours>
						);
					})}
				</ScrollView>

				<FlatList
					style={{
						width: width,
					}}
					keyExtractor={item => `programs_${item.id}`}
					data={radioSelected.obj.programs.get(timeString) ?? []}
					renderItem={({ item }) => {
						return (
							<ListPrograms key={`list_programs_${item.id}`}>
								<TextHour>{item.hour}</TextHour>
								<TextName>{item.name}</TextName>

								<Icon name="ellipsis-h" color={'#222'} size={20} />
							</ListPrograms>
						);
					}}
					removeClippedSubviews={true}
				/>
			</ScrollView>
		</Container>
	);
}

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
