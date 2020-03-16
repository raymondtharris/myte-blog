import React from 'react';
import './MytePost.css'
import ReactMarkdown from 'react-markdown'

export const MytePost = ({post}) => {
  const postBody = '# Myte\n\nThis is a test to get markdown in react working.'
  return (
    <div className="MytePost">
      <div>{post.name}</div>
      <ReactMarkdown source={postBody}></ReactMarkdown>
      <div>Post Footer</div>
    </div>
  )
}
