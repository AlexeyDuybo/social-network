import { queryApi } from "./api";

const friendsApi = {
    queryFriends(id){
        return queryApi(
            `
                friends(id: ${id}){
                    id
                    name
                    img
                }
            `
        ).then( result => result.data.friends )
    }
}

export {
    friendsApi
}