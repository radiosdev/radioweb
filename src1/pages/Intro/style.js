import styled from 'styled-components'
import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    width: ${width}px;
    height: ${height}px;
    background-color: #fff;
    position: absolute;
    z-index: 2;
`