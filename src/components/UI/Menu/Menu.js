import classes from './Menu.module.css';
const menu = (props) => (
    <div className={classes.DrawerToggle} onClick={props.menuClicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default menu;