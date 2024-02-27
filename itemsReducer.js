import {createSlice} from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    deleteItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    editItem: (state, action) => {
      // Implement logic to update an item here
      // You should replace the item in the state array with the updated item.
      const updatedItem = action.payload;
      const itemIndex = state.findIndex(item => item.id === updatedItem.id);
      if (itemIndex !== -1) {
        state[itemIndex] = updatedItem;
      }
    },
  },
});

export const {addItem, deleteItem, editItem} = itemsSlice.actions;
export default itemsSlice.reducer;
