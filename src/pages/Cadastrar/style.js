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
        marginTop: 112,
        width: 341,
        marginLeft: 18,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    SubTitle: {
        marginTop: 8,
        marginLeft: 17,
        width: 341,
        height: 21,
        textAlign: 'center',
        color: '#78746D'
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
    EntrarButton: {
        width: 146,
        height: 16,
        marginLeft: 115,
        marginTop: 16
    },
    EntrarButtonText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#78746D'
    },
    BotaoCadastrar: {
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