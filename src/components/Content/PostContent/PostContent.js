import Post from './Post/Post'
import classes from './PostContent.module.css'

const PostContent = (props) => {

    const postsElement = props.posts.map(post => <Post key={post.id} name={post.message} amount={post.likesCount} />)

    return (
        <div className={classes.postBlock}>
            <div className={classes.item}>
                <h2>My Post</h2>
                <div>
                    <div>
                        <textarea placeholder='text'></textarea>
                    </div>
                    <div>
                        <button className={classes.btn}>Add post</button> 
                    </div>
                </div>
            </div>
            <div className={classes.item}>
                    <h3>New post</h3>
            </div>
            <div className={classes.item}>
                { postsElement }
            </div>
        </div> 
    )
}

export default PostContent