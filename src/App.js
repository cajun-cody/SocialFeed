import React, { useState } from 'react';




/* Created App function to show a table in the browser with hard coded instanceof. 
Used a constant to hold the posts of the user.
*/
function App() {

  const [posts, setPosts] = useState([
    {name: 'Cody', comment: 'Hi There!'}
  ])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>SocialFeed</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) =>{
            return (
              <tr>
                <td>{post.name}</td>
                <td>{post.comment}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
