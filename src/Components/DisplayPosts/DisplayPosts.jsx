


const DisplayPosts = (props) => {
    return ( 
        <table>
        <tbody>
          {props.parentPosts.map((post) =>{
            return (
              <tr>
                <td>{post.name}</td>
                <td>{post.comment}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default DisplayPosts;