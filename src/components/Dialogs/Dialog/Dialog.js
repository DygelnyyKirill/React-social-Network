import classes from './Dialog.module.css'
import { NavLink } from 'react-router-dom'

const Dialog = (props) => {
    
    let path = '/dialogs/' + props.id

    return (
        <div className={classes.dialog}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7w-VUkvVobuC_P3TImDJalLsfOGGijkNRmA&usqp=CAU' />
            <NavLink to={path} className={classes.name}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog