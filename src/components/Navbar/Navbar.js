import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends'

const Navbar = (props) => {
    const friends = props.friends.map( friend => <Friends key={friend.id} friend={friend} />)
    
    return (
        <nav className={classes.nav}>
            <div>
                <div className={classes.item}>
                    <NavLink to='/content' activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs'>Messagase</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/news'>News</NavLink>
                </div>
                <div className={classes.item}> 
                    <NavLink to='/music'>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/settings'>Settings</NavLink>
                </div>
                <div className={classes.friends}>
                    <div> 
                        <h3>Friends</h3>
                        { friends } 
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar