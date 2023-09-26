// import React, {useState} from 'react';
// import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

// const AddItemScreen = ({navigation}) => {
//   const [itemName, setItemName] = useState('');
//   const [description, setDescription] = useState('');
//   const [quantity, setQuantity] = useState('');

//   const handleAddItem = () => {
//     // Add item to the list (you can use state, Redux, or a database)
//     // Clear input fields after adding

//     setItemName('');
//     setDescription('');
//     setQuantity('');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.boldText}>Add Item</Text>
//       <TextInput
//        style={styles.input}
//         placeholder="Item Name"
//         value={itemName}
//         onChangeText={text => setItemName(text)}
//       />
//       <TextInput
//        style={styles.input}
//         placeholder="Description"
//         value={description}
//         onChangeText={text => setDescription(text)}
//       />
//       <TextInput
//        style={styles.input}
//         placeholder="Quantity"
//         value={quantity}
//         onChangeText={text => setQuantity(text)}
//       />
//       <View style={{flexDirection: 'row',}}>
//         <View style={{margin: 10}}>
//           <Button
//             title="Add Item"
//             onPress={handleAddItem}
//           />
//         </View>
//         <View style={{margin: 10}}>
//           <Button
//             title="View Items"
//             onPress={() => navigation.navigate('ViewItems')}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   boldText: {
//     fontWeight: 'bold', // Make the text bold
//     color: 'blue', // Change the text color to blue
//     fontSize: 18, // Adjust the font size as needed
//   },
//   input: {
//     width: 300, // Set the width of the input
//     height: 40, // Set the height of the input
//     borderColor: 'gray', // Set the border color
//     borderWidth: .5, // Set the border width
//     borderRadius: 5, // Add border radius for rounded corners
//     paddingHorizontal: 10, // Add horizontal padding
//     fontSize: 16, // Set the font size
//     color: 'black', // Set the text color
//     marginTop: 15,
//   },
// });

// export default AddItemScreen;


// AddItemScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../itemsReducer';

const AddItemScreen = ({navigation}) => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (!itemName || !description) {
        alert('Please fill in all fields before adding the item.');
        return; // Don't proceed with adding the item if any field is empty
      }
    // Create an item object
    const newItem = {
      id: Date.now(), // Generate a unique ID (you can use a library for more robust IDs)
      itemName,
      description,
    };

    // Dispatch the addItem action to add the item to the Redux store
    dispatch(addItem(newItem));

    // Clear input fields after adding
    setItemName('');
    setDescription('');
    // setQuantity('');
  };

  return (
        <View style={styles.container}>
          <Text style={styles.boldText}>Add Item</Text>
          <TextInput
           style={styles.input}
            placeholder="Item Name"
            placeholderTextColor='green'
            value={itemName}
            onChangeText={text => setItemName(text)}
          />
          <TextInput
           style={styles.input}
            placeholder="Description"
            placeholderTextColor='green'
            value={description}
            onChangeText={text => setDescription(text)}
          />
          {/* <TextInput
           style={styles.input}
            placeholder="Quantity"
            value={quantity}
            onChangeText={text => setQuantity(text)}
          /> */}
          <View style={{flexDirection: 'row',}}>
            <View style={{margin: 10}}>
              <Button
                title="Add Item"
                onPress={handleAddItem}
              />
            </View>
            <View style={{margin: 10}}>
              <Button
                title="View Items"
                onPress={() => navigation.navigate('ViewItems')}
              />
            </View>
          </View>
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
});
export default AddItemScreen;
