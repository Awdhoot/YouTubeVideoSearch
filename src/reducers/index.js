import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
// combine per-state reducers into global app wise state
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
