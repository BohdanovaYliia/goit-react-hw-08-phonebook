import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsApi";
import { filterSlice } from "./filterSlice";

export const store = configureStore({
    reducer:{
        contacts: contactsApi.reducer,
        filter: filterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        [...getDefaultMiddleware(), contactsApi.middleware],
  });