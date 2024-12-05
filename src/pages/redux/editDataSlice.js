// slices/patientSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPatient: null, // To store the patient being edited
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setSelectedPatient(state, action) {
      state.selectedPatient = action.payload;
    },
    clearSelectedPatient(state) {
      state.selectedPatient = null;
    },
  },
});

export const { setSelectedPatient, clearSelectedPatient } = patientSlice.actions;
export default patientSlice.reducer;
