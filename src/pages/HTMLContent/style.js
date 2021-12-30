import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    NumeroPergunta: {
        width: 50,
        marginLeft: 168,
        marginTop: 83,
        fontSize: 16,
        textAlign: 'center',
        color: '#78746D'
    },
    Pergunta: {
        width: 343,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#3C3A36'
    },
    Imagem: {
        borderWidth: 1,
        borderRadius: 8,
        marginLeft: 16,
        marginTop: 16,
        width: 343,
        height: 191,
    },
    BotaoResposta: {
        marginTop: 16,
        width: 343,
        height: 58,
        marginLeft: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#BEBAB3',
    },
    TextoResposta: {
        marginTop: 16,
        marginLeft: 24,
        fontSize: 16
    },
    BotaoContinuar: {
        marginTop: 61,
        marginLeft: 33,
        marginBottom: 40,
        width: 309,
        height: 56,
        backgroundColor: '#82327E',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextoContinuar: {
        width: 245,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    }
});

export default styles