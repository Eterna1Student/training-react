import s from './Profile.module.scss'
import NewPost from './newPost/newPost'
import Post from './Post/Post';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";


function Profile(props) {

    let postElement = props.posts.map((dialog)=> <Post text={dialog.text} key={dialog.id} />)

    return (
        <main className={s.profile}>
            <ProfileInfo/>
            <div className={s.posts}>
                <NewPost addPost={props.addPost}
                         newPostText={props.newPostText}
                         updateNewPostText={props.updateNewPostText}
                />
                { postElement }
            </div>
        </main>
    );
}

export default Profile;