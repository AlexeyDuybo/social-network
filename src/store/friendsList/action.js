import { friendsApi } from "../../dal/api/friendsApi";



const SET_FRIENDS = "SET_FRIENDS";

const actionSetFriends = value => (
    {
        type: SET_FRIENDS,
        value
    }
)

const clearFriends = ()=> (
    {
        type: SET_FRIENDS,
        value: []
    }
)
const requestFriends = id=> {
    return dispath => {
        friendsApi.queryFriends(id).then( result => {
            dispath( actionSetFriends( result ) )
        } )
    }
}

export {
    SET_FRIENDS,
    requestFriends,
    clearFriends
}