import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    BigView: {
        flex: 1
    },
    Hello: {
        width:"100%",
        fontSize:16,
        paddingLeft:16,
        paddingRight:16,
        paddingTop:35
    },
    Nome: {
        width:'100%',
        paddingTop:4,
        paddingRight:16,
        paddingLeft:16,
        fontSize:32,
        fontWeight:'bold',
        color:'#333333'
    },
    BigBlueButtonView: {
        marginTop:12,
        flexDirection:'row'
    },
    Search: {
        marginTop: 12,
        marginRight: 16,
        marginLeft: 16,
        width: 343,
        height: 56, 
        paddingLeft: 16,
        paddingRight: 56,
        paddingTop: 17,
        paddingBottom: 17,
        borderWidth: 1,
        borderRadius: 12,
        alignContent: 'center',
        alignItems: 'center'
    },
    BigBlueButton: {
        width:70,
        borderRadius:12,
        backgroundColor:'#65AAEA',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginLeft:16,
        marginTop:4,
        paddingBottom:3,
        paddingTop:3,
        paddingLeft:11,
        paddingRight:11
    },
    TextBigBlueButton: {
        color:'#F2F2F2'
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
        marginTop: 16
    },
    QuizDescription: {
        marginTop: 4,
        marginLeft: 16,
        marginBottom: 8,
        fontSize: 14,
        width: 311
    },
    FlatlistView: {
        flex: 1,
        marginBottom: 93
    }
});

export default styles