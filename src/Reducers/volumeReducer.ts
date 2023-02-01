let init = {
    value: 0.5
}
export const volumeReducer = (state = init, action:any) => {
    switch (action.type) {
        case('VOLUME_SET'):{
            //console.log(action.payload)
            return {
                ...state,
                value: action.payload.value
            }
        }
        case('MUTE'):{
            //console.log(action.payload)
            return {
                value: 0.0
            }
        }
        default:
            return state
    }
}
