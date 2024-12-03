import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './viewreq';

// export const store = configureStore({
//   reducer: {
//     example: exampleReducer
//   }
// });

const reducer ={
  value: exampleReducer,
}

const store = configureStore({
  reducer,
});


export default store;