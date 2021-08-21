import PostContent from './PostContent/PostContent'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Content = (props) => {

    return (
        <div>
            <ProfileInfo />
            <PostContent posts={props.posts} />
        </div>
    )
}

export default Content