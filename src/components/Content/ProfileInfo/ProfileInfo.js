import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-_mIfmXfxZydIr5sSyiVu6p_LMiG6L8ZDw&usqp=CAU' />
            </div>
            <div className={classes.item}>
                METINVEST COAL
            </div>
        </div>
    )
}

export default ProfileInfo