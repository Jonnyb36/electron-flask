import { createSlice } from '@reduxjs/toolkit';

export const resultsSlice = createSlice({
  name: 'results',
  initialState: {
    output_fp: null,
    // results: {intrinsic: null, stochastic: null},
    results: 0,
  },
  reducers: {    
    readIntrinsicResults: (state, action) => {
      state.results += 1
    },
    storeIntrinsicResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { readIntrinsicResults, storeIntrinsicResults } = resultsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const loadIntrinsicResults = intFilePath => dispatch => {
  setTimeout(() => {
    dispatch(readIntrinsicResults(intFilePath))
    // dispatch(storeIntrinsicResults(intResults));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectIntrinsicResults = state => state.results.value;

export default resultsSlice.reducer;
// 