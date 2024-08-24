import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import ThemeReducer from "../slice/ThemeSlice"
import UserReducer from "../slice/UserSlice"

// import storage from 'redux-persist/lib/storage';

import { persistReducer, persistStore } from 'redux-persist';

// const themePersistConfig = {
//   key: 'mode',
//   storage,
// }

// // const userPersistConfig = {
// //     key: 'user',
// //     storage: sessionStorage,
// //   };

// const rootReducer = combineReducers({
//   theme: ThemeReducer,
// //   authUser: UserReducer,
// });

// // const rootReducer = combineReducers({
// //     // authUser: persistReducer(userPersistConfig, UserReducer),
// //     theme: persistReducer(themePersistConfig, ThemeReducer),
// // });

// const persistedReducer = persistReducer(themePersistConfig, rootReducer)

// export const store = createStore(persistedReducer);

// export const persistor = persistStore(store);

// // const persistedUserReducer = persistReducer(userPersistConfig, rootReducer.authUser);
// // const persistedThemeReducer = persistReducer(themePersistConfig, rootReducer.theme);

// // export const store = configureStore({
// //   reducer: {
// //     authUser: persistedUserReducer,
// //     theme: persistedThemeReducer,
// //   },
// // });

// // export const store = configureStore({
// //     reducer: rootReducer,
// // });
    

// // export const persistor = persistStore(store);



// // const initialState = {};
// // const rootReducer = (state = initialState, action) => state;

// // // Configurer Redux Persist pour le sessionStorage
// // const persistConfigSession = {
// //   key: 'user',
// //   storage: storageSession,
// // };

// // // Configurer Redux Persist pour le localStorage
// // const persistConfigLocal = {
// //   key: 'random',
// //   storage: storageLocal,
// // };

// // const persistedReducer = persistReducer(persistConfigSession, persistReducer(persistConfigLocal, rootReducer));

// // const store = createStore(persistedReducer);
// // const persistor = persistStore(store);

// // export { store, persistor };

// import { combineReducers } from 'redux'
// import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import storageSession from 'redux-persist/lib/storage/session'

const rootPersistConfig = { key: 'mode', storage,}; 
// const authPersistConfig = { key: 'user', storage:storageSession }; 
const authPersistConfig = { key: 'user', storage }; 
const rootReducer = combineReducers({ 
    user: persistReducer(authPersistConfig,UserReducer),
    theme: ThemeReducer,
}); 
                
const persistedReducer =  persistReducer(rootPersistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);