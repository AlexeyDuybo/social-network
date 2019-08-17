import { createSelector } from "reselect";

const initialState = {
    links: [
        {
            id: 1,
            title: "Friends",
            path: "/friends/"
        }
    ]
}

const linksSelector = state => state.menu.links;

const getMenuLinks = createSelector( linksSelector, item => item );

export default (state = initialState, action) => {
    
    switch(action.type){
        default: 
            return state;
    }

}

export {
    getMenuLinks
}