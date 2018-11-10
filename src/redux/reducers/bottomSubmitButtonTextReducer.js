export default function bottomSubmitButtonTextReducer( state = '', action){
    switch(action.type){
        case 'CHANGE_BOTTOM_SUBMIT_BUTTON_TEXT':
            return [
                ...state,
                {
                    bottomSubmitButtonText: action.bottomSubmitButtonText, 
                    navigationToPage: action.navigationToPage
                }
            ]
        default:
            return state
    }
}