import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1, //Ocupa todo espaço disponível
        justifyContent: 'center', //Centraliza verticalmente
        alignItems: 'center', //Centraliza horizontalmente
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '50%',
        marginBottom: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        marginTop: 5,
        backgroundColor: '#fff',
    },
    home: {
        flex: 1, //Ocupa todo espaço disponível
        justifyContent: 'center', //Centraliza verticalmente
        alignItems: 'center', //Centraliza horizontalmente
        backgroundColor: '#cccccc',
    },
    titulo: {
        color: '#121263',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    texto: {
        color: '#de7723',
        fontSize: 20,
        marginBottom: 20,
    },
    botao: {

    },
});

//azul: #121263
//laranja: #de7723
//cinza: #cccccc