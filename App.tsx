import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import itemsReducer from './itemsReducer';
import AddItemScreen from './screens/AddItemScreen';
import ViewItemsScreen from './screens/ViewItemsScreen';
import EditItemScreen from './screens/EditItemScreen';

const Stack = createStackNavigator();
const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

// Load items from AsyncStorage when the app starts
const loadItems = async () => {
  try {
    const savedItems = await AsyncStorage.getItem('items');
    if (savedItems) {
      store.dispatch({type: 'items/addItem', payload: JSON.parse(savedItems)});
    }
  } catch (error) {
    console.error('Error loading items:', error);
  }
};

// Save items to AsyncStorage when the app is about to close
const saveItems = async () => {
  try {
    await AsyncStorage.setItem('items', JSON.stringify(store.getState().items));
  } catch (error) {
    console.error('Error saving items:', error);
  }
};

const App = () => {
  useEffect(() => {
    loadItems();
    return () => saveItems();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AddItem">
          <Stack.Screen name="AddItem" component={AddItemScreen} />
          <Stack.Screen name="ViewItems" component={ViewItemsScreen} />
          <Stack.Screen name="EditItem" component={EditItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
