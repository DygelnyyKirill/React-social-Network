import classes from './Message.module.css'

const Message = (props) => {

    return (
        <div className={classes.dialog}>
            <div className={classes.message}>
                <div className={classes.dialog}>{props.message}</div>
            </div>  
        </div>
    )
}

export default Message