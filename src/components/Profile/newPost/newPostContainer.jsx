import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reduser";
import NewPost from "./newPost";


function NewPostContainer(props) {

    let addPost = ()=> {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

  return <NewPost updateNewPostText={onPostChange} newPostText={props.state.profile.newPostText} addPost={addPost} posts={props.state.profile.post}/>
}

export default NewPostContainer;