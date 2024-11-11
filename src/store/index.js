import { configureStore } from "@reduxjs/toolkit";
import { setChannel, setUsername } from "./slices/roomSlice";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor, setChannel, setUsername };
