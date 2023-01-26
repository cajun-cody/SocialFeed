import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import NavBar from './Components/NavBar/NavBar';
import './App.css';


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
    <div className='container-fluid'>
      <div className='row'>
        <div className='-md-6 mx-auto'>
          <div className='nav-border'>
            <NavBar/>
          </div>
        </div>
      </div>
      <body>
        <div className='row'>
          <div className='md-6 mx-auto'>
            <div className='border-box'>
              <CreatePostForm addNewPostProp={addNewPost}/>
            </div>
            <div className='border-box'>
              <DisplayPosts parentPosts={posts} />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
