import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Title: {
        width: '100%',
        height: 32,
        flex:'center',
        fontSize: 24,
        fontWeight: 500,
        alignContent: 'center'
    },
    Cover: {
        width:"100%",
        height: 257,
        marginLeft:2,
        marginRight:2,
        marginTop:20
    },
    Dificuldade: {
        marginTop: 32,
        alignContent: 'flex-end',
        marginRight: 12,
        borderRadius: 12,
        backgroundColor: '#65AAEA',
        justifyContent: 'center',
        alignItems: 'center',
        width: 72,
        height: 24
    },
    Sobre: {
        width:'100%',
        height: 32,
        marginLeft: 16,
        marginRight: 12,
        fontWeight: 500,
        fontSize: 24
    },
    Texto: {
        marginTop: 4,
        marginLeft: 16,
        marginRight: 12,
        fontSize: 14
    },
    Perguntas: {
        marginTop: 24,
        marginLeft: 16,
        marginRight: 12, 
        fontSize: 20,
        fontWeight: 500,
    },
    Respostas: {
        marginTop: 4,
        marginLeft: 16,
        marginRight: 12,
        fontSize: 14
    },
    Botao: {
        marginTop:53,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#82327E',
        borderRadius: 16,
        height: 56,
        width: 309
    }
});

export default styles