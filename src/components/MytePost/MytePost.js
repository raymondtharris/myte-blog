import React from 'react';
import './MytePost.css'

export const MytePost = ({post}) => {
  return (
    <div className="MytePost">
      <div>{post.name}</div>
      <div>Post Footer</div>
    </div>
  )
}
