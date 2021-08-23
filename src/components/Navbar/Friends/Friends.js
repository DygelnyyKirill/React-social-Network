import classes from './Friends.module.css'

const Friends = (props) => {
    console.log(props)
    return (
        <div className={classes.friends}>
            <div className={classes.friend}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7w-VUkvVobuC_P3TImDJalLsfOGGijkNRmA&usqp=CAU' />
                <div className={classes.item}>
                    <div className={classes.name}>{props.friend.name}</div>
                </div>
            </div>      
        </div>
        
    )
}

export default Friends