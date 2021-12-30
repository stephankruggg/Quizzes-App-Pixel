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
        width: 260,
        marginTop: 24,
        textAlign: 'center',
        height: 32,
        flex:'center',
        fontSize: 24,
        fontWeight: 'bold',
        alignContent: 'center'
    },
    Logo: {
        width: 311,
        height: 100,
        marginTop: 158,
        marginLeft: 127,
        alignContent: 'center'
    },
    Name: {
        width: '100%',
        height: 46,
        flex:'center',
        fontSize: 40,
        fontWeight: 'bold',
        alignContent: 'center',
        textAlign: 'center',
        color: '#3C3A36',
        marginTop: 16
    },
    Content: {
        height: 147,
        width: 341,
        marginTop: 40,
        fontSize: 14,
        textAlign: 'center',
        color: '#78746D',
        marginLeft: 16,
        alignContent: 'center'
    }
});

export default styles