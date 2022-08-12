// Корневой редьюсер. Не нужен на малом проекте, но вдруг приспичит добавить еще пару игр?
import { combineReducers } from 'redux';
import { mazeReducer } from './mazeReducer/mazeReducer';

// Корневой редьюсер. Для возможного расширения
const rootReducer = combineReducers({
  maze: mazeReducer
})

export default rootReducer;
