import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    postFilter: ["Code", "Music", "Fashion", "Other"],
    postsDB : [{name:"Produce in Phase", id:4, postType:"Music"},{name:"New Challenges in React", id:3, postType:"Code"},{name:"Building Myte", id:2, postType:"Code"},{name:"Welcome", id:1, postType:"Other"}]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    function togglePosts(postType) {
        // if postType is in remove else add
        if (initialState.postFilter.includes(postType)) {
            initialState.postFilter.splice(initialState.postFilter.indexOf(postType),1)
        } else {
            initialState.postFilter.push(postType)
        }
        //console.log(initialState.postFilter)
        dispatch({
            type: 'TOGGLE_POST_TYPE',
            payload: initialState.postFilter
        })
    }

    return (<GlobalContext.Provider value={{postFilter: state.postFilter, postsDB: state.postsDB, togglePosts}}>
        {children}
    </GlobalContext.Provider>);
}