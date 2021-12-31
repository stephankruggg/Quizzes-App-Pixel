import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    BigView: {
        flex: 1
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
    RowType: {
        flexDirection: 'row'
    },
    Title: {
        width: 240,
        fontSize: 24,
        marginTop: 24,
        textAlign: 'center',
        marginLeft: 15,
        fontWeight: 'bold'
    },
    QuizView: {
        width: 343,
        marginLeft: 16,
        marginTop: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#BEBAB3',
        alignContent: 'center'
    },
    QuizImage: {
        borderRadius: 8,
        width: 340,
        height: 194
    },
    QuizTitle: {
        width: 311,
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 16,
        marginTop: 4
    },
    QuizDescription: {
        marginTop: 4,
        marginLeft: 16,
        marginBottom: 8,
        fontSize: 14,
        width: 311
    },
    QuizResultSucess: {
        marginLeft: 16,
        marginTop: 16,
        width: 130,
        fontWeight: 'bold',
        fontSize: 12,
        color: '#5BA092'
    },
    QuizResultFailure: {
        marginLeft: 16,
        marginTop: 16,
        width: 130,
        fontWeight: 'bold',
        fontSize: 12,
        color: '#EF4949'
    },
    QuizDate: {
        marginLeft: 60,
        marginRight: 16,
        marginTop: 16,
        textAlign: 'right',
        width: 121,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#78746D'
    },
    FlatlistView: {
        flex: 1,
        marginBottom: 3
    }
});

export default styles