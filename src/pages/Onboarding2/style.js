import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    SkipButton: {
        marginLeft: 330,
        marginRight: 16,
        width: 32,
        height: 16,
        marginTop: 27
    },
    SkipText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#78746D'
    },
    MainImage: {
        width: 293,
        height: 206,
        marginLeft: 41,
        marginTop: 136
    },
    FirstText: {
        marginTop: 16,
        marginLeft: 39,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        width: 295
    },
    SecondText: {
        marginTop: 8,
        marginLeft: 16,
        textAlign: 'center',
        fontSize: 14,
        width: 341,
        color: '#78746D'
    },
    ViewBalls: {
        flexDirection: 'row'
    },
    ViewCurrent: {
        marginTop: 16,
        marginLeft: 12,
        width: 16,
        height: 6,
        borderRadius: 4,
        backgroundColor: '#65AAEA'
    },
    ViewFirst: {
        marginTop: 16,
        marginLeft: 162,
        width: 6,
        height: 6,
        borderRadius: 50,
        backgroundColor: '#D5D4D4'
    },
    ViewThird: {
        marginTop: 16,
        marginLeft: 12,
        width: 6,
        height: 6,
        borderRadius: 50,
        backgroundColor: '#D5D4D4'
    },
    BotaoAvancar: {
        marginTop: 106,
        marginLeft: 32,
        marginBottom: 50,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#82327E',
        borderRadius: 16,
        height: 56,
        width: 311
    },
    FraseBotao: {
        color: 'white',
        fontWeight: 'bold',
    }
});

export default styles