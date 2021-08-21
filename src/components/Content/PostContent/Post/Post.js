import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7w-VUkvVobuC_P3TImDJalLsfOGGijkNRmA&usqp=CAU' />
                {props.name}
            <div>
                <span>like {props.amount}</span>
            </div>
        </div>
    )
}

export default Post