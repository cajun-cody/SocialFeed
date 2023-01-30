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
        
            <span className='status-buttons-1'>
                
                <button className={[userlike ? 'like': null, ''].join('')} type='submit' onClick={liked}>Like</button>
        <span class='button_right'>
           <button  className={[userdislike ? 'dislike': null, ''].join('')} type='submit' onClick={dislike}>Dislike</button> 
        </span>
                
                
            </span>
       
     );
}
 
export default PostStatus;

