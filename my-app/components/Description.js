import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Description = () => {
    const navigation = useNavigation();
  return (
    
    <ScrollView contentContainerStyle={styles.container} >
    <View style={styles.container}>
      <Text style={styles.title}>But de l’essai :</Text>
      <Text style={styles.text}>Effectuer une tournée en Salle des Machines pour contrôler la conformité de la position des principaux organes jugés comme ayant un impact sur le rendement. Ces relevés sont complétés par des mesures de température pour contrôler l’étanchéité des organes de secours.</Text>
      <Text style={styles.title}>Référence :</Text>
      <Text style={styles.text}>• Règles d’essais NON RGE « Suivi mensuel de la performance de production à l’aide du CEF » D4550.31-11/0921 ind. A du 25/01/2012 et « Note de recherche des pertes de production sur un site 900-CP1 » ETDOPS09178A.</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Niveaux')}>
        <Text style={styles.buttonText}>Commencer la tournée</Text>
      </TouchableOpacity>

      
    </View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    overflowY: 'scroll',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 24,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Description;
