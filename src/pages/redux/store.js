import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './viewreq';
import patientSlice from "./editDataSlice"


// export const store = configureStore({
//   reducer: {
//     example: exampleReducer
//   }
// });

const reducer ={

  value: exampleReducer,
  editData: patientSlice,
}

const store = configureStore({
  reducer,
});


export default store;