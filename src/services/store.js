// Тут подключены девтулзы редакса для удобства дебагинга.
// Если что - ссылка https://github.com/reduxjs/redux-devtools
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer.js';

// Редакс-хранилище и подключение девтулзов
const store = createStore(
  rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
