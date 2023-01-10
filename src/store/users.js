import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
  error: "",
};

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const response = await axios.get("http://localhost:8080/api/users");
  return response.data;
});

export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
  const response = await axios.delete(`http://localhost:8080/api/user/${id}`);
  return response.data;
});
export const createUser = createAsyncThunk("createUser", async (user) => {
    const response = await axios.post("http://localhost:8080/api/user", user);
    return response.data;
  });
export const updateUser = createAsyncThunk("updateUser", async ({id,name,lastname}) => {
    const response = await axios.put(`http://localhost:8080/api/user/${id}`, {name,lastname});
    return response.data;
  }); 

const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    // addUsers: (state, action) => {
    //   state.users = [action.payload, ...state.users];
    // },
    // editUser: (state, action) => {
    //   state.users = state.users.map((user) => {
    //     if (action.payload.id === user.id) {
    //       user.name = action.payload.name;
    //       user.lastname = action.payload.lastname;
    //     }
    //     return user;
    //   });
    // },
//     deleteUser: (state, action) => {
//       state.users = state.users.filter((user) => user.id !== action.payload);
//     },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      //işlemin başlatıldığı
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      //bittiği
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      // hata döndüğü reddiediliği
      state.loading = false;
      state.error = "error fetching users data";
    });
  },
});

export const { addUsers,  editUser } = users.actions;

export default users.reducer;
