import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';



/* Created App function to show a table in the browser with hard coded instanceof. 
Used a constant to hold the posts of the user.
*/
function App() {

  const [posts, setPosts] = useState([
    {name: 'Cody', comment: 'Hi There!'}
  ])

  return (
    <div>
      <DisplayPosts parentPosts={posts} />

    </div>
  );
}

export default App;
