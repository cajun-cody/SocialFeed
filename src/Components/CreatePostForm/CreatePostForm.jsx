import React, { useState } from 'react';
import './CreatePostForm.css';


const CreatePostForm = (props) => {

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            comment: comment,
        };
        props.addNewPostProp(newPost)
    }

    return ( 
        <form className='form-1' onSubmit={handleSubmit}>
            <div className='form-input'>
                <label className='form-name'>Name</label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
                <label className='form-name'>Comment</label>
                <input type='text' value={comment} onChange={(event) => setComment(event.target.value)}/>   
            </div>
            <div className='create-button'>
                <button class='btn' type='submit' >Create</button>
            </div>
        </form>
     );
}
 
export default CreatePostForm;
