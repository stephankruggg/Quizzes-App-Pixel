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
        marginTop: 24,
        width: 270,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        alignContent: 'center'
    },
    Result: {
        marginTop: "50%",
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 56,
        alignContent: 'center'
    },
    SecondTitle: {
        marginTop: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        alignContent: 'center'
    },
    Texticle: {
        marginTop: 8,
        marginLeft: 16,
        marginRight: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 14,
        alignContent: 'center',
        color: '#78746D'
    },
    Finish: {
        marginBottom: 40,
        marginTop: '35%',
        textAlign: 'center',
        backgroundColor: '#82327E',
        borderRadius: 16,
        paddingBottom: 16,
        paddingLeft: 32,
        alignContent: 'center',
        marginLeft: 34,
        marginRight: 32,
        width: 309,
        height: 56
    },
    TextFinish: {
        marginTop: 16,
        marginLeft: 32,
        textAlign: 'center',
        width: 175,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default styles