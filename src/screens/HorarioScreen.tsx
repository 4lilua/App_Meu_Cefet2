import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { styles } from '../components/Style';

export default function HorarioScreen({route}: any) {
  const logo = require('../../assets/logo.png');
  const {aluno} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text>Olá, {aluno}! Aqui estão os seus horários</Text>
      <Text>
      Segunda: Sociologia - 07h às 08h40
      Terça: Física - 7h às 9h40
      Quarta: Português - 9h às 8h40
      Quinta: Português - 9h às 8h40
      Sexta: Português - 9h às 8h40
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}