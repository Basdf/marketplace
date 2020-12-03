import { composeWithDevTools } from 'redux-devtools-extension'
import { carReducer, itemReducer, searchReducer } from './reducers'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


// DefaultState
export const initialItemState = {
    loading: false,
    item: '',
    error: ''
}
export const initialSearchState = {
    loading: false,
    search: [],
    error: ''
}
export const initialCarState = {
    buy: [],
    car: []
}
// Store
const rootReducers = combineReducers({
    search: searchReducer,
    item: itemReducer,
    car: carReducer
})

const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
))

export default store;