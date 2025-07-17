/*Grupo: Aline Silvério Mendes e Luana de Carvalho Bonfim*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/HomeScreen';
import Horario from './src/screens/HorarioScreen';
import BottomTabsRoutes from './src/routes/bottom-tabs.routes'

export default function App() {
  return (
    <BottomTabsRoutes />
  );
}