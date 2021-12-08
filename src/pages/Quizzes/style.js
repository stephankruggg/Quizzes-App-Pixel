import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Hello: {
        width:"100%",
        fontSize:16,
        paddingLeft:16,
        paddingRight:16,
        paddingTop:51
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
    }
});

export default styles