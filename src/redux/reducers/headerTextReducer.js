export default function HeaderTextReducer( state = '', action){
    switch (action.type) {
        case 'CHANGE_HEADER_TEXT':
            return action.headerText
        default:
            return state
    }
}

