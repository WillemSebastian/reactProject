export default function getCheckinLocationReducer( state = '', action){
    switch (action.type) {
        case 'GET_CHECKIN_LOCATION':
            return action.checkinLocation
        default:
            return state
    }
}

