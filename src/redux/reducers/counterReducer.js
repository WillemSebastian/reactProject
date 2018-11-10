const initialState = {
    count: 42
}

export default function counterReducer (state = initialState, action){
    switch(action.type){
        case 'INCREMENT':
            console.log(state.count)
            return {
                count: state.count + 1
            }
        
        case 'DECREMENT': 
            console.log(state.count)
            return {
                count: state.count - 1
            }
        default: 
            return state
    }
        
}