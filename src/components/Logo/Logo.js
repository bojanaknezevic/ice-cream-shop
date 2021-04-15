import { checkPropTypes } from 'prop-types';
import iceCreamLogo from '../../assets/images/icons8-fruit-ice-cream-cone-64.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={iceCreamLogo} alt="Ice Cream Logo"/>
    </div>
);

export default logo;