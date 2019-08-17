import axios from "axios";

const url = "http://localhost:3005/graphql";

const queryApi = query => {
    return axios({
        url,
        method: "post",
        data: {
            query: 
            `
                query {
                    ${query}
                }
            `
        }
    }).then( result => result.data )
}

export {
    queryApi
}