import { configureStore } from "@reduxjs/toolkit";
import AuthRedux from "./Auth-redux";

const store = configureStore({
  reducer: { auth: AuthRedux },
});

export default store;
