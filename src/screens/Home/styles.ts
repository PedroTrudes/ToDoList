import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 55,
        alignItems: 'center',
    },
    containerImage: {
        backgroundColor: '#000',
        height: 170,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerForm: {
        position: 'relative',    
        backgroundColor: '#191919',  
        width: '100%' 
    },
    form: {
        alignItems: 'center',
        flexDirection: 'row',
        top: -25,
        left: 40
    },
    formInput: {
        width: 275,
        height: 54,
        backgroundColor: "#262626",
        color: "#F2F2F2",
        borderRadius: 6,
        paddingLeft: 15,
        fontSize: 16
    },
    formButton: {
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56
    },
    containerList:{
        backgroundColor: '#191919',
        flex: 1,
        width: '100%'
    },
    containerItens: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 40,
        paddingRight: 40
    },
    item: {
        flexDirection: 'row',
    },
    
    itemNumber: {
        marginLeft: 5,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 6,
        paddingRight: 6,
        backgroundColor: '#333333',
        borderRadius: 18,
        color: '#D9D9D9'
    }
})