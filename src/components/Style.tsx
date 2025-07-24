import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1, //Ocupa todo espaço disponível
        justifyContent: 'center', //Centraliza verticalmente
        alignItems: 'center', //Centraliza horizontalmente
        backgroundColor: '#d6d6d6',
        padding: 20,
    },
    logo: {
        width: 70,
        height: 70,
        marginBottom: 15,
    },
    input: {
        height: 45,
        borderColor: '#de8d4b',
        borderWidth: 1.5,
        width: '55%',
        marginBottom: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        marginTop: 5,
        backgroundColor: '#ededed',
    },
    titulo: {
        color: '#003869',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 5,
    },
    texto: {
        color: '#003869',
        fontSize: 22,
        marginBottom: 10,
    },
    textoDia: {
        color: '#de7723',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textoHorario: {
        fontSize: 18,
        marginTop: 2,
    },
    botao:{
        //Definição de cores, tamanhos, bordas e posições no botão zerar
        backgroundColor: '#de8d4b',
        width: 120,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 7,
        borderColor: '#de7723',
        marginBottom: 25,
    },
    textBotao:{
        fontSize: 20,
        color: '#003869',
    },
    cardContainer: {
        width: '90%',
        marginVertical: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        borderLeftWidth: 4,
        borderLeftColor: '#de8d4b',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        width: '100%', // Largura total do container pai
        minHeight: 100, // Altura mínima padrão
    },
    cardAjuda: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        borderLeftWidth: 4,
        borderLeftColor: '#de8d4b',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        width: '100%', // Largura total do container pai
        minHeight: 70, // Altura mínima padrão
    },
    cardTitulo: {
        color: '#003869',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardTexto: {
        color: '#555',
        fontSize: 14,
    },
});

//azul: #121263
//laranjas: #de7723, #de8d4b
//cinza: #cccccc