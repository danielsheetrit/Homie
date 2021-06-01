import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import { stayReducer } from './reducers/stay.reducer'
import { appReducer } from './reducers/app.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    stayModule: stayReducer,
    appModule: appReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)))