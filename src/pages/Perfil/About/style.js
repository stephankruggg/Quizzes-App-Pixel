import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Title: {
        width: '100%',
        height: 32,
        flex:'center',
        fontFamily: 'rubik',
        fontSize: 24,
        fontWeight: 500,
        alignContent: 'center'
    },
    Logo: {
        flex: 1,
        width: 311,
        height: 311,
        marginTop: 158,
        marginLeft: 127,
        alignContent: 'center'
    },
    Name: {
        width: '100%',
        height: 46,
        fontFamily: 'rubik',
        flex:'center',
        fontSize: 40,
        fontWeight: 'bold',
        alignContent: 'center',
        textAlign: 'center',
        color: '#3C3A36',
        marginTop: 16
    },
    Content: {
        flex: 1,
        height: 147,
        marginTop: 40,
        fontSize: 14,
        fontFamily: 'rubik',
        textAlign: 'center',
        color: '#78746D',
        marginLeft: 16,
        alignContent: 'center'
    }
});

export default styles