import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, Linking, ScrollView } from 'react-native';
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

  const noticias = [
    {
      titulo: "Avaliações Somativas 1º Semestre – Ano Letivo de 2025",
      descricao: "Horário das avaliações somativas - download Responsável pela informação: Weider Pereira Rodrigues [...]",
      link: "https://www.varginha.cefetmg.br/2025/07/21/avaliacoes-somativas-1o-semestre-ano-letivo-de-2025/"
    },
    {
      titulo: "CEFET-MG está entre as melhores escolas públicas do país no Enem 2024",
      descricao: "Levantamento mostra três campi da Instituição entre os 20 melhores de todo o Brasil O CEFET-MG foi [...]",
      link: "https://www.varginha.cefetmg.br/2025/07/18/%ef%bb%bfcefet-mg-esta-entre-as-melhores-escolas-publicas-do-pais-no-enem-2024/"
    },
    {
      titulo: "Chamada interna para aluno de iniciação científica",
      descricao: "As Coordenadoras dos Projetos de Pesquisa “Gerenciamento da água: estratégia para implementação de [...]",
      link: "https://www.varginha.cefetmg.br/2025/07/15/chamada-interna-para-bolsa-de-iniciacao-cientifica/"
    },
    {
      titulo: "Alunos do CEFET-MG de Varginha realizam visita técnica ao Instituto Inhotim",
      descricao: "Arte, ciência e cultura se entrelaçam na formação omnilateral dos estudantes No dia 2 de julho, os [...]",
      link: "https://www.varginha.cefetmg.br/2025/07/09/alunos-do-cefet-mg-de-varginha-realizam-visita-tecnica-ao-instituto-inhotim/"
    }
  ];

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={true} // Remove a barra de rolagem padrão
    >
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
        {noticias.map((noticia, index) => (
          <Pressable 
            key={index} 
            style={styles.card}
            onPress={() => Linking.openURL(noticia.link)}
          >
            <Text style={styles.cardTitulo}>{noticia.titulo}</Text>
            <Text style={styles.cardTexto}>{noticia.descricao}</Text>
          </Pressable>
        ))}
        <Pressable style={styles.botao} onPress={(irParaSite)}>
          <Text style={styles.textBotao}>Visitar Site</Text>
        </Pressable>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

