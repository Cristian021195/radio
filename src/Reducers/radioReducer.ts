let init = {
    radio: new Audio('https://streaming01.shockmedia.com.ar:10352/stream')
}
export const radioReducer = (state = init, action:any) => {
    switch (action.type) {
        case('PLAY'):{
            //state.radio.play();
            //state.radio.play();
            //console.log(action.payload?.selected?.url)
            state.radio.src = action.payload?.selected?.url;
            return {
                //...action.payload
                ...state
            }
        }
        case('STOP'):{
            return {
                //...action.payload
                ...state
            }
        }
        case('PAUSE'):{
            return {
                //...action.payload
                ...state
            }
        }
        case('MUTE'):{
            return {...state}
        }
        default:
            return state
    }
}
