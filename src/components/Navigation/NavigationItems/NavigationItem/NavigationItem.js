import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink to={props.path} activeClassName={classes.active} exact={props.exact}>{props.children}</NavLink>
    </li>
);

export default navigationItem;