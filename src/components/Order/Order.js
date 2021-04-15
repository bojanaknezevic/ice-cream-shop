import classes from './Order.module.css';

const Order = (props) => {
    const flavors = [];
    for(let flavorName in props.flavors){
        flavors.push({name: flavorName, amount: props.flavors[flavorName]});
    }
    
    const flavorOutput = flavors.map(flav => {
        return <span style={{display:'inline-block', textTransform: 'capitalize', margin: '0 5px'}}>{flav.name} ({flav.amount})</span>
    });
    return (
        <div className={classes.Order}>
            <p>Flavors: {flavorOutput}</p>
            <p>Price: <strong>${props.price}</strong></p>
        </div>
    );
}

export default Order;