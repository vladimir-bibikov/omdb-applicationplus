import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
// Добавьте здесь другие редьюсеры, если они есть

const rootReducer = combineReducers({
  movies: moviesReducer,
  // Другие редьюсеры
});

export default rootReducer;