import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Visualization: {
        flexDirection: 'row'
    },
    Back: {
        borderRadius: 50,
        height: 40,
        width: 40,
        marginLeft: 16,
        marginTop: 20,
        borderColor: '#BEBAB3',
        borderWidth: 1,
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 11
    },
    IconView: {
        width: 32,
        height: 32,
        borderRadius: 70,
        backgroundColor: '#65AAEA',
        marginTop: 25,
        marginLeft: 16,
        paddingTop: 6,
        alignContent: 'center',
        alignItems: 'center'
    },
    Title: {
        marginTop: 24,
        width: 270,
        textAlign: 'center',
        fontWeight: 'bold',
        style: 'normal',
        fontSize: 24,
        alignContent: 'center'
    },
    Description: {
        marginTop: 28,
        fontWeight: 'bold',
        marginLeft: 16,
        fontSize: 20,
    },
    AllButtons: {
        marginTop: 16,
        marginLeft: 16,
        width: 343,
        height: 82,
        borderColor: '#BEBAB3',
        borderWidth: 1,
        borderRadius: 16,
        alignContent: 'center'
    },
    ButtonTitle: {
        marginTop: 17,
        marginLeft: 12,
        fontSize: 20,
        width: 235,
        fontWeight: 'bold'
    },
    ButtonProfile: {
        marginTop: 28,
        marginLeft: 12,
        fontSize: 20,
        width: 235,
        fontWeight: 'bold'
    },
    ButtonDescription: {
        marginLeft: 12,
        fontSize: 14,
        width: 235,
        color: '#78746D'
    },
    Arrow: {
        marginTop: 33,
        marginLeft: 16,
        marginRight: 24,
        color: "#BEBAB3" 
    }
});

export default styles