import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './viewreq';
import patientSlice from "./editDataSlice"
import LoginReducer from "./loginInfoSlice"

// export const store = configureStore({
//   reducer: {
//     example: exampleReducer
//   }
// });

const reducer ={
  login:LoginReducer,
  value: exampleReducer,
  editData: patientSlice,
}

const store = configureStore({
  reducer,
});


export default store;