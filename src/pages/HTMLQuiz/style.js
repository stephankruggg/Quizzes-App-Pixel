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
        width: 235,
        height: 32,
        marginLeft: 17,
        marginTop: 24,
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center'
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
        marginLeft: 291,
        borderRadius: 12,
        backgroundColor: '#65AAEA',
        justifyContent: 'center',
        alignItems: 'center',
        width: 72,
        height: 24
    },
    DificuldadeTexto: {
        color: 'white',
        fontWeight: 'bold'
    },
    Sobre: {
        width:'100%',
        height: 32,
        marginTop: 24,
        marginLeft: 16,
        marginRight: 12,
        fontWeight: 'bold',
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
        fontWeight: 'bold',
        marginLeft: 16,
        marginRight: 12, 
        fontSize: 20
    },
    Respostas: {
        marginTop: 4,
        marginLeft: 16,
        marginRight: 12,
        fontSize: 14
    },
    Botao: {
        marginTop: 53,
        marginLeft: 33,
        marginBottom: 42,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#82327E',
        borderRadius: 16,
        height: 56,
        width: 309
    },
    FraseBotao: {
        color: 'white',
        fontWeight: 'bold',
    }
});

export default styles