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
    <View style={styles.container}>
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
        <Pressable style={styles.botao} onPress={(mudarParaHorario)}>
          <Text style={styles.textBotao}>Ver Horários</Text>
        </Pressable>
        <Text style={styles.texto}>Últimas notícias:</Text>
        <View style={styles.noticiasContainer}>
          <Text style={styles.textoHorario}>
          | Avaliações Somativas 1º Semestre – Ano Letivo de 2025 {"\n\n"}
          | CEFET-MG está entre as melhores escolas públicas do país no Enem 2024 {"\n\n"}
          | Chamada interna para aluno de iniciação científica
          </Text>
        </View>

        <Pressable style={styles.botao} onPress={(irParaSite)}>
          <Text style={styles.textBotao}>Visitar Site</Text>
        </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

