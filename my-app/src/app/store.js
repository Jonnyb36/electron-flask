import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import resultsReducer from '../features/results/resultsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    results: resultsReducer,
  },
});
