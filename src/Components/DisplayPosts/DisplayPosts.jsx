import PostStatus from "../PostStatus/PostStatus";



const DisplayPosts = (props) => {

    const date = new Date();
    let currentDay = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear =  date.getFullYear();

    return ( 
        <table>
        <tbody>
          {props.parentPosts.map((post) =>{
            return (
              <tr>
                <div className='post'>
                    <div>
                        <td>{post.name}</td>
                    </div>
                    <div>
                        <td>{post.comment}</td>
                    </div>
                    <div class='date-row'>
                        <p>Post Date: {currentMonth}/{currentDay}/{currentYear}</p>
                    </div>
                </div>
                <PostStatus post={post} />
              </tr>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default DisplayPosts;