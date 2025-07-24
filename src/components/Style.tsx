import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1, //Ocupa todo espaço disponível
        justifyContent: 'center', //Centraliza verticalmente
        alignItems: 'center', //Centraliza horizontalmente
        backgroundColor: '#d6d6d6',
    },
    logo: {
        width: 70,
        height: 70,
        marginBottom: 15,
    },
    input: {
        height: 40,
        borderColor: '#de8d4b',
        borderWidth: 1.5,
        width: '50%',
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
        fontSize: 23,
        marginTop: 15,
    },
    textoHorario: {
        fontSize: 17,
        marginTop: 2,
    },
    botoesContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
    },
    noticiasContainer: {
        justifyContent: 'center', //Centraliza verticalmente
        alignItems: 'center', //Centraliza horizontalmente
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
        //Definição de cor e tamanho do texto 'ZERAR' do botão zerar
        fontSize: 20,
        color: '#003869',
    },
});

//azul: #121263
//laranjas: #de7723, #de8d4b
//cinza: #cccccc