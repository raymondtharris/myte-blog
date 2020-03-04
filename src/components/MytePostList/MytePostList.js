import React, { useContext} from 'react'
import {MytePost} from '../MytePost/MytePost'
import './MytePostList.css'
import { GlobalContext} from '../../context/GlobalContext'

export const MytePostList = () => {
    const { postFilter } = useContext(GlobalContext);
    const { postsDB } = useContext(GlobalContext);
    return (
        <div className="MytePostList">
            {postsDB.map(post => (<MytePost key={post.id} post={post}></MytePost>))}
        </div>
    )
}
