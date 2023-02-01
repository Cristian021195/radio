import { createStore, combineReducers } from "redux";
import { presetsReducer, selectedRadioReducer, radioReducer, volumeReducer } from "../Reducers";

const reducers = combineReducers({
    presets: presetsReducer,
    selected: selectedRadioReducer,
    radio: radioReducer,
    volume: volumeReducer
})

//export const store = createStore(reducers , applyMiddleware(thunk))
//export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const store = createStore(reducers)