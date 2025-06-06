import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const screenSize = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333',
        flexDirection: 'row',
        margin: 4,
        minHeight: 50,
        boxSizing: 'border-box',
        padding: 16,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#4EA8DE',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 18,
        borderRadius: 20,
    },
    checkedBox: {
        backgroundColor: '#5E60CE',
        borderColor: '#5E60CE'
    },
    cardText: {
        minWidth: screenSize * 0.7,
        maxWidth: screenSize * 0.7,
        color: '#F2F2F2',
        fontSize: 17,
        flexWrap: 'wrap',
        paddingLeft: 14,
        paddingRight: 14
    },
    cardTextChecked: {
        textDecorationLine: 'line-through',
        color: '#808080'
    },
    cardIconActive: {
        opacity: 1
    },
    cardIcon: {
        opacity: 0
    }
})