import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('items.db');

export default function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  // Create table if not exists
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, item TEXT);'
    );
  });

  const addItem = () => {
    // Insert item into table
    db.transaction(tx => {
      tx.executeSql('INSERT INTO items (item) VALUES (?);', [item]);
    }, null, updateList);
    setItem('');
  };

  const deleteItem = id => {
    // Delete item from table
    db.transaction(tx => {
      tx.executeSql('DELETE FROM items WHERE id = ?;', [id]);
    }, null, updateList);
  };

  const updateList = () => {
    // Select all items from table
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM items;', [], (_, { rows }) =>
        setItems(rows._array)
      );
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add item..."
        value={item}
        onChangeText={setItem}
      />
      <Button title="Add" onPress={addItem} />
      <FlatList
        style={styles.list}
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{item.item}</Text>
            <Button
              title="Delete"
              onPress={() => deleteItem(item.id)}
              color="red"
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  list: {
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    width: '100%',
  },
  listItemText: {
    fontSize: 18,
  },
});
