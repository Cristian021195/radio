import { presets } from "../DB";
const init = {
    presets: JSON.parse(localStorage.getItem('radios') || '[]') || presets
}
export const presetsReducer = (state = init, action:any) => {
    switch (action.type) {
        /*case('ELIMINAR'):{
            return {
                ...action.payload
            }
        }
        case('FAVORITO'):{
            return {
                ...action.payload
            }
        }
        case('EDITAR'):{
            return {
                ...action.payload
            }
        }*/
        case('AGREGAR'):{
            localStorage.setItem('radios', JSON.stringify([...state.presets, action.payload.radio]));
            //console.log({payload: action.payload, state})
            return {
                presets: [...state.presets, action.payload.radio]
            }
            
        }
        default:
            return state
    }
}
