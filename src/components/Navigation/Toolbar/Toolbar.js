import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../../UI/Menu/Menu';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Menu menuClicked={props.menuClicked}/>
        <Logo height="100%"/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;