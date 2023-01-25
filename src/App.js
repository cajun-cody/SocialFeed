import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';


/* Created App function to show a table in the browser with hard coded instanceof. 
Used a constant to hold the posts of the user.
*/
function App() {

  const [posts, setPosts] = useState([
    {name: 'Cody', comment: 'Hi There!'}
  ])

  function addNewPost(post){
    let tempPosts = [post,...posts];
    setPosts(tempPosts);
  }

  return (
    <div>
      <DisplayPosts parentPosts={posts} />
      <CreatePostForm addNewPostProp={addNewPost}/>
    </div>
  );
}

export default App;
