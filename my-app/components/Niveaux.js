import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Menu from './Menu';

const tasks = [
  {
    id: 1,
    title: 'Niveau 0',
    description: 'Réaliser les relevés au niveau + 0.00 m'
  },
  {
    id: 2,
    title: 'Niveau 1',
    description: 'Réaliser les relevés au niveau + 4.23 m'
  },
  {
    id: 3,
    title: 'Niveau 2',
    description: 'Réaliser les relevés au niveau + 8,66 m'
  },
  {
    id: 4,
    title: 'Niveau 3',
    description: 'Réaliser les relevés au niveau + 6.00 m'
  },

];

export default function HomePage() {
  const navigation = useNavigation();

  const renderTask = (task) => {
    return (
      <TouchableOpacity key={task.id} style={styles.task} onPress={() => navigation.navigate('Releve')}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Menu />
      <ScrollView contentContainerStyle={styles.tasksContainer}>
        {tasks.map(renderTask)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  tasksContainer: {
    padding: 16,
    paddingBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1
  },
  task: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    width: Dimensions.get('window').width - 32,
    marginBottom: 16,
    elevation: 2
  },
  taskTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333333'
  },
  taskDescription: {
    fontSize: 16,
    color: '#666666',
    marginTop: 8
  }
});
