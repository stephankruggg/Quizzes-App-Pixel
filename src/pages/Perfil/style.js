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
    Title: {
        width: 232,
        height: 32,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 17,
        marginTop: 25,

    },
    Avatar: {
        marginTop: 52,
        marginLeft: 117,
        borderWidth: 4,
        borderColor: '#65AAEA',
        borderRadius: 80,
        alignContent: 'center',
        width: 140,
        height: 140
    },
    HistButton: {
        width: 343,
        height: 80,
        borderRadius: 16,
        borderWidth: 1,
        marginTop: 32,
        marginLeft: 16,
        borderColor: '#BEBAB3'
    },
    AboutButton: {
        width: 343,
        height: 80,
        borderRadius: 16,
        borderWidth: 1,
        marginTop: 16,
        marginLeft: 16,
        borderColor: '#BEBAB3'
    },
    ButtonText: {
        marginLeft: 16,
        marginTop: 24,
        fontSize: 24,
        fontWeight: 'bold',
        width: 311,
        height: 32,
        textAlign: 'center'
    }
});

export default styles