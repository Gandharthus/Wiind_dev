import React ,{ useState }from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

const RelevesScreen = () => {
    const [col4Input, setCol4Input] = useState('');
    const [col6Input, setCol6Input] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RELEVES NIVEAU 0.00 m SdM</Text>
      <Text style={styles.subtitle}>Localisation : entre les pompes CVI 001 à 004 PO et le condenseur. (M2C17)</Text>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cellHeader}>REPERE FONCTIONNEL</Text>
          <Text style={styles.cellHeader}>DESCRIPTION</Text>
          <Text style={styles.cellHeader}>POSITION CONSTATEE</Text>
          <Text style={styles.cellHeader}>POSITION ATTENDUE</Text>
          <Text style={styles.cellHeader}>TEMPERATURE RELEVEE EN °C AMONT</Text>
          <Text style={styles.cellHeader}>TEMPERATURE RELEVEE EN °C AMONT</Text>
          <Text style={styles.cellHeader}>TEMPERATURE ATTENDUE EN AVAL °C</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>ABP 116 VL</Text>
          <Text style={styles.cell}>Réglante secours condensats ABP 302 RE</Text>
          <TextInput
            style={styles.col}
            placeholder="O/F"
            onChangeText={setCol4Input}
            value={col4Input}
          />
          <Text style={styles.cell}>FERMEE</Text>
          <Text style={styles.cell}>    </Text>
          <Text style={styles.cell}>    </Text>
          <Text style={styles.cell}>30 °C</Text>

        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>ABP 117 VL</Text>
          <Text style={styles.cell}>Réglante secours condensats ABP 301 RE</Text>
          <Text style={styles.cell}>    </Text>
          <Text style={styles.cell}>FERMEE</Text>
          <Text style={styles.cell}>    </Text>
          <Text style={styles.cell}>    </Text>
          <Text style={styles.cell}>30 °C</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  cellHeader: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eee',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
});

export default RelevesScreen;
