import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Alert, Image } from 'react-native';
import { styles } from '../components/Style';

export default function AjudaScreen() {
  const logo = require('../../assets/logo.png');
  
  // Função para exibir o Alert
  const handleFaleConosco = () => {
    Alert.alert(
      "Fale conosco",
      "Entre em contato pelo e-mail: suporte@cefetmg.br",
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text style={styles.titulo}>Perguntas Frequentes</Text>
        <View style={styles.cardAjuda}>
          <Text style={styles.cardTitulo}>Como acessar o SIGAA?</Text>
          <Text style={styles.cardTexto}>Acesse siga.cefetmg.br e use seu login institucional.</Text>
        </View>
        <View style={styles.cardAjuda}>
          <Text style={styles.cardTitulo}>Como solicitar declaração de matrícula?</Text>
          <Text style={styles.cardTexto}>Solicite no setor de Registro Acadêmico ou pelo SIGAA.</Text>
        </View>
        <View style={styles.cardAjuda}>
          <Text style={styles.cardTitulo}>Onde consultar minhas notas?</Text>
          <Text style={styles.cardTexto}>Todas as notas são publicadas no SIGAA.</Text>
        </View>
      <Pressable 
        style={[styles.botao, { marginTop: 30 }]} 
        onPress={handleFaleConosco}
      >
        <Text style={styles.textBotao}>Fale conosco</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
