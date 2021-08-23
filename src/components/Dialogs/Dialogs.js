import classes from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {

    const dialogsItem = props.dialogs.map( dialog => <Dialog key={dialog.id} name={dialog.name} id={dialog.id} />)

    const messagesElem = props.messages.map( message =>  <Message key={message.id} message={message.message} />)

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
               { dialogsItem }
            </div>
            <div clasName={classes.messages}>
                { messagesElem }
            </div>
        </div>
       
    )
}

export default Dialogs