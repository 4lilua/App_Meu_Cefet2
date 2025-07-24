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
      <Text style={styles.texto}>Olá, {aluno}! Aqui estão os seus horários</Text>
      <Text style={styles.textoDia}>Segunda:</Text>
      <Text style={styles.textoHorario}>
        Sociologia - 07h às 08h40 {"\n"}
        Rede de Computadores - 09h às 10h40 {"\n"}
        LMMDC - 10h50 às 12h30
      </Text>
      <Text style={styles.textoDia}>Terça:</Text>
      <Text style={styles.textoHorario}>
        Física - 7h às 8h40 {"\n"}
        Aplicações Web II - 09h às 10h40 {"\n"}
        Aplicações Móveis - 10h50 às 12h30
      </Text>
      <Text style={styles.textoDia}>Quarta:</Text>
      <Text style={styles.textoHorario}>
        LAWII - 7h às 8h40 {"\n"}
        LAM - 09h às 10h40 {"\n"}
        Português - 10h50 às 12h30
      </Text>
      <Text style={styles.textoDia}>Quinta:</Text>
      <Text style={styles.textoHorario}>
        Redação - 7h às 8h40 {"\n"}
        História - 9h às 10h40 {"\n"}
        Estrutura de Dados - 10h50 às 12h30
      </Text>
      <Text style={styles.textoDia}>Sexta:</Text>
      <Text style={styles.textoHorario}>
        Sociologia - 7h às 8h40 {"\n"}
        Química - 9h às 10h40 {"\n"}
        Inglês - 10h50 às 12h30
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}