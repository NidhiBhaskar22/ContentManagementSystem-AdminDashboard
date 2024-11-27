import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  roles: ['Admin', 'Editor', 'Viewer'], // Example roles
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

export const { setUsers, addUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
