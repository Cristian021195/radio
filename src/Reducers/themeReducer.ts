const init = {
    theme: localStorage.getItem('theme') || 'claro'
}
export const themeReducer = (state = init, action:any) => {
    switch (action.type) {
        case('CLARO'):{
            return {
                ...action.payload
            }
        }
        case('OSCURO'):{
            return {
                ...action.payload
            }
        }
        case('LECTURA'):{
            return {
                ...action.payload
            }
        }
        default:
            return state
    }
}
