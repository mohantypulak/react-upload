import {combineReducers, legacy_createStore as createStore} from "redux";
import {pizzaReducer} from './pizza/pizzaReducer'

let rootReducer = combineReducers({
    pizza:pizzaReducer
})
let store = createStore(rootReducer)
export {store}