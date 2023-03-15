import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TourneeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        But de l’essai :
        {"\n"}• Effectuer une tournée en Salle des Machines pour contrôler la conformité de la position des principaux organes jugés comme ayant un impact sur le rendement. Ces relevés sont complétés par des mesures de température pour contrôler l’étanchéité des organes de secours.
        {"\n\n"}Référence :
        {"\n"}• Règles d’essais NON RGE « Suivi mensuel de la performance de production à l’aide du CEF » D4550.31-11/0921 ind. A du 25/01/2012 et « Note de recherche des pertes de production sur un site 900-CP1 » ETDOPS09178A.
        {"\n\n"}Etat requis de l’installation et conditions particulières :
        {"\n"}• Tranche à PMD.
        <Text style={styles.title}>Etat requis de l’installation et conditions particulières :</Text>
      <Text style={styles.text}>• Tranche à PMD.</Text>
      <Text style={styles.text}>• Matériel et DMP nécessaires à l’essai :.</Text>
      
      <Text style={styles.text}>• Caméra thermique.</Text>
      <Text style={styles.text}>• Clé spécifique pour accéder aux boîtiers des thermocouples TESTO (relevés sur indicateurs de température des principaux organes de secours sur AHP 003 BA, AHP 167 VL et les 16 vannes GCT 108 à 123 VV du GCT condenseur). Clé EDF 900 pour la tranche 1 uniquement. (encore équipé)</Text>
      <Text style={styles.text}>• Récupérer les valeurs de T°C sur dream report autour de la bâche AHP003BA</Text>
      <Text style={styles.text}>• Clé 6F ou F6 selon la paire de tranche pour les casemates VVP</Text>
      </Text>
      <Button title="Commencer la tournée" onPress={() => alert("La tournée commence maintenant !")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default TourneeScreen;
