import { createSelector } from "reselect";
import { SET_FRIENDS } from "./action";

const initialState = {
    friends: [
        {
            id: 1,
            name: "gena",
            img: "https://vokrug.tv/pic/person/4/8/8/8/48887a7b2347a53c0c01db1caf339464.jpeg"
        }
    ]
}

const friendsSelector = state=> state.friendsList.friends;
const getFriends = createSelector( friendsSelector, item => item.map( friend => ({ ...friend, path: `/profile/${friend.id}` }) ) );

export default ( state = initialState, action ) => {
    switch(action.type){
        case SET_FRIENDS:
            return {...state, friends: action.value };
        default: 
            return state; 
    }
}

export {
    getFriends
}