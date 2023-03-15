import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Menu from './Menu';
//import SQLite from 'react-native-sqlite-storage';

//const db = SQLite.openDatabase({ name: 'mydatabase.db' });

/*db.transaction((tx) => {
  tx.executeSql(
    'SELECT * FROM valves',
    [],
    (tx, results) => {
      console.log(results.rows.raw());
    },
    (error) => {
      console.log(error);
    },
  );
});*/

const tasks = [
  {
    id: 1,
    title: 'Task 1',
    description: 'This is task 1'
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'This is task 2'
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'This is task 3'
  },
  {
    id: 4,
    title: 'Task 4',
    description: 'This is task 4'
  },
  {
    id: 5,
    title: 'Task 5',
    description: 'This is task 5'
  }
];

export default function HomePage() {
  const renderTask = (task) => {
    return (
      <TouchableOpacity key={task.id} style={styles.task}>
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
