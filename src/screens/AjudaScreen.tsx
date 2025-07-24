import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from '../components/Style';

export default function AjudaScreen() {
  return (
    <View style={styles.container}>
      <Text>FAQ</Text>
      <StatusBar style="auto" />
    </View>
  );
}
