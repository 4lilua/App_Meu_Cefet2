import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { styles } from '../components/Style';

export default function HorarioScreen({route}: any) {
  const logo = require('../../assets/logo.png');
  const {aluno} = route.params;

  const horarios = [
    {
      dia: 'Segunda',
      materias: [
        'Sociologia - 07h às 08h40',
        'Rede de Computadores - 09h às 10h40',
        'LMMDC - 10h50 às 12h30'
      ]
    },
    {
      dia: 'Terça',
      materias: [
        'Física - 7h às 8h40',
        'Aplicações Web II - 09h às 10h40',
        'Aplicações Móveis - 10h50 às 12h30'
      ]
    },
    {
      dia: 'Quarta',
      materias: [
        'LAWII - 7h às 8h40',
        'LAM - 09h às 10h40',
        'Português - 10h50 às 12h30'
      ]
    },
    {
      dia: 'Quinta',
      materias: [
        'Redação - 7h às 8h40',
        'História - 9h às 10h40',
        'Estrutura de Dados - 10h50 às 12h30'
      ]
    },
    {
      dia: 'Sexta',
      materias: [
        'Sociologia - 7h às 8h40',
        'Química - 9h às 10h40',
        'Inglês - 10h50 às 12h30'
      ]
    }
  ];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logo}>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text style={styles.titulo}>Horários</Text>
      <Text style={styles.texto}>Olá, {aluno}! Aqui estão os seus horários</Text>
      
      {horarios.map((dia, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.textoDia}>{dia.dia}:</Text>
          {dia.materias.map((materia, idx) => (
            <Text key={idx} style={styles.textoHorario}>
              {materia}
            </Text>
          ))}
        </View>
      ))}
      <StatusBar style="auto" />
    </ScrollView>
  );
}