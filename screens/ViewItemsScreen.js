
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../itemsReducer';

const ViewItemsScreen = ({ navigation }) => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleDeleteItem = (itemId) => {
    // Dispatch the deleteItem action to remove the item from the Redux store
    dispatch(deleteItem(itemId));
  };

  const handleEditItem = (item) => {
    // Navigate to the edit screen with the item details
    navigation.navigate('EditItem', { item });
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, color: "gray", fontWeight: '700'}}>Item List</Text>
      <FlatList
        data={items}
        // keyExtractor={(item) => item.id.toString()}
        keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
        renderItem={({ item }) => (
          <View style={{margin: 15, alignItems: 'center',
          justifyContent: 'center',}}>
            <Text style={{color: 'black'}}>Name: {item.itemName}</Text>
            <Text style={{color: 'black'}}>Description: {item.description}</Text>
            <View style={{flexDirection: 'row', }}>
                <TouchableOpacity
                style={styles.editButton}
                onPress={() => handleEditItem(item)}
                >
                <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteItem(item.id)}
                >
                <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
            </View>
          </View>
        )}
      />
       <TouchableOpacity
              style={[styles.deleteButton,{backgroundColor: 'green'}]}
              onPress={() => navigation.navigate('AddItem')}
            >
            <Text style={styles.deleteButtonText}>Add Item</Text>
        </TouchableOpacity>
      {/* <Button title="Add Item" onPress={() => navigation.navigate('AddItem')} /> */}
     
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemContainer: {
      marginBottom: 20,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    deleteButton: {
      backgroundColor: 'red', // Background color of the delete button
      padding: 5,
      borderRadius: 5,
      width: "60%",
      margin: 10,
    },
    deleteButtonText: {
      color: 'white', // Text color of the delete button
      fontWeight: 'bold',
      textAlign: 'center',
    },
    editButton: {
        backgroundColor: 'blue', // Background color of the edit button
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        // marginBottom: 5,
        margin: 10,

      },
      editButtonText: {
        color: 'white', // Text color of the edit button
        fontWeight: 'bold',
      },
  });

export default ViewItemsScreen;
