

import Post from "../Post/Post";


const DisplayPosts = (props) => {



    return ( 
      <div className='post-display'>
        {props.parentPosts.map((post) => {
          return (
            <Post post={post} />
          )
        })}
      </div>
     );
}
 
export default DisplayPosts;
