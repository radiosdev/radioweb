import styled from 'styled-components'
import { Dimensions, Platform } from 'react-native'
import { DEFAULT_VIEW_COLOR } from '../../helper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Container = styled.View`
    position: relative;
    height: ${height}px;
    width: ${width}px;
    background-color: #f1f1f1;
`

export const ViewBack = styled.TouchableOpacity`
    padding-left: 25px;
    padding-top: ${Platform.OS == 'ios' ? 50 : 25}px;
    position: absolute;
    z-index: 1; 
    display: flex;
    flex-direction: row;
`

export const TextBack = styled.Text`
    color: ${DEFAULT_VIEW_COLOR};
    font-size: 17px;
    margin: 12px 0 0 10px;
`;