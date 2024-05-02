import s from './Profile.module.scss'
import NewPost from './newPost/newPost'
import Post from './Post/Post';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile(props) {

    let postData = [
        {id: 1, text: 'Привет! Как дела?'},
        {id: 2, text: 'Куда пропал?'},
        {id: 3, text: 'Да и хрен с тобой!'},
    ]

    let postElement = postData.map((dialog)=> <Post text={dialog.text} key={dialog.id} />)

    return (
        <main className={s.profile}>
            <ProfileInfo/>
            <div className={s.posts}>
                <NewPost/>
                { postElement }
            </div>
        </main>
    );
}

export default Profile;