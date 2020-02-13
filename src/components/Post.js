import React from 'react';

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img src={author.avatar} alt=""/>
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider" />
    </div>
  );
}

function Post({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader />
      <p className="post-content"></p>
      <PostCommentsv/>
    </div>
  );
}

export default Post;