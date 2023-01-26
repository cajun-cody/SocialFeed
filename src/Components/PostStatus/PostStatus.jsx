import React, { useState } from 'react';
import './PostStatus.css';


const PostStatus = (props) => {
    const [userlike, setLike] = useState(false);
    const [userdislike, setDislike] = useState(false);
   
    /* Both functions below use if statements as boolean to set both states as false until they are clicked or unclicked. */
    function liked(){
        if(userlike){
            setLike(false)
        } else{
            setLike(true)
            if(userdislike){
                setDislike(false)
            }
        }
    }

    function dislike(){
        if(userdislike){
            setDislike(false)
        } else{
            setDislike(true)
            if(userlike){
                setLike(false)
            }
        }
    }

    return ( 
        <table>
            <div className='status-buttons'>
                <div className='approval-button'>
                    <button className={[userlike ? 'like': null, ''].join('')} type='submit' onClick={liked}>Like</button>
                </div>
                <div className='disapproval-button'>
                    <button className={[userdislike ? 'dislike': null, ''].join('')} type='submit' onClick={dislike}>Dislike</button>
                </div>
            </div>
        </table>
     );
}
 
export default PostStatus;

