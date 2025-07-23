import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, Linking } from 'react-native';
import {styles} from '../components/Style'

export default function HomeScreen({ navigation }: any) {
  const logo = require('../../assets/logo.png');
  const [id, setId] = useState("1");
  const [nome, setNome] = useState("");
  const [serie, setSerie] = useState("");
  const [curso, setCurso] = useState("");

  function mudarParaHorario(){
    navigation.navigate('horario', {aluno: nome, })
  }

  function irParaSite(){
    Linking.openURL('https://www.varginha.cefetmg.br/')
  }

  return (
    <View style={styles.home}>
      <View style={styles.logo}>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text style={styles.titulo}>Página Inicial</Text>
      <Text style={styles.texto}>Bem vinda(o) {nome}!</Text>
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
        <View style={styles.botoesContainer}>
          <Pressable style={styles.botao} onPress={(mudarParaHorario)}>
            <Text style={styles.textBotao}>Ver Horários</Text>
          </Pressable>
          <Pressable style={styles.botao} onPress={(irParaSite)}>
            <Text style={styles.textBotao}>Visitar Site</Text>
          </Pressable>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

