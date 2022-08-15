import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchDataService from "../../../service/fetchDataService";
import { BASE_URL } from "../../const/url-endpoints.const";

// -------------------------------------- AsyncThunk --------------------------------------

export const getAllCardSets = createAsyncThunk('card/getAllCardSets', async (arg, { getState }) => {
  const state = getState();
  const token = state.auth.authEntity.token;

  const payload = {
    method: 'GET',
    url: `${BASE_URL}/api/v1/card-set/all`,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    }
  }
  const response = await fetchDataService(payload);
  return response.data;
})

export const createNewCardSet = createAsyncThunk('card/create', async (arg, { getState }) => {
  const state = getState();
  const token = state.auth.authEntity.token;

  const payload = {
    method: 'POST',
    url: `${BASE_URL}/api/v1/card-set/add`,
    data: {
      ...arg,
      flashCardArray: Object.values(arg.flashCardArray)
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    }
  }
  const response = await fetchDataService(payload);
  return response.data;
})

export const updateCardSet = createAsyncThunk('card/update', async (arg, { getState }) => {
  const state = getState();
  const token = state.auth.authEntity.token;
  const { cardSetId, cardSetEntity } = arg;

  const payload = {
    method: 'PUT',
    url: `${BASE_URL}/api/v1/card-set/update/${cardSetId}`,
    data: {
      ...cardSetEntity,
      flashCardArray: Object.values(cardSetEntity.flashCardArray)
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    }
  }
  const response = await fetchDataService(payload);
  return response.data;
})

export const deleteCardSet = createAsyncThunk('card/delete', async ({ cardSetId }, { getState }) => {
  const state = getState();
  const token = state.auth.authEntity.token;

  const payload = {
    method: 'DELETE',
    url: `${BASE_URL}/api/v1/card-set/delete/${cardSetId}`,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    }
  }
  const response = await fetchDataService(payload);
  return response.data;
})

export const setFavoriteCardSet = createAsyncThunk('card/setFavorite', async (id, { getState }) => {
  const state = getState();
  const token = state.auth.authEntity.token;
  const card = state.cardSet.cardEntity.find(card => card.id === id);
  const payload = {
    method: 'PUT',
    url: `${BASE_URL}/api/v1/card-set/update/${id}`,
    data: {
      ...card,
      isFavorite: !card.isFavorite
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    }
  }
  const response = await fetchDataService(payload);
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
        state.cardEntity = [
          ...state.cardEntity,
          action.payload
        ]
      })
      .addCase(createNewCardSet.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      // Update card set
      .addCase(updateCardSet.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateCardSet.fulfilled, (state, action) => {
        state.status = 'updated'
        const idx = state.cardEntity.findIndex(card => card.id === action.payload.id);
        state.cardEntity[idx] = action.payload;
      })
      .addCase(updateCardSet.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      // Set favorite card set
      .addCase(setFavoriteCardSet.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(setFavoriteCardSet.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const idx = state.cardEntity.findIndex(cardSet => cardSet.id === action.payload.id);
        state.cardEntity[idx] = action.payload;
      })
      .addCase(setFavoriteCardSet.rejected, (state, action) => {
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

export const cardSetFavoriteSelector = state => (
  state.cardSet.cardEntity.filter(card => card.isFavorite === true)
);
