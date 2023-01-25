import React, { useState } from 'react';



const Post = (props) => {
    const [userlike, setLike] = useState(false);
    const [userdislike, setDislike] = useState(false);
    
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
            <div>
                <div className='state-button'>
                    <button className={[userlike ? 'like': null, ''].join('')} type='submit' onClick={liked}>Like</button>
                    <button className={[userdislike ? 'dislike': null, ''].join('')} type='submit' onClick={dislike}>Dislike</button>
                </div>
            </div>
        </table>
     );
}
 
export default Post;

