import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 180,
        backgroundColor: 'crimson',
        borderRadius: 20,
        margin: 5,
    },
    viewImagem: {
        width: '30%',
        padding: 10
    },
    viewDados: {
        width: '70%',
        padding: 10
    },
    imagem: {
        width: '100%',
        height: '100%',
 
    },
    nome:{
        fontSize:  25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    descricao: {
        marginBottom: 5,
        fontSize: 20
    },
    button: {
        borderRadius: 15,
        bottom: 10
    }

});
export default styles;