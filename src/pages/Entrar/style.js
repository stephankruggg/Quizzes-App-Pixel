import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Title: {
        marginTop: 170,
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
    ForgetCreateButton: {
        width: 146,
        height: 16,
        marginLeft: 115,
        marginTop: 16
    },
    ForgetCreateText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#78746D'
    },
    BotaoEntrar: {
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