import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
        backgroundColor: '#FFF',
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
    },
    form: {
        alignItems: 'center',
        flexDirection: 'row',
        top: -25,
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
        //paddingTop: 11,
        //paddingBottom: 11,
        //paddingLeft: 14,
        //paddingRight: 14
    },
    containerList:{
        
    }
})