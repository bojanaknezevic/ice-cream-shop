import React from 'react';
import classes from './IceCream.module.css';
import IceCreamFlavor from './IceCreamFlavor/IceCreamFlavor';

const iceCream = (props) => {
    let flavors = Object.keys(props.flavors)
        .map(flavKey => {
            return [...Array(props.flavors[flavKey])]
                .map((_, i) => {
                    return <IceCreamFlavor key={flavKey + i} type={flavKey} redniBroj={i}/>;
                });
        })
        .reduce((arr,el)=>{
            return arr.concat(el);
        },[]);
        let cone = <IceCreamFlavor type='cone'/>;
        if(flavors.length === 0){
            flavors = <div className={classes.Message}>
                        <h1>Welcome To Our Ice Cream Shop!</h1>
                        <h2>Please choose your ice cream flavor!</h2>
                      </div>
            
            cone = null;
        }

        return(
        <div className={classes.IceCream} style={props.style}>
            

            {flavors}
            {cone}
        </div>
    ); 
}

export default iceCream;