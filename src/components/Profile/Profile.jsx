import s from './Profile.module.scss'
import Post from './Post/Post';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPostContainer from "./newPost/newPostContainer";



function Profile(props) {
    let state = props.store.getState()
    let postElement = state.profile.postData.map((dialog)=> <Post text={dialog.text} key={dialog.id} />)

    return (
        <main className={s.profile}>
            <ProfileInfo/>
            <div className={s.posts}>
                <NewPostContainer state={state} store={props.store}/>
                { postElement }
            </div>
        </main>
    );
}

export default Profile;