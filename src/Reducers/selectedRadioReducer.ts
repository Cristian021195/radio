const init = {
    selected: JSON.parse(localStorage.getItem('selected') || 'null') || null
}
export const selectedRadioReducer = (state = init, action:any) => {
    switch (action.type) {
        case('CAMBIAR'):{
            localStorage.setItem('selected', JSON.stringify(action.payload));
            return {selected: action.payload}
        }
        default:
            return state
    }
}
