import React from 'react';
import PostStatus from '../PostStatus/PostStatus';
import './Post.css';

const Post = ({post}) => {

    const date = new Date();
    let currentDay = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear =  date.getFullYear();

    return ( 
        <div className='card-container'>
            <h2>{post.name}</h2>
            <p>{post.comment}</p>
            <span class="post_data">Posted: {currentMonth}/{currentDay}/{currentYear}</span>
            <PostStatus />
        </div>
     );
}
 
export default Post;