import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1, //Ocupa todo espaço disponível
        justifyContent: 'center', //Centraliza verticalmente
        alignItems: 'center', //Centraliza horizontalmente
    },
    logo: {
        width: 70,
        height: 70,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#de8d4b',
        borderWidth: 1.5,
        width: '50%',
        marginBottom: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        marginTop: 5,
        backgroundColor: '#ededed',
    },
    home: {
        flex: 1, //Ocupa todo espaço disponível
        justifyContent: 'center', //Centraliza verticalmente
        alignItems: 'center', //Centraliza horizontalmente
        backgroundColor: '#cccccc',
    },
    titulo: {
        color: '#003869',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
    },
    texto: {
        color: '#003869',
        fontSize: 22,
        marginBottom: 10,
    },
    botoesContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
    },
    botao:{
        //Definição de cores, tamanhos, bordas e posições no botão zerar
        backgroundColor: '#de8d4b',
        width: 120,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 7,
        borderColor: '#de7723',
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