import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Menu from './Menu';

const tasks = [
  {
    id: 1,
    title: 'Essai 1',
    description: 'Unité 1'
  },
  {
    id: 2,
    title: 'Essai 2',
    description: 'Unité 2'
  },
  {
    id: 3,
    title: 'Essai 3',
    description: 'Unité 3'
  },
  {
    id: 4,
    title: 'Essai 4',
    description: 'Unité 4'
  },
  {
    id: 5,
    title: 'Essai 5',
    description: 'Unité 5'
  }
];

export default function HomePage() {
  const navigation = useNavigation();

  const renderTask = (task) => {
    return (
      <TouchableOpacity key={task.id} style={styles.task} onPress={() => navigation.navigate('Description')}>
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
