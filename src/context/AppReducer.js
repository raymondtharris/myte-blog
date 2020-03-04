import React, { useContext } from 'react';
import { GlobalContext} from './GlobalContext'

export default (state, action) => {
    const { postsDB } = useContext(GlobalContext);
    //console.log(state)
    switch(action.type){
        case 'TOGGLE_POST_TYPE':
            return{
                ...state,
                postsDB: postsDB.filter(post => {
                    //console.log(action.payload)
                    //console.log(state.postsDB)
                   return action.payload.includes(post.postType)
                })
            }
        default:
            return state;
    }
}