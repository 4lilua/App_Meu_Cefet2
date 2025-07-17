import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {styles} from '../components/Style'

export default function HomeScreen({ navigation }: any) {
  const [id, setId] = useState("1");
  const [nome, setNome] = useState("");
  const [serie, setSerie] = useState("");
  const [curso, setCurso] = useState("");

  function mudarParaHorario(){
    navigation.navigate('horario')
  }

  return (
    <View style={styles.home}>
      <Text style={styles.titulo}>Página Inicial</Text>
      <TextInput
            style={styles.input}
            onChangeText={setNome}
            value={nome}
            placeholder="Digite seu nome"
        />
        <TextInput
            style={styles.input}
            onChangeText={setSerie}
            value={serie}
            placeholder="Digite sua série"
        />
        <TextInput
            style={styles.input}
            onChangeText={setCurso}
            value={curso}
            placeholder="Digite seu curso"
        />
        <Text style={styles.texto}>Bem vinda(o) {nome}!</Text>
      <Button
        title='Ver Horarios'
        onPress={mudarParaHorario}
      />
      <StatusBar style="auto" />
    </View>
  );
}

