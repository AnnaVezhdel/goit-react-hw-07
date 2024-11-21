import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://673c3b2f96b8dcd5f3f903c1.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkApi) => {
    try {
      const { data } = await axios.post(`/contacts`, body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
