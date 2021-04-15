import React from 'react';
import classes from './IceCreamFlavor.module.css';
//import PropTypes from 'prop-types';

const iceCreamFlavor = (props) => {
    let flavor = null;

    switch(props.type){
        case('cone'):
            flavor = <div className={classes.Cone}></div>;
            break;
        case('strawberry'):
            flavor = <div className={classes.Strawberry}></div>;
            break;
        case('chocolate'):
            flavor = <div className={classes.Chocolate}></div>;
            break;
        case('vanilla'):
            flavor = <div className={classes.Vanilla}></div>;
            break;
        default:
            flavor = null;
            break;
    }

    return flavor;
};

/*propTypes = {
    type: PropTypes.string.isRequired
}*/

export default iceCreamFlavor;
