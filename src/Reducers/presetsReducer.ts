import { presets } from "../DB";
const init = {
    presets: JSON.parse(localStorage.getItem('radios') || `${JSON.stringify(presets)}`) || presets
}
export const presetsReducer = (state = init, action:any) => {
    switch (action.type) {
        case('AGREGAR'):{
            localStorage.setItem('radios', JSON.stringify([...state.presets, action.payload.radio]));//console.log({payload: action.payload, state})
            return {
                presets: [...state.presets, action.payload.radio]
            }            
        }
        default:
            return state
    }
}
