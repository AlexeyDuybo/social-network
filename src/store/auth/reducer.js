import { createSelector } from "reselect";

const initialState = {
    userId: 1
}

const userIdSelector = state => state.auth.userId;

const getUserId = createSelector(userIdSelector, item => item);

export default ( state = initialState , action ) => {

    switch(action.type){
        default:
            return state;
    }

}

export {
    getUserId
}