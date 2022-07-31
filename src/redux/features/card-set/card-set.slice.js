import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchDataService from "../../../service/fetchDataService";

// -------------------------------------- AsyncThunk --------------------------------------

export const getAllCardSets = createAsyncThunk('cardSet/getAllCardSets', async () => {
  const response = await fetchDataService('GET', '/api/v1/card-set/all');
  return response.data;
})

export const createNewCardSet = createAsyncThunk('cardSet/create', async (data) => {
  const response = await fetchDataService('POST', '/api/v1/card-set/add', data);
  return response.data;
})

// -------------------------------------- Slice --------------------------------------

const initialState = {
  cardEntity: [],
  status: null,
  error: null
}

const cardSetSlice = createSlice({
  name: 'cardSet',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllCardSets.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getAllCardSets.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.cardEntity = action.payload;
      })
      .addCase(getAllCardSets.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      // Add new card set
      .addCase(createNewCardSet.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(createNewCardSet.fulfilled, (state, action) => {
        state.status = 'succeeded'
      })
      .addCase(createNewCardSet.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default cardSetSlice.reducer;

// -------------------------------------- Selectors --------------------------------------

export const cardEntitySelector = state => state.cardSet.cardEntity;
export const cardByIdSelector = (state, id) => state.cardSet.cardEntity.find(card => id === card.id);
//TODO Переделать! Сделать мемоизированным и механизм фильтрации изменить!
export const cardEntityByFavoriteAndLearnedSelector = (state, favorite, learned) => {
  const favoriteCards = state.cardSet.cardEntity.filter(card => {
    return card.favorite === favorite
  });
  const learnedCards = state.cardSet.cardEntity.filter(card => {
    return card.learned === learned
  });
  if ((favorite === true) && (learned === false)) return favoriteCards;
  if ((favorite === false) && (learned === true)) return learnedCards;
  return state.card.cardEntity;
}
export const cardSetByIdSelector = (state, id) => state.cardSet.cardEntity.find(cardSet => id === cardSet.id);

//TODO Сделать более универсальным
export const getSortedCardByCardSetSelector = state => {
  const sorted = state.cardSet.cardEntity.reduce((result, card) => {
    result[card.cardSet.id] = {
      ...result[card.cardSet.id],
      [card.id]: card
    }
    return result;
  }, {});

  return sorted;
}
