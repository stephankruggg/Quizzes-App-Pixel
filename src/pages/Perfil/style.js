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
    Avatar: {
        marginTop: 61,
        alignContent: 'center'
    },
    HistButton: {
        flex: 1,
        width: 343,
        height: 80,
        alignItems: 'center',
        alignContent: 'center',
        paddingLeft: 16,
        paddingTop: 24,
        borderRadius: 16,
        marginTop: 32
    },
    AboutButton: {
        flex: 1,
        width: 343,
        height: 80,
        alignItems: 'center',
        alignContent: 'center',
        paddingLeft: 16,
        paddingTop: 24,
        borderRadius: 16,
        marginTop: 16
    }
});

export default styles