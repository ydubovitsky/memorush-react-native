import { createSlice } from "@reduxjs/toolkit";

// -------------------------------------- Slice --------------------------------------

const initialState = {
  popupEntity: {
    message: null,
    color: null,
  },
  //! Тут специально введено значение 0, при каждом рендеринге это значение увеличивается на 1
  //! компонент popup отслеживает эти значения и при его изменении рендерится!
  popupCount: 0
}

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    showPopup: {
      reducer(state, action) {
        state.popupEntity = action.payload;
        state.popupCount = state.popupCount + 1;
      }
    },
  }
})

export const { showPopup } = popupSlice.actions;

export default popupSlice.reducer;

// -------------------------------------- Selectors --------------------------------------

export const popupStateSelector = state => state.popup;
