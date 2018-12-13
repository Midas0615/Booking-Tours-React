import * as Types from './../constants/ActionType';
var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_TOUR:
            return action.product;
        default :
            return state;
    }
}

export default itemEditing;