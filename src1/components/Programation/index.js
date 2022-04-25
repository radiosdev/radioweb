import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Container,
    Title,
    Podcast,
    ImagePodcast,
    Infos,
    ListPrograms,
    TextName,
    TextHour
} from './style'

import { FlatList, View, BackHandler, Touchable, TouchableOpacity, Dimensions } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

const { width, height } = Dimensions.get('window');

export default function Programation() {

    const radioSelected = useSelector(state => state.radioSelected)

    return (

        <Container>

            <Podcast>
                <ImagePodcast resizeMode={'cover'} source={radioSelected.obj.thumb} />
            </Podcast>

            <Infos>

                <Title style={{ color: '#000' }}>{radioSelected.obj.name}</Title>
                <Title style={{ color: '#888', fontSize: 15 }}>Programação</Title>

            </Infos>

            <FlatList
                style={{
                    marginTop: 20,
                    width: width,
                    marginBottom: 120
                }}
                keyExtractor={item => `programs_${item.id}`}
                data={radioSelected.obj.programs}
                renderItem={({ item }) => {

                    return (
                        <ListPrograms key={`list_programs_${item.id}`}>

                            <TextHour>{item.hour}</TextHour>
                            <TextName>{item.name}</TextName>

                            <Icon name="ellipsis-h" color={"#222"} size={20} />

                        </ListPrograms>
                    )

                }}

                removeClippedSubviews={true}
            />

        </Container >

    )

}