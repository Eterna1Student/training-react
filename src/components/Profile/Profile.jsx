import s from './Profile.module.scss'
import NewPost from './newPost/newPost'
import Post from './Post/Post';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile(props) {

    let postElement = props.posts.map((dialog)=> <Post text={dialog.text} key={dialog.id} />)

    return (
        <main className={s.profile}>
            <ProfileInfo/>
            <div className={s.posts}>
                <NewPost addPost={props.addPost}/>
                { postElement }
            </div>
        </main>
    );
}

export default Profile;