import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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
        marginTop: 211,
        width: 341,
        marginLeft: 18,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    Input: {
        marginTop: 16,
        marginLeft: 17,
        width: 343,
        height: 53,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#BEBAB3',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 14,
        paddingLeft: 16
    },
    BotaoEnviar: {
        marginTop: 16,
        marginLeft: 17,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#82327E',
        borderRadius: 16,
        height: 56,
        width: 343
    },
    FraseBotao: {
        color: 'white',
        fontWeight: 'bold',
    }
});

export default styles