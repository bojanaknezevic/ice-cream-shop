import classes from './NavigationItems.module.css';
import { NavLink } from 'react-router-dom';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem path='/' exact>Ice Cream Builder</NavigationItem>
        <NavigationItem path='/orders'>Orders</NavigationItem>
    </ul>
);
    

export default navigationItems;

