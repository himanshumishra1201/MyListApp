// EditItemScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { editItem } from '../itemsReducer';

const EditItemScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [itemName, setItemName] = useState(item.itemName);
  const [description, setDescription] = useState(item.description);

  const dispatch = useDispatch();

  const handleSave = () => {
    console.log("hello")
    const updatedItem = {
      ...item,
      itemName,
      description,
    };
    dispatch(editItem(updatedItem));
    console.log('Item updated:', updatedItem);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>Edit Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        placeholderTextColor='green'
        value={itemName}
        onChangeText={(text) => setItemName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        placeholderTextColor='green'
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      {/* <Button title="Save" onPress={handleSave} /> */}
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleSave()}
        >
        <Text style={styles.deleteButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    boldText: {
      fontSize: 25,
      color: "gray",
      fontWeight: '700'
    },
    input: {
      width: 300,
      height: 40,
      borderColor: 'gray',
      borderWidth: .5,
      borderRadius: 5,
      paddingHorizontal: 10,
      fontSize: 16,
      color: 'red',
      marginTop: 15,
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
  });

export default EditItemScreen;