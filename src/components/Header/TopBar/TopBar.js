import classes from './TopBar.module.css'

const TopBar = () => {
    return (
        <div className={classes.topBarContainer}>
           <div className={classes.topBarLeft}>
               <span className={classes.logo}>Coal</span>
           </div>
           <div className={classes.topBarCentre}>
               <div className={classes.searchbar}>
                   <input placeholder='Search for friends' className={classes.searchInput} />
               </div>
           </div>
           <div className={classes.topBarRight}>
               <div className={classes.topbarLinks}>
                    <span className={classes.topbarLink}>Homepage</span>
                    <span className={classes.topbarLink}>Timeline</span>
               </div>
           </div>
        </div>
    )
}
    
export default TopBar